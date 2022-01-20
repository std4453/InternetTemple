import clouds from "assets/page_1_cloud.png";
import { Absolute, AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import styles from "./index.module.css";
import text from "assets/page_1_text.png";

export default function Page1() {
  return (
    <Page n={1}>
      <AbsoluteImage
        height={502.28}
        width={1800}
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
