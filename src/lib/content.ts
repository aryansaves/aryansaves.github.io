// Publication source: docs/CONTENT.md. Unconfirmed descriptions stay omitted.
export const identity = {
  name: "Aryan Kumar Srivastava",
  shortName: "Aryan",
  role: "Backend Engineer",
  location: "Delhi",
  timezone: "IST",
  email: "aryansrivastava354@gmail.com",
  availability: "After 5pm & on weekends",
  imageAlt: "Aryan’s monochrome illustrated profile image",
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
  selected: boolean;
};

export const projects: readonly Project[] = [
  { name: "servee", href: "https://github.com/aryansaves/servee", destination: "Source", selected: true },
  { name: "clockwork", href: "https://github.com/aryansaves/clockwork", destination: "Source", selected: true },
  { name: "Feedback", href: "https://github.com/aryansaves/Feedback", destination: "Source", selected: true },
  { name: "Eiga", href: "https://eiga.pages.dev", destination: "Live site", selected: false },
];
