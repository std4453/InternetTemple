import censer from "assets/page_4_censer.png";
import { AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import { calcScrollValue, useScrolledAfter } from "components/useOnScroll";
import { useEffect } from "react";
import { useStore } from "store";
import { useHowl } from "utils";

export default function Page4() {
  const scrolled = useScrolledAfter(calcScrollValue(3, 540));
  const howl = useHowl("/audio/part1_move.mp3");
  const soundEnabled = useStore((s) => s.soundEnabled);

  useEffect(() => {
    if (scrolled && soundEnabled) {
      howl.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled, howl]);

  return (
    <Page n={4}>
      <AbsoluteImage
        motion
        left={663}
        top={225}
        width={676}
        height={894}
        src={censer}
        animate={{
          translateX: scrolled ? "100%" : 0,
        }}
        transition={{
          translateX: {
            duration: 2,
          },
        }}
      />
    </Page>
  );
}
