import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

export const ScrollContext = createContext(null);

export const useScroll = () => {
  const listenersRef = useRef([]);
  const listen = useCallback((callback) => {
    listenersRef.current.push(callback);
  }, []);
  const unlisten = useCallback((callback) => {
    const index = listenersRef.current.findIndex((cb) => cb === callback);
    if (index >= 0) {
      listenersRef.current.splice(index, 1);
    }
  }, []);

  const updateScroll = useCallback((value) => {
    for (const listener of listenersRef.current) {
      try {
        listener?.(value);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const value = useMemo(
    () => ({
      listen,
      unlisten,
    }),
    [listen, unlisten],
  );

  return [value, updateScroll];
};

export const useOnScroll = (callback) => {
  const { listen, unlisten } = useContext(ScrollContext);

  useEffect(() => {
    if (callback) {
      listen(callback);
      return () => {
        unlisten(callback);
      };
    }
  }, [callback, listen, unlisten]);
};

export const useScrolledAfter = (threshold) => {
  const [scrolled, setScrolled] = useState(false);

  const callback = useCallback(
    (value) => {
      if (value > threshold) {
        setScrolled(true);
      }
    },
    [threshold],
  );
  useOnScroll(callback);

  return scrolled;
};

/**
 * @param page
 * @param bottom px (on figma)
 * @return page height percentage (scaled)
 */
export const calcScrollValue = (page, bottom) => {
  return (page - 1) * 100 + (bottom / 1080) * 100;
};
