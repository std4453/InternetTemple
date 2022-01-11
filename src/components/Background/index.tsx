import { Image } from "components/Image";
import styles from "./index.module.css";
const page1 = "/bg/page_1.png";
const page2 = "/bg/page_2.png";
const page3 = "/bg/page_3.png";
const page4 = "/bg/page_4.png";
const page5 = "/bg/page_5.png";
const page6 = "/bg/page_6.png";
const page7 = "/bg/page_7.png";
const page8 = "/bg/page_8.png";
const page9 = "/bg/page_9.png";
const page10 = "/bg/page_10.png";
const page11 = "/bg/page_11.png";
const page12 = "/bg/page_12.png";
const page13 = "/bg/page_13.png";
const page14 = "/bg/page_14.png";
const page15 = "/bg/page_15.png";

const query = `?imageMogr2/thumbnail/${
  window.innerWidth * window.devicePixelRatio
}x/format/webp`;

export default function Background() {
  return (
    <div className={styles.root}>
      <Image className={styles.image} query={query} src={page15} />
      <Image className={styles.image} query={query} src={page14} />
      <Image className={styles.image} query={query} src={page13} />
      <Image className={styles.image} query={query} src={page12} />
      <Image className={styles.image} query={query} src={page11} />
      <Image className={styles.image} query={query} src={page10} />
      <Image className={styles.image} query={query} src={page9} />
      <Image className={styles.image} query={query} src={page8} />
      <Image className={styles.image} query={query} src={page7} />
      <Image className={styles.image} query={query} src={page6} />
      <Image className={styles.image} query={query} src={page5} />
      <Image className={styles.image} query={query} src={page4} />
      <Image className={styles.image} query={query} src={page3} />
      <Image className={styles.image} query={query} src={page2} />
      <Image className={styles.image} query={query} src={page1} />
    </div>
  );
}
