import bad from "assets/page_89_bad.svg";
import button from "assets/page_89_button.png";
import good from "assets/page_89_good.svg";
import ball from "assets/page_89_ball.png";
import hand from "assets/page_89_hand.png";
import handHover from "assets/page_89_hand_hover.png";
import {
  Absolute,
  AbsoluteClickArea,
  AbsoluteImage,
} from "components/Absolute";
import Page from "components/Page";
import { forwardRef, useCallback, useRef, useState } from "react";
import { useCanvas1, useCanvas2 } from "./canvas";
import { duration, duration2 } from "./constants";
import { chooseDraw } from "./draw";
import styles from "./index.module.css";
import { Cursor } from "components/Cursor";

const Canvas = forwardRef(({ canvasWidth, canvasHeight, ...props }, ref) => {
  return (
    <canvas {...props} width={canvasWidth} height={canvasHeight} ref={ref} />
  );
});

const ClickArea = ({ onClick, ...props }) => (
  <AbsoluteClickArea
    style={{ borderRadius: "50%" }}
    onClick={onClick}
    className={styles.click}
    {...props}
  />
);

export default function Page8to9() {
  const canvas1Ref = useRef(null);
  const trigger1 = useCanvas1(canvas1Ref);
  const canvas2Ref = useRef(null);
  const [trigger2, clear2] = useCanvas2(canvas2Ref);

  const [draw, setDraw] = useState(null);
  const redraw = useCallback(
    (type) => {
      setDraw(null);
      const newDraw = chooseDraw();
      trigger1(newDraw.lucky, type);
      clear2();
      setTimeout(() => {
        trigger2(newDraw.lucky, type);
      }, duration);
      setTimeout(() => {
        setDraw(newDraw);
      }, duration + duration2);
    },
    [trigger1, trigger2, clear2],
  );

  const [hover, setHover] = useState(false);
  const handleEnter = useCallback(() => {
    setHover(true);
  }, []);
  const handleLeave = useCallback(() => {
    setHover(false);
  }, []);

  return (
    <>
      <Page n={8}>
        <Cursor
          height={328}
          width={372}
          left={815}
          top={33}
          autoHide
          mouseEventFix
          absoluteOnTop
          absoluteChildren={
            <>
              <AbsoluteImage
                height={839}
                width={959}
                left={510}
                top={-195}
                src={ball}
                className={styles.ball}
              />
              <ClickArea
                height={118}
                width={118}
                left={842}
                top={37}
                onClick={() => {
                  redraw("❤");
                }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              />
              <ClickArea
                height={112}
                width={112}
                left={1050}
                top={139}
                onClick={() => {
                  redraw("💼");
                }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              />
              <ClickArea
                height={116}
                width={116}
                left={854}
                top={205}
                onClick={() => {
                  redraw("💰");
                }}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
              />
            </>
          }
        >
          {hover ? (
            <AbsoluteImage
              top={-150}
              left={-166}
              width={299}
              height={332}
              src={handHover}
            />
          ) : (
            <AbsoluteImage
              top={-170}
              left={-174}
              width={348}
              height={341}
              src={hand}
            />
          )}
        </Cursor>
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
          ref={canvas1Ref}
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
          component={Canvas}
          ref={canvas2Ref}
          canvasWidth={879 * 2}
          canvasHeight={267 * 2}
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
