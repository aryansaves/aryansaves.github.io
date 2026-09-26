# CONTENT.md

## Authority and Publication Rules

This file is the source of truth for factual site content. Filled-in user details take precedence over earlier suggested copy. Blank fields and editorial TODOs must never appear as placeholder content on the published site.

Do not invent or embellish roles, dates, project functionality, technologies, outcomes, metrics, awards, contributions, client work, or testimonials. Verify project claims before adding descriptions. Missing content should be omitted while leaving the implementation easy to extend.

## Confirmed Identity

- Full name: Aryan Kumar Srivastava
- Preferred short name: Aryan
- Primary role: Backend Engineer
- Location: Delhi
- Time zone: IST
- Availability: after 5pm and on weekends

Initial masthead: full name plus “Backend Engineer.” The confirmed introduction is “Mostly backend, databases, distributed systems with a soft spot for designing good-looking web stuff”.

User-supplied draft positioning, retained for reference: “turn your pitches into reality.” The current brief omits this line in favor of concise factual copy; the richer visual style does not require promotional claims. Do not silently replace it with another promotional claim.

## Identity Image

- Source asset: `../Pfp.jpg` relative to this document (repository-root `Pfp.jpg`).
- Use the supplied square image as-is, at a modest size; no crop, recoloring, or portrait treatment.
- Suggested descriptive alt text: “Aryan’s monochrome illustrated profile image.”
- Original draft alt text: “didn't load ?” — retained as an editorial note, not accessible final text.
- Used on the GitHub, X, and LinkedIn profiles listed below.

During implementation, copy the asset into the site's public assets and use its deployment-aware URL. Do not expose a local filesystem path in the website.

## Contact

- Email: aryansrivastava354@gmail.com
- GitHub: https://github.com/aryansaves
- LinkedIn: https://www.linkedin.com/in/aryankumarsrivastava/
- X: https://x.com/kareedesuka
- Contact label: Contact; use a direct email link in the sheet header.
- Custom domain: not provided. Start with the GitHub Pages address.
- Resume: intentionally omitted from the initial launch. Add a PDF and link only after the user provides and approves the final document.

## Education

- Institution: KIET Deemed to be university
- Degree: Btech
- Specialization: CSE with specialization in AI
- Start year: 2024
- Expected graduation: 2028
- Location: Ghaziabad

No coursework or academic highlights have been supplied. Do not infer them from independent study notes.

## Open Source Work and Personal Bio

No employment entries, final short bio, or personal goal have been supplied. The Open Source Work section may include the confirmed Node.js contribution link without inventing a role, date, description, or status. Omit generic personality filler. The single resume sheet can use a brief introduction derived from confirmed identity and education details.

## Single-Sheet Content Hierarchy

The portfolio is one centered, compact static resume sheet. There is no Home/Work/About/Resume navigation bar and no separate Work or About content page.

- Nameplate: full name, Backend Engineer, and the supplied identity image.
- Introduction: the user-provided backend, databases, distributed systems, and web-design phrase above.
- Projects: Eiga, Feedback, and clockwork in that order, grouped compactly on the main sheet.
- Open Source Work: the confirmed Node.js contribution link, without unverified descriptive claims.
- Education and practical details: confirmed degree, institution, dates, location, time zone, and availability.
- Header: email and maintained social links.

Until descriptions are verified, project entries may display supplied names and destination links only. Do not display missing-description notices, guessed stacks, years, outcomes, empty experience entries, or editorial TODOs. Keep long project narratives out of this compact version rather than creating additional pages.

## Earlier Focus Notes — Confirm Before Publishing

These notes came from the earlier draft. The filled-in personal section did not confirm a current focus; retain them for review rather than treating them as final homepage copy:
- SQL and database internals
- distributed systems
- MIT 6.824 / distributed systems labs
- RPCs
- MapReduce
- HTTP and request lifecycle
- open-source contribution
- backend and systems engineering

This section should be concise and should not read like a learning checklist.

---

## Projects

### servee

Repository:
https://github.com/aryansaves/servee.git

Presentation notes:
- Treat as a real engineering project, not a decorative portfolio card.
- Keep description factual and concise.
- Add exact technical summary once finalized.

Status:
Needs final project description.

---

### clockwork

Repository:
https://github.com/aryansaves/clockwork.git

Presentation notes:
- Minimal / monochrome visual identity.
- Existing project has been used as a visual reference in previous portfolio thinking.
- Do not invent functionality beyond what is verified from the repository.

Status:
Needs final project description.

---

### Feedback

Repository:
https://github.com/aryansaves/Feedback.git

Presentation notes:
- Benchmark/tool-oriented project.
- Do not embellish functionality without verifying the repository.

Status:
Needs final project description.

---

### Eiga

Live:
https://eiga.pages.dev

Presentation notes:
- Add repository link if applicable.
- Keep exact functionality and stack factual.

Status:
Needs final project description.

---

### Kiroku

Working concept:
Universal media journal.

Known product direction:
- log anime, movies, books, manga, games, music, and podcasts
- journaling
- clubs / discussion threads
- Telegram integration

Known technical direction:
- Next.js
- TypeScript
- Express
- MongoDB
- Redis
- Meilisearch
- BullMQ
- Cloudflare R2
- external media APIs

Status:
Include only if this project is public / portfolio-ready.

---

## Open Source

### Node.js contribution

Pull request:
https://github.com/nodejs/node/pull/64024

Presentation:
- Link directly to the pull request.
- Describe the actual contribution only after verifying the PR.
- Avoid framing a single contribution as broad project ownership.

---

## Candidate Technical Areas — Not a Confirmed Skills List

Prefer grouped technical areas over a badge cloud.

Earlier suggestions, retained for verification only. Do not publish these as skills until confirmed:

Languages:
- TypeScript
- JavaScript
- Python
- C++
- add others only if genuinely used

Backend / Systems:
- Node.js
- Express
- HTTP
- SQL
- databases
- distributed systems
- RPC
- Linux

Frontend:
- Next.js
- React
- Tailwind CSS

Infrastructure / Data:
- Docker
- Redis
- MongoDB
- Meilisearch
- Cloudflare R2
- add only verified tools

Avoid presenting familiarity as expertise.

---

## Writing Style

Use concise, factual, self-assured, understated copy. Prefer concrete nouns and verbs. Avoid promotional slogans, exaggerated expertise, startup marketing language, vague personality claims, and excessive first-person narration.

Keep the single sheet compact. Use concise project summaries when verified; do not add dedicated content pages or long narratives in this version. Present technical areas as short groups rather than badges, and distinguish study from demonstrated expertise.

## Editorial TODOs Before Publication

- Confirm an optional short bio and current-focus sentence; otherwise omit them.
- Verify descriptions, role, technical context, and any status/year for servee, clockwork, Feedback, and Eiga.
- Keep the confirmed project order: Eiga, Feedback, clockwork. Servee remains historical reference only.
- Confirm whether Kiroku is public and portfolio-ready; omit until confirmed.
- Verify the Node.js PR's actual contribution and status before describing it.
- Confirm any technical skills to publish; the candidate list above is not an expertise claim.
- Expand experience only when real entries are supplied.

Repository ownership/name and the final deployment address are setup tasks in [IMPLEMENTATION.md](IMPLEMENTATION.md), not personal copy.
