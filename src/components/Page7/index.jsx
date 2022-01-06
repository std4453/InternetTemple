import { AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import smoke from "assets/page_7_smoke.gif";

export default function Page7() {
  return (
    <Page n={7}>
      <AbsoluteImage
        height={1500}
        width={1920}
        left={0}
        top={-1005}
        src={smoke}
      />
    </Page>
  );
}
