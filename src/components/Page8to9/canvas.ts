import React, { useCallback, useLayoutEffect, useMemo, useState } from "react";
import ballImage from "assets/page_89_ball.png";
import { Path } from "./help";
import { width, duration, duration2 } from "./constants";

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
  type: keyof typeof balls,
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

type Type = keyof typeof balls | "";

const useType = (): [Type, (t?: Type) => void] => {
  const [type, actualSetType] = useState<keyof typeof balls | "">("");

  const setType = useCallback((type?: Type) => {
    actualSetType((oldType) => type ?? oldType);
  }, []);

  return [type, setType];
};

export const useCanvas1 = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
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
  const [type, setType] = useType();

  useLayoutEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;
    let stopped = false;
    const frame = () => {
      if (type && canvasRef.current && spline) {
        const elapsed = new Date().getTime() - startTime;
        const t = elapsed / duration;

        const canvas = canvasRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (t > 1) {
          return;
        }

        const { x, y } = spline.getPoint(easePath(t));
        drawBall(canvas, ctx, image, type, {
          x,
          y,
          size: 116,
          deg: getRotate(t),
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
  }, [spline, canvasRef, image, startTime, type]);

  const trigger = useCallback(
    (lucky: boolean, newType: keyof typeof balls | undefined) => {
      if (!imageLoaded) {
        console.warn("image not loaded");
      }
      if (newType) {
        setType(newType);
      }
      setStartTime(new Date().getTime());
      setSpline(new Path(lucky));
    },
    [imageLoaded, setType],
  );

  return trigger;
};

function easeOutBounce(x: number): number {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}

export const useCanvas2 = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
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

  const [lucky, setLucky] = useState(false);
  const [type, setType] = useType();

  useLayoutEffect(() => {
    const ctx = canvasRef.current!.getContext("2d")!;
    let stopped = false;
    const frame = () => {
      if (canvasRef.current) {
        const elapsed = new Date().getTime() - startTime;
        const t = Math.min(elapsed / duration2, 1);

        const canvas = canvasRef.current;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const y = easeOutBounce(t) * (207 - 56 + 116) - 116;

        if (type) {
          drawBall(canvas, ctx, image, type, {
            x: lucky ? 241 : 639.5,
            y,
            size: 116,
          });
        }
      }
      if (!stopped) {
        requestAnimationFrame(frame);
      }
    };
    requestAnimationFrame(frame);
    return () => {
      stopped = true;
    };
  }, [canvasRef, image, startTime, lucky, type]);

  const trigger = useCallback(
    (lucky: boolean, type?: keyof typeof balls) => {
      if (!imageLoaded) {
        console.warn("image not loaded");
      }
      setStartTime(new Date().getTime());
      setLucky(lucky);
      setType(type);
    },
    [imageLoaded, setType],
  );

  const clear = useCallback(() => {
    setType("");
  }, [setType]);

  return [trigger, clear];
};
