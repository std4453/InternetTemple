import { MouseEvent, useCallback, useRef } from "react";
import styles from "./index.module.css";

import float1 from "assets/page_56_float_1.png";
import float2 from "assets/page_56_float_2.png";
import float3 from "assets/page_56_float_3.png";
import float4 from "assets/page_56_float_4.png";
import float5 from "assets/page_56_float_5.png";
import float6 from "assets/page_56_float_6.png";

const duration = 3000;

const floats = [float1, float2, float3, float4, float5, float6];

export default function useLike(globalHover: boolean) {
  const ref = useRef<HTMLDivElement>(null);
  const like = useCallback(
    (x: number, y: number) => {
      if (!globalHover || !ref.current) {
        return;
      }
      const img = document.createElement("img");
      img.classList.add(styles.like);
      img.style.position = "absolute";
      img.style.width = `${Math.random() * 3 + 6}vw`;
      img.style.left = `calc(${x}px + ${(Math.random() - 0.5) * 7}vw)`;
      img.style.top = `calc(${y}px - 7vw)`;
      img.style.animationDuration = `${duration}ms`;
      img.src = floats[Math.floor(Math.random() * floats.length)];
      ref.current.appendChild(img);
      setTimeout(() => {
        img.remove();
      }, duration);
    },
    [globalHover],
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }
      const { left, top } = ref.current.getBoundingClientRect();
      like(e.clientX - left, e.clientY - top);
    },
    [like],
  );

  const el = (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: 0,
        pointerEvents: "none",
        userSelect: "none",
      }}
      ref={ref}
    />
  );

  return {
    el,
    handleClick,
  };
}
