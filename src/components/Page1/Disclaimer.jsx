import close from "assets/page_1_close.svg";
import { Absolute, AbsoluteImage } from "components/Absolute";
import { useState } from "react";
import styles from "./disclaimer.module.css";

function saveToLocalStorage() {
  localStorage.setItem("disclaimer", "true");
}
function loadFromLocalStorage() {
  return localStorage.getItem("disclaimer") === "true";
}

export function Disclaimer() {
  const [open, setOpen] = useState(() => !loadFromLocalStorage());

  if (!open) {
    return null;
  }

  return (
    <>
      <AbsoluteImage
        width={35}
        height={35}
        right={30}
        bottom={115}
        src={close}
        onClick={() => {
          setOpen(false);
          saveToLocalStorage();
        }}
        style={{
          cursor: "pointer",
          position: "fixed",
          zIndex: 1000,
        }}
      />
      <Absolute
        width={326}
        height={96}
        right={30}
        bottom={20}
        className={styles.disclaimer}
        style={{
          position: "fixed",
          zIndex: 1000,
        }}
      >
        {`*本網站僅供娛樂，請勿當真。
不准用於宗教、商業用途，
不准二次更改使用。`}
      </Absolute>
    </>
  );
}
