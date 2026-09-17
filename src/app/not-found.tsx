import Link from "next/link";
import { Arrow, PageShell } from "@/components/site";
import styles from "./page.module.css";

export default function NotFound() {
  return <PageShell><section className={styles.error}><p className="eyebrow">404 / Page not found</p><h1 className={styles.pageTitle}>Nothing here.</h1><p>This page may have moved, or the address may be incorrect.</p><Link className={styles.textLink} href="/">Return home <Arrow /></Link></section></PageShell>;
}
