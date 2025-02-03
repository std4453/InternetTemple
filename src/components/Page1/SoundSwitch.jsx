import music from "assets/page_1_music.png";
import musicSwitch from "assets/page_1_music_switch.png";
import noSound from "assets/page_1_no_sound.png";
import { Absolute, AbsoluteImage } from "components/Absolute";
import { scaled } from "components/util";
import { motion } from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { useStore } from "store";

export function SoundSwitch() {
  const toggleSound = useStore((s) => s.toggleSound);
  const soundEnabled = useStore((s) => s.soundEnabled);
  const [switchVisible, setSwitchVisible] = useState(true);

  const countdownRef = useRef(0);
  const startCountdown = useCallback(() => {
    const current = ++countdownRef.current;
    setTimeout(() => {
      if (current === countdownRef.current) {
        setSwitchVisible(false);
      }
    }, 5000);
  }, []);

  useLayoutEffect(() => {
    setTimeout(() => {
      startCountdown();
    }, 300);
  }, [startCountdown]);

  return (
    <Absolute
      left={61}
      bottom={36}
      width={114}
      height={120}
      style={{
        cursor: "pointer",
        position: "fixed",
        zIndex: 1000,
      }}
      onClick={toggleSound}
      component={motion.div}
      animate={{
        translateX: switchVisible
          ? "0px"
          : `${(-6.15 / 100) * window.innerWidth}px`,
      }}
      transition={{
        duration: switchVisible ? 0.17 : 1.05,
        ease: "easeOut",
      }}
      onMouseEnter={() => {
        setSwitchVisible(true);
        ++countdownRef.current;
      }}
      onMouseLeave={() => {
        startCountdown();
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          filter: `drop-shadow(0px ${scaled(4)} 0px #000000)`,
          position: "relative",
        }}
      >
        <motion.img
          src={musicSwitch}
          style={{
            width: "100%",
            height: "100%",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <AbsoluteImage left={12} top={18} width={84} height={81} src={music} />
      {soundEnabled || (
        <AbsoluteImage
          left={18}
          top={18.5}
          width={78}
          height={83}
          src={noSound}
        />
      )}
    </Absolute>
  );
}
