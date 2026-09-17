import { education, identity, profiles, projects } from "@/lib/content";
import { publicUrl } from "@/lib/urls";
import styles from "./ResumeSections.module.css";

export function ResumeSections() {
  return (
    <>
      <div className={styles.body}>
        <section className={styles.projects} aria-labelledby="projects-heading">
          <div className={styles.sectionHead}>
            <h2 id="projects-heading">Projects</h2>
            <span aria-hidden="true">01 / 04</span>
          </div>
          <ol className={styles.projectList}>
            {projects.map((project, index) => (
              <li key={project.name}>
                <a href={project.href} className={styles.projectLink}>
                  <span className={styles.projectNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.projectName}>{project.name}</span>
                  <span className={styles.projectDestination}>
                    {project.destination} <span aria-hidden="true">↗</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.details}>
          <section className={styles.education} aria-labelledby="education-heading">
            <div className={styles.sectionHead}>
              <h2 id="education-heading">Education</h2>
            </div>
            <p className={styles.degree}>{education.degree}</p>
            <p className={styles.specialization}>{education.specialization}</p>
            <p className={styles.institution}>{education.institution}</p>
            <p className={styles.educationMeta}>
              {education.location} <span aria-hidden="true">·</span> {education.startYear}–{education.expectedGraduationYear} expected
            </p>
          </section>

          <section className={styles.practical} aria-labelledby="practical-heading">
            <div className={styles.sectionHead}>
              <h2 id="practical-heading">Details</h2>
            </div>
            <dl className={styles.factList}>
              <div>
                <dt>Based in</dt>
                <dd>{identity.location}, India</dd>
              </div>
              <div>
                <dt>Time zone</dt>
                <dd>{identity.timezone}</dd>
              </div>
              <div>
                <dt>Available</dt>
                <dd>{identity.availability}</dd>
              </div>
            </dl>
          </section>
        </div>
      </div>

      <section className={styles.contact} id="contact" aria-labelledby="contact-heading">
        <div className={styles.contactTitle}>
          <h2 id="contact-heading">Contact</h2>
          <a href={`mailto:${identity.email}`} className={styles.email}>
            {identity.email}<span aria-hidden="true"> ↗</span>
          </a>
        </div>
        <div className={styles.contactLinks}>
          <ul aria-label="Social profiles">
            {profiles.map((profile) => (
              <li key={profile.label}>
                <a href={profile.href}>{profile.label}<span aria-hidden="true"> ↗</span></a>
              </li>
            ))}
          </ul>
          <a href={publicUrl("/resume.pdf")} className={styles.resumeLink}>
            Resume PDF <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>
    </>
  );
}
