import Page from "components/Page";
import { AbsoluteImage } from "components/Absolute";
import clouds from "assets/page_1_cloud.png";
import text from "assets/page_1_text.png";
import styles from "./index.module.css";
import { Absolute } from "components/Absolute";

export default function Page1() {
  return (
    <Page n={1}>
      <AbsoluteImage
        height={630.16}
        width={1861.26}
        left={60}
        top={86}
        src={text}
      />
      <Absolute width={1920} left={0} bottom={0} className={styles.clouds}>
        <AbsoluteImage
          left={0}
          bottom={0}
          width={1920}
          height={852}
          src={clouds}
        />
        <AbsoluteImage
          left={0}
          bottom={0}
          width={1920}
          height={852}
          src={clouds}
          style={{
            transform: `translateX(${100 + (91 / 1920) * 100}vw)`,
          }}
        />
      </Absolute>
    </Page>
  );
}
