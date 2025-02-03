import clouds from "assets/page_1_cloud.png";
import { Absolute, AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import styles from "./index.module.css";
import text2 from "assets/page_1_text2.png";
import { Disclaimer } from "./Disclaimer";
import { SoundSwitch } from "./SoundSwitch";

export default function Page1() {
  return (
    <Page n={1}>
      <AbsoluteImage height={1080} width={1920} left={0} top={0} src={text2} />
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
      <Disclaimer />
      <SoundSwitch />
    </Page>
  );
}
