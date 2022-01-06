import { motion } from "framer-motion";
import { forwardRef } from "react";

const transform = (value) => {
  if (typeof value === "number") {
    return `${((value / 1920) * 100).toFixed(2)}vw`;
  } else {
    return value;
  }
};

const Absolute = forwardRef(
  (
    {
      left,
      top,
      right,
      bottom,
      width,
      height,
      children,
      component: Component = "div",
      style = {},
      ...props
    },
    ref,
  ) => {
    return (
      <Component
        style={{
          position: "absolute",
          left: transform(left),
          top: transform(top),
          right: transform(right),
          bottom: transform(bottom),
          width: transform(width),
          height: transform(height),
          ...style,
        }}
        ref={ref}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

export { Absolute };

export function AbsoluteClickArea({ onClick, style = {}, ...props }) {
  return (
    <Absolute
      style={{
        cursor: "pointer",
        ...style,
      }}
      onClick={onClick}
      {...props}
    />
  );
}

export function AbsoluteImage({ src, motion: useFramer = false, ...props }) {
  return (
    <Absolute component={useFramer ? motion.img : "img"} src={src} {...props} />
  );
}
