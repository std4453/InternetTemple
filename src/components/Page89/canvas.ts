import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import ballImage from "assets/ball.png";
import { Draw } from "./draw";
import { Path } from "./help";
import { width, duration } from "./constants";

const balls = {
  "❤": {
    top: 232,
    left: 332,
    size: 118,
  },
  "💼": {
    top: 334,
    left: 540,
    size: 112,
  },
  "💰": {
    top: 400,
    left: 344,
    size: 116,
  },
} as const;

let type: keyof typeof balls | "" = "";

type MapT<Props> = {
  [x in `t${Extract<keyof Props, string>}`]: number;
};
const tr = <
  Props extends {
    [x: string]: number;
  },
>(
  canvas: HTMLCanvasElement,
  props: Props,
): MapT<Props> => {
  const result: {
    [x in keyof MapT<Props>]?: number;
  } = {};
  for (const key in props) {
    result[`t${key}`] = (props[key] / width) * canvas.width;
  }
  return result as MapT<Props>;
};

const drawBall = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  {
    x,
    y,
    size,
    deg = 0,
  }: {
    x: number;
    y: number;
    size: number;
    deg?: number;
  },
) => {
  const { tx, ty } = tr(canvas, { x, y });
  ctx.save();
  ctx.translate(tx, ty);
  ctx.rotate(deg);
  if (!type) return;
  const ball = balls[type];
  const { ts } = tr(canvas, { s: size });
  ctx.drawImage(
    image,
    ball.left,
    ball.top,
    ball.size,
    ball.size,
    -ts / 2,
    -ts / 2,
    ts,
    ts,
  );
  ctx.restore();
};

function easeInOutCubic(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

const stopPoint = 0.75;
const maxT = easeInOutCubic(stopPoint);

const easePath = (t: number) => {
  return easeInOutCubic(t * stopPoint) / maxT;
};

const getRotate = (t: number) => {
  return easePath(t) * 30;
};

type T = number;

const drawFrame = ({
  canvas,
  ctx,
  ballImage,
  t,
  path,
}: {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  ballImage: HTMLImageElement;
  t: T;
  path: Path;
}) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (t > 1) {
    return;
  }

  const { x, y } = path.getPoint(easePath(t));
  drawBall(canvas, ctx, ballImage, {
    x,
    y,
    size: 116,
    deg: getRotate(t),
  });
};

export const useCanvas = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const [startTime, setStartTime] = useState(0);

  const [imageLoaded, setImageLoaded] = useState(false);
  const image = useMemo(() => {
    const image = new Image();
    image.src = ballImage;
    image.onload = () => {
      setImageLoaded(true);
    };
    return image;
  }, []);

  const [spline, setSpline] = useState<Path>();

  useLayoutEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;
    let stopped = false;
    const frame = () => {
      if (type) {
        const elapsed = new Date().getTime() - startTime;
        const t = elapsed / duration;
        drawFrame({
          ctx,
          canvas: canvasRef.current!,
          ballImage: image,
          t,
          path: spline!,
        });
      }
      if (!stopped) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
    return () => {
      stopped = true;
    };
  }, [spline, canvasRef, image, startTime]);

  const trigger = useCallback(
    (newDraw: Draw, newType: keyof typeof balls | undefined) => {
      if (!imageLoaded) {
        console.warn("image not loaded");
      }
      if (newType) {
        type = newType;
      }
      setStartTime(new Date().getTime());
      setSpline(new Path(newDraw.lucky));
    },
    [imageLoaded],
  );

  return trigger;
};
