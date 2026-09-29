import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <main className={styles.stage}>
      <section className={`${styles.sheet} ${styles.missing}`}>
        <p className={styles.kicker}>404 / Page not found</p>
        <h1 className={styles.name}>Nothing here.</h1>
        <p>The page you were looking for could not be found.</p>
        <Link href="/" target="_blank" rel="noopener noreferrer">Return to the portfolio ↗</Link>
      </section>
    </main>
  );
}
