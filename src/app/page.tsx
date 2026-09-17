import Image from "next/image";
import { ResumeSections } from "@/components/ResumeSections";
import { identity } from "@/lib/content";
import { pageMetadata, publicUrl } from "@/lib/urls";
import styles from "./page.module.css";

export const metadata = pageMetadata(
  "Backend Engineer",
  "Aryan Kumar Srivastava — backend engineer in Delhi. Projects, education, contact, and resume.",
  "/",
);

export default function Home() {
  return (
    <main className={styles.stage} id="main">
      <a className="skip-link" href="#resume-content">Skip to resume content</a>
      <article
        className={styles.sheet}
        aria-labelledby="page-title"
        style={{ "--paper-image": `url('${publicUrl("/art/paper.webp")}')` } as React.CSSProperties}
      >
        <div className={styles.paperTint} aria-hidden="true" />
        <Image className={`${styles.sticker} ${styles.planet}`} src={publicUrl("/art/planet.png")} alt="" width={344} height={279} aria-hidden="true" />
        <Image className={`${styles.sticker} ${styles.flower}`} src={publicUrl("/art/flower.png")} alt="" width={222} height={489} aria-hidden="true" />
        <Image className={`${styles.sticker} ${styles.checker}`} src={publicUrl("/art/checker.png")} alt="" width={266} height={261} aria-hidden="true" />

        <div className={styles.sheetContent}>
          <div className={styles.folio} aria-hidden="true">
            <span>ARYAN / PROFILE</span><span>DELHI · IST</span>
          </div>

          <header className={styles.nameplate}>
            <div className={styles.nameBlock}>
              <p className={styles.kicker}>A personal résumé</p>
              <h1 id="page-title" className={styles.name}>
                <span>Aryan Kumar</span>
                <span>Srivastava</span>
              </h1>
              <p className={styles.role}><span>{identity.role}</span></p>
            </div>
            <div className={styles.photo}>
              <Image src={publicUrl("/identity.jpg")} alt={identity.imageAlt} width={399} height={399} priority />
              <span aria-hidden="true">AKS</span>
            </div>
          </header>

          <p className={styles.intro}>
            A backend engineer based in Delhi, studying computer science with a specialization in AI at KIET.
          </p>

          <div id="resume-content" className={styles.resumeContent} tabIndex={-1}>
            <ResumeSections />
          </div>
        </div>
      </article>
    </main>
  );
}
