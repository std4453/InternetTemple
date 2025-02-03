import clouds from "assets/page_15_clouds.png";
import fugui from "assets/page_15_fugui.png";
import { AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import { scaled } from "components/util";
import styles from "./index.module.css";
import thankyou from "assets/page_15_thankyou.svg";
import hands from "assets/page_15_hands.png";

export default function Page15() {
  return (
    <Page n={15}>
      <div className={styles.credits}>
        <div
          style={{
            border: `${scaled(2)} solid #000000`,
            position: "relative",
          }}
        >
          <img
            src={fugui}
            alt="fugui"
            style={{
              width: scaled(356),
              height: scaled(264),
              display: "block",
            }}
          />
          <AbsoluteImage
            bottom={-35}
            left={42}
            width={275}
            height={75}
            src={thankyou}
          />
          <AbsoluteImage
            width={658}
            height={278}
            left={-152}
            bottom={-221}
            src={hands}
            motion
            animate={{
              translateX: "0.52vw",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        <div className={styles.creditsText}>
          {`CREDITS

設計｜DESIGN
牛乳泡貘

開發｜ DEVELOP
std4453

音樂 & 音效｜MUSIC & SFX
後昕宇

友情供稿｜SPECIAL GIF
福貴`}
        </div>
      </div>
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
