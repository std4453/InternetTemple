import { ScrollContext, useScroll } from "components/useOnScroll";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function Wrapper({ children, numPages }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const [scrollInit, setScrollInit] = useState(false);
  useEffect(() => {
    console.log(
      outerRef.current,
      ((numPages * window.innerWidth) / 1920) * 1080 - window.innerHeight,
    );
    outerRef.current.scrollTo(
      0,
      ((numPages * window.innerWidth) / 1920) * 1080 -
        window.innerHeight -
        /* MAGIC NUMBER */ 5,
    );
    setScrollInit(true);
  }, [numPages]);
  const [value, updateScroll] = useScroll();
  const handleScroll = useCallback(() => {
    if (!scrollInit) return;
    const pageHeight = (window.innerWidth / 1920) * 1080;
    const innerHeight = pageHeight * numPages;
    const scrollBottom =
      innerHeight - (outerRef.current.scrollTop + window.innerHeight);
    const value = (scrollBottom / pageHeight) * 100;
    updateScroll(value);
  }, [updateScroll, numPages, scrollInit]);
  useEffect(() => {
    const listener = () => {
      handleScroll();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [handleScroll]);

  return (
    <ScrollContext.Provider value={value}>
      <div className={styles.root} onScroll={handleScroll} ref={outerRef}>
        <div ref={innerRef} className={styles.inner}>
          {children}
        </div>
      </div>
    </ScrollContext.Provider>
  );
}
