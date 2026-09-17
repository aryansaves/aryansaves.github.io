import Image from "next/image";
import Link from "next/link";
import { identity, profiles, type Project } from "@/lib/content";
import { publicUrl } from "@/lib/urls";
import styles from "./site.module.css";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export function Header({ active }: { active?: "home" | "work" | "about" }) {
  return (
    <header className={styles.header}>
      <Link className={styles.wordmark} href="/" aria-label="Aryan — home">aryan<span aria-hidden="true">.</span></Link>
      <nav aria-label="Main navigation" className={styles.nav}>
        <Link href="/" aria-current={active === "home" ? "page" : undefined}>Home</Link>
        <Link href="/work/" aria-current={active === "work" ? "page" : undefined}>Work</Link>
        <Link href="/about/" aria-current={active === "about" ? "page" : undefined}>About</Link>
        <a href={publicUrl("/resume.pdf")}>Resume <Arrow diagonal /></a>
      </nav>
    </header>
  );
}

export function IdentityImage({ small = false }: { small?: boolean }) {
  return <Image className={small ? styles.smallImage : styles.identityImage} src={publicUrl("/identity.jpg")} alt={identity.imageAlt} width={399} height={399} priority />;
}

export function ProjectList({ items }: { items: readonly Project[] }) {
  return (
    <ol className={styles.projects}>
      {items.map((project, index) => (
        <li key={project.name}>
          <a href={project.href} className={styles.projectLink}>
            <span className={styles.projectNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <span className={styles.projectName}>{project.name}</span>
            <span className={styles.projectDestination}>{project.destination} <Arrow diagonal /></span>
          </a>
        </li>
      ))}
    </ol>
  );
}

export function Contact() {
  return (
    <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
      <div className={styles.contactRail}>
        <h2 id="contact-heading" className="eyebrow">Contact</h2>
        <p className={styles.contactLocation}>{identity.location}, India<br />{identity.timezone}</p>
      </div>
      <div className={styles.contactBody}>
        <p className={styles.contactTitle}>Let’s talk.</p>
        <a className={styles.email} href={`mailto:${identity.email}`}>{identity.email} <Arrow diagonal /></a>
        <div className={styles.contactBottom}>
          <p>{identity.availability}<span className={styles.timezone}> · IST</span></p>
          <ul className={styles.socials} aria-label="Elsewhere">
            {profiles.map((profile) => <li key={profile.label}><a href={profile.href}>{profile.label} <Arrow diagonal /></a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return <footer className={styles.footer}><span>{identity.name}</span><a href="#top">Back to top ↑</a></footer>;
}

export function PageShell({ active, children }: { active?: "home" | "work" | "about"; children: React.ReactNode }) {
  return <div className={styles.shell} id="top"><a className="skip-link" href="#main">Skip to content</a><Header active={active} /><main id="main" tabIndex={-1}>{children}<Contact /></main><Footer /></div>;
}
