import text10 from "assets/page_10_text.png";
import cloudLeft from "assets/page_11_cloud_left.png";
import cloudRight from "assets/page_11_cloud_right.png";
import hand from "assets/page_11_hand.png";
import question12 from "assets/page_12_question.png";
import question13 from "assets/page_13_question.png";
import {
  Absolute,
  AbsoluteClickArea,
  AbsoluteImage
} from "components/Absolute";
import { Cursor, CursorInverted } from "components/Cursor";
import { Image } from "components/Image";
import Page from "components/Page";
import { motion } from "framer-motion";
import { useCallback, useMemo, useRef, useState } from "react";
import generate from "./generate";
import styles from "./index.module.css";
const bg10 = "/bg/page_10.png";
const bg11 = "/bg/page_11.png";
const text12 = "/bg/page_12_text.png";

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
          <Cursor height={880} width={1920} left={0} top={386} autoHide>
            <Absolute
              left={-146}
              top={-63}
              width={290}
              height={157}
              style={{
                overflow: "hidden",
                clipPath:
                  "path('M65 -16.5C80.5 -16.5 110.5 -10 148.5 15C158.333 4.5 183.8 -16.5 207 -16.5C236 -16.5 281 34 284 62C287 90 255 141.5 232.5 140.5C210 139.5 162 118 140 107.5C125.5 115 93 139 65 136C37 133 -6.5 108 -6.5 68.5C-6.5 29 49.5 -16.5 65 -16.5Z')",
              }}
            >
              {/* 背景图 */}
              <CursorInverted left={146} top={63} width={1920} height={1080}>
                <AbsoluteImage
                  width={1920}
                  height={1080}
                  left={0}
                  top={0}
                  component={Image}
                  src={bg11}
                  query={`?imageMogr2/thumbnail/${window.innerWidth}x/format/webp`}
                />
                <AbsoluteImage
                  width={1920}
                  height={1080}
                  left={0}
                  top={1080}
                  component={Image}
                  src={bg10}
                  query={`?imageMogr2/thumbnail/${window.innerWidth}x/format/webp`}
                />
              </CursorInverted>
              {/* 反向效果 */}
              <Absolute
                left={0}
                top={0}
                right={0}
                bottom={0}
                style={{
                  mixBlendMode: "difference",
                  backgroundColor: "#A4ADFF",
                }}
              />
              {/* 文字 */}
              <CursorInverted left={137} top={68} width={1920} height={1080}>
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
              </CursorInverted>
            </Absolute>
            <AbsoluteImage
              width={984}
              height={875}
              top={-381}
              left={-486}
              src={hand}
            />
          </Cursor>
        )}
      </Page>
      <Page n={12}>
        <AbsoluteImage
          height={1664}
          width={1920}
          left={0}
          top={-219}
          component={Image}
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
