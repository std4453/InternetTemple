import { AbsoluteImage } from "components/Absolute";
import chair from "assets/page_2_chair.gif";
import upper from "assets/page_2_upper.png";
import Page from "components/Page";

export default function Page2() {
  return (
    <Page n={2}>
      <AbsoluteImage
        height={374}
        width={422}
        left={1241}
        top={28}
        src={chair}
      />
      <AbsoluteImage
        height={547}
        width={471}
        left={1452}
        top={-58}
        src={upper}
        style={{
          transform: `translateY(${(-2 / 1920) * 100}vw)`,
        }}
      />
    </Page>
  );
}
