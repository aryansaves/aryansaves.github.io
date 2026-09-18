import styles from "./RoleRotator.module.css";

const titles = ["backend engineer", "avid rubber ducker", '"just ..."'] as const;

export function RoleRotator() {
  return (
    <span className={styles.viewport}>
      <span className={styles.screenReaderText}>{titles.join(", ")}</span>
      <span className={styles.track} aria-hidden="true">
        {[...titles, titles[0]].map((title, index) => (
          <span className={styles.frame} key={`${title}-${index}`}>
            <span className={styles.paper}>{title}</span>
          </span>
        ))}
      </span>
    </span>
  );
}
