import bg10 from "assets/page_10.png";
import text10 from "assets/page_10_text.png";
import bg11 from "assets/page_11.png";
import hand from "assets/page_11_hand.png";
import text12 from "assets/page_12_text.png";
import {
  Absolute,
  AbsoluteClickArea,
  AbsoluteImage,
} from "components/Absolute";
import Page from "components/Page";
import { scaled } from "components/util";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import generate from "./generate";
import styles from "./index.module.css";
import cloudLeft from "assets/page_11_cloud_left.png";
import cloudRight from "assets/page_11_cloud_right.png";
import question12 from "assets/page_12_question.png";
import question13 from "assets/page_13_question.png";

export default function Page10to13() {
  const [name, setName] = useState("");

  const inputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = useCallback(
    (e) => {
      e?.preventDefault();
      if (!submitted) {
        const value = inputRef.current.value;
        if (!value) return false;
        setName(value);
        setSubmitted(true);
      }
      return false;
    },
    [submitted],
  );

  const result = useMemo(() => {
    if (!name) {
      return null;
    }
    return generate(name);
  }, [name]);

  const x = useMotionValue(window.innerWidth / 2);
  const y = useMotionValue(0);
  const handleMove = useCallback((event) => {
    x.set(event.nativeEvent.offsetX);
    y.set(event.nativeEvent.offsetY);
    event.stopPropagation();
  });
  const xInverted = useTransform(x, (v) => -v);
  const yInverted = useTransform(y, (v) => -v);

  const [inside, setInside] = useState(false);
  const handleEnter = useCallback(() => setInside(true), []);
  const handleLeave = useCallback(() => setInside(false), []);

  return (
    <>
      <Page n={10}>
        <AbsoluteImage
          height={257}
          width={380}
          left={670}
          top={511}
          src={text10}
        />
        <form onSubmit={handleSubmit}>
          <Absolute
            height={51}
            width={250}
            left={796}
            top={684}
            component="input"
            className={styles.input}
            ref={inputRef}
            style={{
              zIndex: 102,
            }}
            disabled={submitted}
          />
        </form>
        <AbsoluteClickArea
          height={83}
          width={110}
          left={1050}
          top={667}
          onClick={handleSubmit}
          style={{
            zIndex: 102,
            cursor: submitted ? "not-allowed" : "pointer",
          }}
        />
        <AbsoluteImage
          height={2185}
          width={1920}
          top={-1275}
          left={0}
          src={cloudLeft}
          style={{
            zIndex: 101,
            pointerEvents: "none",
          }}
          motion
          animate={{
            translateX: submitted ? "-80%" : 0,
          }}
          transition={{
            duration: 3.5,
            ease: "easeIn",
          }}
        />
        <AbsoluteImage
          height={2185}
          width={1920}
          top={-1275}
          left={0}
          src={cloudRight}
          style={{
            zIndex: 100,
            pointerEvents: "none",
          }}
          motion
          animate={{
            translateX: submitted ? "100%" : 0,
          }}
          transition={{
            duration: 3.5,
            ease: "easeIn",
          }}
        />
        <Absolute
          width={1920}
          left={0}
          top={344}
          className={styles.hint}
          component={motion.div}
          animate={{
            opacity: submitted ? 0 : 1,
          }}
          transition={{
            duration: 1.6,
          }}
        >
          輸入姓名，得到預言的指示
        </Absolute>
      </Page>
      <Page n={11}>
        {result && (
          <Absolute
            height={880}
            width={1920}
            left={0}
            top={386}
            className={styles.handArea}
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <motion.div
              style={{
                width: 0,
                height: 0,
                position: "absolute",
                left: 0,
                top: 0,
                userSelect: "none",
                pointerEvents: "none",
                translateX: x,
                translateY: y,
              }}
              animate={{
                opacity: inside ? 1 : 0,
              }}
              transition={{
                duration: 0.1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: scaled(-146),
                  top: scaled(-63),
                  width: scaled(290),
                  height: scaled(157),
                  overflow: "hidden",
                  clipPath:
                    "path('M65 -16.5C80.5 -16.5 110.5 -10 148.5 15C158.333 4.5 183.8 -16.5 207 -16.5C236 -16.5 281 34 284 62C287 90 255 141.5 232.5 140.5C210 139.5 162 118 140 107.5C125.5 115 93 139 65 136C37 133 -6.5 108 -6.5 68.5C-6.5 29 49.5 -16.5 65 -16.5Z')",
                }}
              >
                {/* 背景图 */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: scaled(-386 + 68),
                    left: scaled(0 + 137),
                    width: scaled(1920),
                    height: scaled(1080),
                    translateX: xInverted,
                    translateY: yInverted,
                  }}
                >
                  <AbsoluteImage
                    width={1920}
                    height={1080}
                    left={0}
                    top={0}
                    src={bg11}
                  />
                  <AbsoluteImage
                    width={1920}
                    height={1080}
                    left={0}
                    top={1080}
                    src={bg10}
                  />
                </motion.div>
                {/* 反向效果 */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    mixBlendMode: "difference",
                    backgroundColor: "#A4ADFF",
                  }}
                />
                {/* 文字 */}
                <motion.div
                  style={{
                    position: "absolute",
                    top: scaled(-386 + 68),
                    left: scaled(0 + 137),
                    width: scaled(1920),
                    height: scaled(1080),
                    translateX: xInverted,
                    translateY: yInverted,
                  }}
                >
                  <Absolute
                    left={184}
                    top={434}
                    width={996}
                    className={styles.advice}
                  >
                    {result.advice1}
                  </Absolute>
                  <Absolute
                    left={834}
                    top={817}
                    right={119}
                    bottom={178}
                    className={styles.advice}
                  >
                    {result.advice2}
                  </Absolute>
                </motion.div>
              </div>
              <img
                style={{
                  position: "relative",
                  width: scaled(984),
                  height: scaled(875),
                  top: scaled(-381),
                  left: scaled(-486),
                }}
                src={hand}
              />
            </motion.div>
          </Absolute>
        )}
      </Page>
      <Page n={12}>
        <AbsoluteImage
          height={1664}
          width={1920}
          left={0}
          top={-219}
          src={text12}
        />
        {result && (
          <a href={result.avatarLink}>
            <AbsoluteImage
              height={207}
              width={207}
              left={857}
              top={406}
              src={result.avatar}
              className={styles.avatar}
            />
          </a>
        )}
        {!result && (
          <AbsoluteImage
            height={255}
            width={183}
            left={869}
            top={378}
            src={question12}
          />
        )}
      </Page>
      <Page n={13}>
        {result && (
          <>
            <AbsoluteImage
              height={430}
              width={430}
              left={792.5}
              top={558.5}
              src={result.merch}
              className={styles.merch}
            />
            <AbsoluteClickArea
              component="a"
              href={result.merchLink}
              target="_blank"
              height={169}
              width={223}
              left={1298}
              top={1080}
              className={styles.link}
            />
          </>
        )}
        {!result && (
          <AbsoluteImage
            height={389}
            width={279}
            left={849}
            top={627}
            src={question13}
          />
        )}
      </Page>
    </>
  );
}
