import Link from "next/link";
import { Arrow, IdentityImage, PageShell, ProjectList } from "@/components/site";
import { identity, projects } from "@/lib/content";
import { pageMetadata } from "@/lib/urls";
import styles from "./page.module.css";

export const metadata = pageMetadata("Backend Engineer", "Aryan Kumar Srivastava. Backend Engineer in Delhi. Selected work and contact.", "/");

export default function Home() {
  return (
    <PageShell active="home">
      <section className={styles.hero} aria-labelledby="identity-heading">
        <div className={styles.identityRail}><IdentityImage /><p className={styles.identityNote}>Personal portfolio<br />Delhi · IST</p></div>
        <div>
          <h1 className={styles.name} id="identity-heading"><span>Aryan Kumar</span>{" "}<span>Srivastava</span></h1>
          <p className={styles.role}>{identity.role}</p>
          <div className={styles.introBottom}><p className={styles.location}>Based in Delhi, India.<br />{identity.availability}.</p><a className={styles.textLink} href="#contact">Get in touch <Arrow diagonal /></a></div>
        </div>
      </section>
      <section className={styles.work} aria-labelledby="work-heading">
        <div className={styles.sectionRail}><h2 className="eyebrow" id="work-heading">Selected work</h2><p>01 — 03</p></div>
        <div><ProjectList items={projects.filter(project => project.selected)} /><div className={styles.workEnd}><Link href="/work/" className={styles.textLink}>All work <Arrow /></Link></div></div>
      </section>
    </PageShell>
  );
}
