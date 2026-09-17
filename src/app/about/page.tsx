import { Arrow, IdentityImage, PageShell } from "@/components/site";
import { identity } from "@/lib/content";
import { pageMetadata, publicUrl } from "@/lib/urls";
import styles from "../page.module.css";

export const metadata = pageMetadata("About", "Aryan Kumar Srivastava, Backend Engineer in Delhi and BTech student at KIET.", "/about/");

export default function About() {
  return (
    <PageShell active="about">
      <div className={styles.pageHeading}>
        <p className="eyebrow">A little context</p>
        <h1 className={styles.pageTitle}>About.</h1>
      </div>
      <section className={styles.contentGrid} aria-label="Profile">
        <IdentityImage small />
        <div>
          <p className={styles.aboutText}>
            I’m Aryan Kumar Srivastava, a backend engineer based in Delhi.
            I’m studying computer science with a specialization in AI at KIET.
          </p>
          <dl className={styles.details}>
            <div>
              <dt>Education</dt>
              <dd>
                BTech · Computer Science &amp; Engineering
                <span>Specialization in AI</span>
                <span>KIET Deemed to be University · Ghaziabad</span>
                <span>2024 — 2028 · Expected graduation</span>
              </dd>
            </div>
            <div><dt>Based in</dt><dd>Delhi, India<span>Indian Standard Time</span></dd></div>
            <div><dt>Availability</dt><dd>{identity.availability}<span>IST</span></dd></div>
          </dl>
          <div className={styles.aboutLinks}>
            <a className={styles.textLink} href={publicUrl("/resume.pdf")}>Resume <Arrow diagonal /></a>
            <a className={styles.textLink} href="#contact">Contact <Arrow /></a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
