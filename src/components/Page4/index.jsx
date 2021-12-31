import { AbsoluteImage } from "components/Absolute";
import censer from "assets/page_4_censer.png";
import Page from "components/Page";

export default function Page4() {
  return (
    <Page n={4}>
      <AbsoluteImage
        left={663}
        top={225}
        width={676}
        height={894}
        src={censer}
      />
    </Page>
  );
}
