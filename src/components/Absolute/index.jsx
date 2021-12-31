const transform = (value) => {
  if (typeof value === "number") {
    return `${((value / 1920) * 100).toFixed(2)}vw`;
  } else {
    return value;
  }
};

export function Absolute({
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
}) {
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
      {...props}
    >
      {children}
    </Component>
  );
}

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

export function AbsoluteImage({ src, ...props }) {
  return <Absolute component="img" src={src} {...props} />;
}
