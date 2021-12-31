import { AbsoluteImage } from "components/Absolute";
import { AbsoluteClickArea } from "components/Absolute";
import Page from "components/Page";
import cardBg from "assets/page_89_card_bg.svg";
import button from "assets/page_89_button.png";
import { Absolute } from "components/Absolute";
import styles from "./index.module.css";
import { useCallback } from "react";

export default function Page89() {
  const handleButtonClick = useCallback(() => {}, []);
  return (
    <>
      <Page n={8}>
        <AbsoluteClickArea height={328} width={372} left={815} top={33} />
      </Page>
      <Page n={9}>
        <Absolute
          height={183}
          width={377}
          left={1458}
          top={390}
          style={{
            backgroundColor: "#FFFFFF",
          }}
        />
        <AbsoluteImage
          height={389}
          width={622}
          left={1243}
          top={1}
          src={cardBg}
        />
        <AbsoluteImage
          height={190}
          width={374}
          left={1461}
          top={390}
          src={button}
          className={styles.button}
          onClick={handleButtonClick}
        />
      </Page>
    </>
  );
}
