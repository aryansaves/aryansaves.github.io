import styles from "./DeskBackground.module.css";

export function DeskBackground() {
  return (
    <div className={styles.desk} aria-hidden="true">
      <div className={`${styles.backing} ${styles.checks}`} />
      <div className={`${styles.backing} ${styles.waves}`} />
      <div className={`${styles.backing} ${styles.stripes}`} />
    </div>
  );
}
