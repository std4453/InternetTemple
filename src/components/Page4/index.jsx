import { AbsoluteImage } from "components/Absolute";
import censer from "assets/page_4_censer.png";
import Page from "components/Page";
import { calcScrollValue, useScrolledAfter } from "components/useOnScroll";

export default function Page4() {
  const scrolled = useScrolledAfter(calcScrollValue(3, 540));

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
