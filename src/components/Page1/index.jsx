import Page from "components/Page";
import { AbsoluteImage } from "components/Absolute";
import clouds from "assets/page_1_cloud.png";

export default function Page1() {
  return (
    <Page n={1}>
      <AbsoluteImage
        left={0}
        bottom={0}
        width={1920}
        height={852}
        src={clouds}
      />
    </Page>
  );
}
