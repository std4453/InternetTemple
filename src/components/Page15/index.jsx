import { AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import clouds from "assets/page_15_clouds.png";
import styles from "./index.module.css";
import { scaled } from "components/util";

export default function Page15() {
  return (
    <Page n={15}>
      <div className={styles.clouds}>
        <AbsoluteImage
          src={clouds}
          top={426}
          left={0}
          width={2279}
          height={1068}
        />
        <AbsoluteImage
          src={clouds}
          top={426}
          left={0}
          width={2279}
          height={1068}
          style={{
            transform: `translateX(calc(100% + ${scaled(271)}))`,
          }}
        />
      </div>
    </Page>
  );
}
