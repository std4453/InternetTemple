import { ScrollContext, useScroll } from "components/useOnScroll";
import { useCallback, useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Wrapper({ children, numPages }) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const [value, updateScroll] = useScroll();
  const handleScroll = useCallback(() => {
    const innerHeight = window.innerHeight * numPages;
    const scrollBottom =
      innerHeight - (outerRef.current.scrollTop + window.innerHeight);
    const value = (scrollBottom / window.innerWidth) * 100;
    updateScroll(value);
  }, [updateScroll]);
  useEffect(() => {
    const listener = () => {
      handleScroll();
    };
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [handleScroll, numPages]);

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
