import bad from "assets/page_89_bad.svg";
import button from "assets/page_89_button.png";
import good from "assets/page_89_good.svg";
import {
  Absolute,
  AbsoluteClickArea,
  AbsoluteImage,
} from "components/Absolute";
import Page from "components/Page";
import { forwardRef, useCallback, useRef, useState } from "react";
import { useCanvas } from "./canvas";
import { duration } from "./constants";
import { chooseDraw } from "./draw";
import styles from "./index.module.css";

function _Canvas({ canvasWidth, canvasHeight, ...props }, ref) {
  return (
    <canvas {...props} width={canvasWidth} height={canvasHeight} ref={ref} />
  );
}

const Canvas = forwardRef(_Canvas);

export default function Page89() {
  const canvasRef = useRef(null);
  const trigger = useCanvas(canvasRef);
  const [draw, setDraw] = useState(null);
  const redraw = useCallback(
    (type) => {
      setDraw(null);
      const newDraw = chooseDraw();
      trigger(newDraw, type);
      setTimeout(() => {
        setDraw(newDraw);
      }, duration);
    },
    [trigger],
  );

  return (
    <>
      <Page n={8}>
        <AbsoluteClickArea
          height={118}
          width={118}
          left={842}
          top={37}
          style={{ borderRadius: "50%" }}
          onClick={() => {
            redraw("❤");
          }}
        />
        <AbsoluteClickArea
          height={112}
          width={112}
          left={1050}
          top={139}
          style={{ borderRadius: "50%" }}
          onClick={() => {
            redraw("💼");
          }}
        />
        <AbsoluteClickArea
          height={116}
          width={116}
          left={854}
          top={205}
          style={{ borderRadius: "50%" }}
          onClick={() => {
            redraw("💰");
          }}
        />
      </Page>
      <Page n={9}>
        <Absolute
          height={183}
          width={377}
          left={1458}
          top={390}
          style={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <AbsoluteImage
          height={190}
          width={374}
          left={1461}
          top={390}
          src={button}
          className={styles.button}
          onClick={() => {
            redraw();
          }}
        />
        <Absolute
          component={Canvas}
          ref={canvasRef}
          height={565}
          width={873}
          left={86}
          top={574}
          canvasWidth={873 * 2}
          canvasHeight={565 * 2}
        />
        <Absolute
          height={267}
          width={879}
          left={517}
          top={281}
          className={styles.ballEnd}
        />
        {draw && (
          <>
            <Absolute
              height={264}
              width={391}
              left={1474}
              top={126}
              className={styles.textBg}
            />
            <Absolute
              height={227}
              width={231}
              left={1249}
              top={1}
              className={styles.luckyBg}
              style={{
                backgroundColor: draw.lucky ? "#FFC700" : "#9D80BF",
              }}
            />
            <Absolute right={101} top={8} className={styles.no}>
              No.{draw.id}
            </Absolute>
            {draw.lucky ? (
              <AbsoluteImage
                height={144.32}
                width={137.76}
                left={1293.52}
                top={40.24}
                src={good}
              />
            ) : (
              <AbsoluteImage
                src={bad}
                height={122.4}
                width={121.76}
                left={1300.08}
                top={55.28}
              />
            )}
            <Absolute right={101} top={69} className={styles.lucky}>
              {draw.lucky ? "Good" : "Bad"}
            </Absolute>
            <Absolute
              width={344}
              left={1497}
              top={145}
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: draw.html }}
            />
          </>
        )}
      </Page>
    </>
  );
}
