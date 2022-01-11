import { Absolute, AbsoluteProps } from "components/Absolute";
import { scaled } from "components/util";
import {
  motion,
  MotionValue,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import styles from "./index.module.css";

export interface CursorProps {
  width: number;
  height: number;

  left?: number;
  top?: number;

  children: ReactNode;

  autoHide?: boolean;
}

interface CursorContextValue {
  xInverted: MotionValue<string>;
  yInverted: MotionValue<string>;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function Cursor({
  width,
  height,

  left,
  top,

  children,

  autoHide = false,
}: CursorProps) {
  const x = useMotionValue(((width / 1920) * window.innerWidth) / 2);
  const y = useMotionValue(((height / 1920) * window.innerWidth) / 2);
  const handleMove = useCallback(
    (event) => {
      x.set(event.nativeEvent.offsetX);
      y.set(event.nativeEvent.offsetY);
      event.stopPropagation();
    },
    [x, y],
  );
  const xInverted = useTransform(x, (v) => `calc(${-v}px - ${scaled(left)})`);
  const yInverted = useTransform(y, (v) => `calc(${-v}px - ${scaled(top)})`);

  const [inside, setInside] = useState(false);
  const handleEnter = useCallback(() => setInside(true), []);
  const handleLeave = useCallback(() => setInside(false), []);

  const value = useMemo(
    () => ({
      xInverted,
      yInverted,
    }),
    [xInverted, yInverted],
  );

  return (
    <CursorContext.Provider value={value}>
      <Absolute
        {...{
          width,
          height,
          left,
          top,
        }}
        className={styles.area}
        onMouseMove={handleMove}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <motion.div
          style={{
            translateX: x,
            translateY: y,
          }}
          className={styles.inner}
          animate={{
            opacity: autoHide ? (inside ? 1 : 0) : 1,
          }}
          transition={{
            duration: 0.1,
          }}
        >
          {children}
        </motion.div>
      </Absolute>
    </CursorContext.Provider>
  );
}

export type CursorInvertedProps = AbsoluteProps<typeof motion.div> & {
  children: ReactNode;
};

export function CursorInverted({
  style = {},
  children,
  ...props
}: CursorInvertedProps) {
  const { xInverted, yInverted } = useContext(CursorContext) ?? {};
  return (
    <Absolute
      component={motion.div}
      style={{
        translateX: xInverted,
        translateY: yInverted,
        ...style,
      }}
      {...props}
    >
      {children}
    </Absolute>
  );
}
