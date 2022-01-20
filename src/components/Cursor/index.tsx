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
  MouseEvent,
} from "react";
import styles from "./index.module.css";

export interface CursorProps {
  width: number;
  height: number;

  left: number;
  top: number;

  children: ReactNode;

  autoHide?: boolean;
  mouseEventFix?: boolean;

  absoluteChildren?: ReactNode;

  onClick?: (e: MouseEvent) => void;
}

interface CursorContextValue {
  xInverted: MotionValue<string>;
  yInverted: MotionValue<string>;
  left: number;
  top: number;
}

const CursorContext = createContext<CursorContextValue | null>(null);

export function Cursor({
  width,
  height,

  left,
  top,

  children,

  autoHide = false,
  mouseEventFix = false,

  absoluteChildren,
  onClick,
}: CursorProps) {
  const x = useMotionValue(((width / 1920) * window.innerWidth) / 2);
  const y = useMotionValue(((height / 1920) * window.innerWidth) / 2);
  const handleMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (mouseEventFix) {
        const { top, left } = event.currentTarget.getBoundingClientRect();
        x.set(event.nativeEvent.clientX - left);
        y.set(event.nativeEvent.clientY - top);
      } else {
        x.set(event.nativeEvent.offsetX);
        y.set(event.nativeEvent.offsetY);
      }
      event.stopPropagation();
    },
    [x, y, mouseEventFix],
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
      left,
      top,
    }),
    [xInverted, yInverted, left, top],
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
        onClick={onClick}
      >
        <CursorAbsolute>{absoluteChildren}</CursorAbsolute>
        <motion.div
          style={{
            translateX: x,
            translateY: y,
            pointerEvents: "none",
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

export function CursorAbsolute({ children }: { children?: ReactNode }) {
  const { left = 0, top = 0 } = useContext(CursorContext) ?? {};
  return (
    <Absolute left={-left} top={-top}>
      {children}
    </Absolute>
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
