import styles from "./index.module.css";

export default function Page({ n, children }) {
  return (
    <div
      className={styles.root}
      style={{
        bottom: `${56.25 * (n - 1)}vw`,
      }}
    >
      {children}
    </div>
  );
}
