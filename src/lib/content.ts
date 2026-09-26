// Publication source: docs/CONTENT.md. Unconfirmed descriptions stay omitted.
export const identity = {
  name: "Aryan Kumar Srivastava",
  role: "Backend Engineer",
  location: "Delhi",
  timezone: "IST",
  email: "aryansrivastava354@gmail.com",
  availability: "After 5 pm and on weekends",
  imageAlt: "Aryan’s monochrome illustrated profile image",
} as const;

export const education = {
  institution: "KIET Deemed to be University",
  degree: "B.Tech",
  specialization: "CSE with specialization in AI",
  startYear: 2024,
  expectedGraduationYear: 2028,
  location: "Ghaziabad",
} as const;

export const profiles = [
  { label: "GitHub", href: "https://github.com/aryansaves" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aryankumarsrivastava/" },
  { label: "X", href: "https://x.com/kareedesuka" },
] as const;

export type Project = {
  name: string;
  href: string;
  destination: "Source" | "Live site";
};

export const projects: readonly Project[] = [
  { name: "Eiga", href: "https://eiga.pages.dev", destination: "Live site" },
  { name: "Feedback", href: "https://github.com/aryansaves/Feedback", destination: "Source" },
  { name: "clockwork", href: "https://github.com/aryansaves/clockwork", destination: "Source" },
];

export const experience = {
  organization: "Node.js",
  contribution: "PR #64024",
  href: "https://github.com/nodejs/node/pull/64024",
} as const;
