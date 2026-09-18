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
    <main
      className={styles.stage}
      id="main"
      style={{
        "--cursor-default": `url('${publicUrl("/art/cursor-default.png")}') 8 6, auto`,
        "--cursor-pressed": `url('${publicUrl("/art/cursor-pressed.png")}') 8 6, auto`,
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
        <Image className={`${styles.scrap} ${styles.scrapStrips}`} src={publicUrl("/art/scrap-strips.png")} alt="" width={588} height={424} aria-hidden="true" />

        <div className={styles.sheetContent}>
          <header className={styles.nameplate}>
            <div className={styles.nameBlock}>
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
      <Image className={styles.playingCat} src={publicUrl("/art/cat-playing.svg")} alt="" width={1070} height={456} aria-hidden="true" unoptimized />
    </main>
  );
}
