import { motion } from "framer-motion";
import React, {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  CSSProperties,
  ElementType,
  ForwardedRef,
  forwardRef,
  JSXElementConstructor,
  ReactElement,
} from "react";

const transform = (value: number | undefined): string | undefined => {
  if (typeof value === "number") {
    return `${((value / 1920) * 100).toFixed(2)}vw`;
  } else {
    return value;
  }
};

type PolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>["ref"];

type PolymorphicPropsWithRef<T extends ElementType, P = {}> = P &
  Omit<ComponentPropsWithoutRef<T>, keyof P | "component"> & {
    component?: T;
    ref?: PolymorphicRef<T>;
  };

interface AbsoluteSelfProps {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

type AbsoluteProps<T extends ElementType> = PolymorphicPropsWithRef<
  T,
  AbsoluteSelfProps
>;

type AbsoluteComponent = <T extends ElementType = "div">(
  props: AbsoluteProps<T>,
) => ReactElement | null;

export const Absolute: AbsoluteComponent = forwardRef(
  <T extends ElementType = "div">(
    {
      left,
      top,
      right,
      bottom,
      width,
      height,
      component,
      style = {},
      ...props
    }: AbsoluteProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const Component = component ?? "div";
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
      />
    );
  },
);

interface AbsoluteClickAreaSelfProps extends AbsoluteSelfProps {
  onClick?: () => void;
}

type AbsoluteClickAreaProps<T extends ElementType> = PolymorphicPropsWithRef<
  T,
  AbsoluteClickAreaSelfProps
>;

type AbsoluteClickAreaComponent = <T extends ElementType = "div">(
  props: AbsoluteClickAreaProps<T>,
) => ReactElement | null;

export const AbsoluteClickArea: AbsoluteClickAreaComponent = forwardRef(
  <T extends ElementType = "div">(
    { onClick, style = {}, ...props }: AbsoluteClickAreaProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <Absolute
        style={{
          cursor: "pointer",
          ...style,
        }}
        onClick={onClick}
        ref={ref}
        {...props}
      />
    );
  },
);

interface AbsoluteImageSelfProps extends AbsoluteSelfProps {
  src: string;
  motion?: boolean;
}

type AbsoluteImageProps<T extends ElementType> = PolymorphicPropsWithRef<
  T,
  AbsoluteImageSelfProps
>;

type AbsoluteImageComponent = <T extends ElementType = "img">(
  props: AbsoluteImageProps<T>,
) => ReactElement | null;

export const AbsoluteImage: AbsoluteImageComponent = forwardRef(
  <T extends ElementType = "img">(
    { src, motion: useFramer = false, ...props }: AbsoluteImageProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    return (
      <Absolute
        component={useFramer ? motion.img : "img"}
        src={src}
        {...props}
      />
    );
  },
);
