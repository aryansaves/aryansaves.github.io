import Image from "next/image";
import { ResumeSections } from "@/components/ResumeSections";
import { RoleRotator } from "@/components/RoleRotator";
import { identity, profiles } from "@/lib/content";
import { pageMetadata, publicUrl } from "@/lib/urls";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "Backend Engineer",
  "Aryan Kumar Srivastava — backend engineer in Delhi. Projects, education, contact, and resume.",
  "/",
);

export default function Home() {
  return (
    <main
      className={styles.stage}
      id="main"
      style={{
        "--cursor-default": `url('${publicUrl("/art/cursor-default-small.png")}') 5 4, auto`,
        "--cursor-pressed": `url('${publicUrl("/art/cursor-pressed-small.png")}') 5 4, auto`,
      } as React.CSSProperties}
    >
      <a className="skip-link" href="#resume-content">Skip to resume content</a>
      <article
        className={styles.sheet}
        aria-labelledby="page-title"
        style={{ "--paper-image": `url('${publicUrl("/art/paper.webp")}')` } as React.CSSProperties}
      >
        <div className={styles.paperTint} aria-hidden="true" />
        <Image className={`${styles.scrap} ${styles.scrapTaped}`} src={publicUrl("/art/scrap-taped.png")} alt="" width={612} height={408} aria-hidden="true" />
        <Image className={`${styles.scrap} ${styles.scrapRough}`} src={publicUrl("/art/scrap-rough.png")} alt="" width={612} height={408} aria-hidden="true" />

        <div className={styles.sheetContent}>
          <header className={styles.pageHeader}>
            <div className={styles.contactHeader}>
              <a className={styles.contactLink} href={`mailto:${identity.email}`} aria-label={`Email ${identity.email}`}>Contact ↗</a>
              <ul aria-label="Social profiles">
                {profiles.map((profile) => (
                  <li key={profile.label}><a href={profile.href}>{profile.label} ↗</a></li>
                ))}
              </ul>
            </div>
            <div className={styles.nameplate}>
              <div className={styles.nameBlock}>
                <h1 id="page-title" className={styles.name} aria-label="Aryan Kumar Srivastava">
                  <span className={styles.nameLine} data-hover="Aryan Kumar">Aryan Kumar</span>
                  <span className={styles.nameLine} data-hover="Srivastava">Srivastava</span>
                </h1>
                <p className={styles.role}><RoleRotator /></p>
              </div>
              <div
                className={styles.photo}
                style={{ "--photo-tape": `url('${publicUrl("/art/scrap-strips.png")}')` } as React.CSSProperties}
              >
                <Image src={publicUrl("/identity.jpg")} alt={identity.imageAlt} width={399} height={399} priority />
              </div>
            </div>
          </header>

          <p className={styles.intro}>
            Mostly backend, databases, distributed systems with a soft spot for designing good-looking web stuff
          </p>

          <div id="resume-content" className={styles.resumeContent} tabIndex={-1}>
            <ResumeSections />
          </div>
        </div>
      </article>
      <Image className={styles.playingCat} src={publicUrl("/art/cat-playing.svg")} alt="" width={1070} height={456} aria-hidden="true" unoptimized />
    </main>
  );
}
