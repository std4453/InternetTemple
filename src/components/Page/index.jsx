import styles from "./index.module.css";

export default function Page({ n, children, style = {}, ...props }) {
  return (
    <div
      className={styles.root}
      style={{
        bottom: `${56.25 * (n - 1)}vw`,
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
