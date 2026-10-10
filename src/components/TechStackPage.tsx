import Image from "next/image";
import type { CSSProperties } from "react";
import { techGroups, type Technology } from "@/lib/tech-stack";
import { publicUrl } from "@/lib/urls";
import styles from "./TechStackPage.module.css";

const logoFiles: Record<Exclude<Technology, "SQL">, string> = {
  Go: "go", TypeScript: "typescript", JavaScript: "javascript",
  "Node.js": "nodejs", Bun: "bun", Fastify: "fastify", Express: "express",
  MongoDB: "mongodb", Mongoose: "mongoose", Redis: "redis", PostgreSQL: "postgresql",
  React: "react", "Next.js": "nextjs", "D3.js": "d3js",
  Docker: "docker", Git: "git", Linux: "linux", AWS: "amazonwebservices",
  "Cloudflare Pages": "cloudflare",
};

function TechLogo({ name }: { name: Technology }) {
  if (name === "SQL") {
    return (
      <svg viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <path d="M7 9v22c0 7 26 7 26 0V9" fill="#327b9b" />
        <path d="M7 19c0 7 26 7 26 0M7 27c0 7 26 7 26 0" fill="none" stroke="#bce1e9" strokeWidth="2" />
        <ellipse cx="20" cy="9" rx="13" ry="5" fill="#5facbf" stroke="#245e63" strokeWidth="1.5" />
      </svg>
    );
  }
  const extension = name === "Linux" ? "webp" : "svg";
  return <Image src={publicUrl(`/art/tech/${logoFiles[name]}.${extension}`)} alt="" aria-hidden="true" width={44} height={44} unoptimized />;
}

export function TechStackPage() {
  return (
    <section className={styles.frame} aria-labelledby="tech-stack-heading">
      <div className={styles.layout}>
        <header className={styles.header}>
          <h2 id="tech-stack-heading">Tech stack</h2>
        </header>
        <div className={styles.groups}>
          {techGroups.map((group, index) => (
            <section className={styles.group} key={group.title} aria-labelledby={`tech-group-${index}`}>
              <h3 id={`tech-group-${index}`}>{group.title}</h3>
              <ul style={{ "--tech-columns": group.items.length } as CSSProperties}>
                {group.items.map(name => (
                  <li key={name}>
                    <span className={styles.mark}><TechLogo name={name} /></span>
                    <span className={styles.name}>{name}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
