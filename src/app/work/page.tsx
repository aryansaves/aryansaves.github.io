import { PageShell, ProjectList } from "@/components/site";
import { projects } from "@/lib/content";
import { pageMetadata } from "@/lib/urls";
import styles from "../page.module.css";

export const metadata = pageMetadata("Work", "Projects by Aryan Kumar Srivastava: servee, clockwork, Feedback, and Eiga.", "/work/");

export default function Work() {
  return (
    <PageShell active="work">
      <div className={styles.pageHeading}>
        <p className="eyebrow">Project directory</p>
        <div>
          <h1 className={styles.pageTitle}>Work.</h1>
          <p className={styles.pageSubtitle}>An index of projects. Explore the source or visit the site.</p>
        </div>
      </div>
      <section className={styles.contentGrid} aria-label="Projects">
        <div className={styles.sectionRail}><p className="eyebrow">01 — 04</p></div>
        <ProjectList items={projects} />
      </section>
    </PageShell>
  );
}
