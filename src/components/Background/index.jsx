import page1 from "assets/page_1.png";
import page2 from "assets/page_2.png";
import page3 from "assets/page_3.png";
import page4 from "assets/page_4.png";
import page5 from "assets/page_5.png";
import page6 from "assets/page_6.png";
import page7 from "assets/page_7.png";
import page8 from "assets/page_8.png";
import page9 from "assets/page_9.png";
import page10 from "assets/page_10.png";
import page11 from "assets/page_11.png";
import page12 from "assets/page_12.png";
import page13 from "assets/page_13.png";
import page14 from "assets/page_14.png";
import page15 from "assets/page_15.png";
import styles from "./index.module.css";

export default function Background() {
  return (
    <div className={styles.root}>
      <img src={page15} />
      <img src={page14} />
      <img src={page13} />
      <img src={page12} />
      <img src={page11} />
      <img src={page10} />
      <img src={page9} />
      <img src={page8} />
      <img src={page7} />
      <img src={page6} />
      <img src={page5} />
      <img src={page4} />
      <img src={page3} />
      <img src={page2} />
      <img src={page1} />
    </div>
  );
}
