import hand from "assets/page_56_hand.png";
import smoke from "assets/page_56_smoke.gif";
import { Absolute, AbsoluteImage } from "components/Absolute";
import { Cursor } from "components/Cursor";
import Page from "components/Page";
import { kamiData } from "components/Page5to6/data";
import { KamiConfig } from "components/Page5to6/type";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import useLike from "./useLike";

function useKami(
  { page, path, tag, hoverTag }: KamiConfig,
  setGlobalHover: (hover: boolean) => void,
) {
  const [hover, setHover] = useState(false);
  const handleHover = useCallback(() => {
    setHover(true);
    setGlobalHover?.(true);
  }, [setGlobalHover]);
  const handleLeave = useCallback(() => {
    setHover(false);
    setGlobalHover?.(false);
  }, [setGlobalHover]);

  const pathEl = (
    <path
      d={path}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      fill="black"
      style={{ pointerEvents: "auto" }}
    />
  );
  const tagEl = (
    <>
      <AbsoluteImage {...tag} />
      <AbsoluteImage
        component={motion.img}
        {...hoverTag}
        animate={{
          opacity: hover ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
      />
    </>
  );

  return {
    page5: page === 5 ? tagEl : undefined,
    page6: page === 6 ? tagEl : undefined,
    pathEl,
  };
}

export default function Kami() {
  const [globalHover, setGlobalHover] = useState(false);
  const results: ReturnType<typeof useKami>[] = [];
  for (const config of kamiData) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    results.push(useKami(config, setGlobalHover));
  }

  const { handleClick, el } = useLike(globalHover);

  return (
    <>
      {el}
      <Page n={6}>
        <Cursor
          top={-66}
          left={0}
          width={1920}
          height={2394}
          absoluteChildren={[
            <Absolute
              component="svg"
              height={2104}
              width={1768.5}
              left={86.5}
              top={-66}
              style={{
                opacity: 0,
                pointerEvents: "none",
              }}
              viewBox="0 -66 1771 2104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {results.map(({ pathEl }) => pathEl)}
            </Absolute>,
            <Absolute
              top={1080}
              left={0}
              width={1920}
              height={1080}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {results.map(({ page5 }) => page5)}
            </Absolute>,
            <Absolute
              top={0}
              left={0}
              width={1920}
              height={1080}
              style={{ pointerEvents: "none", userSelect: "none" }}
            >
              {results.map(({ page6 }) => page6)}
            </Absolute>,
          ]}
          mouseEventFix
          autoHide
          onClick={handleClick}
        >
          <AbsoluteImage
            left={-166}
            top={-128}
            width={333}
            height={255}
            src={hand}
          />
          <AbsoluteImage
            left={-209}
            top={-128 - 208}
            width={418}
            height={491}
            src={smoke}
            style={{
              opacity: globalHover ? 1 : 0,
            }}
          />
        </Cursor>
      </Page>
    </>
  );
}
