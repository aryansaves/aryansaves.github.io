import Image from "next/image";
import { FontSoundEffects } from "@/components/FontSoundEffects";
import { ResumeSections } from "@/components/ResumeSections";
import { DeskBackground } from "@/components/DeskBackground";
import { RoleRotator } from "@/components/RoleRotator";
import { identity, profiles } from "@/lib/content";
import { pageMetadata, publicUrl } from "@/lib/urls";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "Aryan",
  "Aryan Kumar Srivastava — backend engineer in Delhi. Projects, open-source work, education, and contact.",
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
      <FontSoundEffects
        titleSrc={publicUrl("/audio/font-title.mp3")}
        itemSrc={publicUrl("/audio/font-item.mp3")}
      />
      <a className="skip-link" href="#portfolio-content">Skip to portfolio content</a>
      <div className={styles.notebook}>
        <span className={`${styles.underPage} ${styles.underPageBack}`} aria-hidden="true" />
        <span className={`${styles.underPage} ${styles.underPageFront}`} aria-hidden="true" />
          <div className={styles.binding} aria-hidden="true">
            {Array.from({ length: 10 }, (_, index) => <span key={index} className={styles.bindingHole} />)}
          </div>
        <article
          className={styles.sheet}
          aria-labelledby="page-title"
          style={{ "--paper-image": `url('${publicUrl("/art/paper.webp")}')` } as React.CSSProperties}
        >
          <div className={styles.paperTint} aria-hidden="true" />

          <div className={styles.sheetContent}>
            <header>
              <div className={styles.contactHeader}>
                <a className={styles.contactLink} href={`mailto:${identity.email}`} target="_blank" rel="noopener noreferrer" aria-label={`Email ${identity.email}`}>Contact ↗</a>
                <ul aria-label="Social profiles">
                  {profiles.map((profile) => (
                    <li key={profile.label}><a href={profile.href} target="_blank" rel="noopener noreferrer">{profile.label} ↗</a></li>
                  ))}
                </ul>
              </div>
              <div className={styles.nameplate}>
                <div className={styles.nameBlock}>
                  <h1 id="page-title" className={styles.name} aria-label="Aryan Kumar Srivastava">
                    <span className={styles.nameLine} tabIndex={0} data-font-sound="title">Aryan Kumar</span>
                    <span className={styles.nameLine} tabIndex={0} data-font-sound="title">Srivastava</span>
                  </h1>
                  <p className={styles.role}><RoleRotator /></p>
                </div>
                <div className={styles.photo}>
                  <Image src={publicUrl("/identity.jpg")} alt={identity.imageAlt} width={399} height={399} priority />
                </div>
              </div>
            </header>

            <p className={styles.intro}>
              <span className={styles.introLead}>Mostly backend, databases, distributed systems</span>
              <span className={styles.introAside}>with a soft spot for designing good-looking web stuff</span>
            </p>

            <div id="portfolio-content" className={styles.resumeContent} tabIndex={-1}>
              <ResumeSections />
            </div>
          </div>
        </article>
        <Image className={styles.playingCat} src={publicUrl("/art/cat-playing.svg")} alt="" width={1070} height={456} aria-hidden="true" unoptimized />
      </div>
      <DeskBackground />
    </main>
  );
}
