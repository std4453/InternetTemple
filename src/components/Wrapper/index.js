import { ScrollContext, useScroll } from "components/useOnScroll";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

export default function Wrapper({ children, numPages }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const [scrollInit, setScrollInit] = useState(false);
  useEffect(() => {
    outerRef.current.scrollTo(0, (numPages - 1) * window.innerHeight);
    setScrollInit(true);
  }, []);
  const [value, updateScroll] = useScroll();
  const handleScroll = useCallback(() => {
    if (!scrollInit) return;
    const innerHeight = window.innerHeight * numPages;
    const scrollBottom =
      innerHeight - (outerRef.current.scrollTop + window.innerHeight);
    const value = (scrollBottom / window.innerWidth) * 100;
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
