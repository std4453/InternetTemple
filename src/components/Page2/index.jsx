import chair from "assets/page_2_chair.gif";
import fugui from "assets/page_2_fugui.png";
import fundme from "assets/page_2_fundme.png";
import upper from "assets/page_2_upper.png";
import { Absolute, AbsoluteImage } from "components/Absolute";
import Page from "components/Page";
import { scaled } from "components/util";
import styles from "./index.module.css";

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
      <Absolute bottom={130} right={308} width={320} height={292}>
        <div
          style={{
            border: `${scaled(2)} solid #000000`,
          }}
        >
          <img
            src={fugui}
            alt="fugui"
            style={{
              width: scaled(316),
              height: scaled(236),
              display: "block",
            }}
          />
        </div>
        <div className={styles.fuguiText}>
          ～*友情演出*～
          <br />
          @福貴
        </div>
      </Absolute>
      <AbsoluteImage
        top={98}
        left={229}
        width={198}
        height={199}
        src={fundme}
      />
    </Page>
  );
}
