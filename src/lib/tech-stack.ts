// Approved résumé technologies, with PostgreSQL and Express confirmed by the user on October 10, 2026.
export const techGroups = [
  { title: "Frontend", items: ["React", "Next.js", "D3.js"] },
  { title: "Backend", items: ["Node.js", "Bun", "Fastify", "Express"] },
  { title: "Databases", items: ["MongoDB", "Mongoose", "Redis", "PostgreSQL"] },
  { title: "Languages", items: ["Go", "TypeScript", "JavaScript", "SQL"] },
  { title: "Tools & cloud", items: ["Docker", "Git", "Linux", "AWS", "Cloudflare Pages"] },
] as const;

export type Technology = (typeof techGroups)[number]["items"][number];
