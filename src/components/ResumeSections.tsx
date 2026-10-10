import { education, experience, identity, projects } from "@/lib/content";
import styles from "./ResumeSections.module.css";

export function ResumeSections() {
  return (
    <div className={styles.body}>
      <div className={styles.primaryColumn}>
        <section aria-labelledby="projects-heading" data-entry="projects">
          <div className={styles.sectionHead}>
            <h2 id="projects-heading">Projects</h2>
          </div>
          <ol className={styles.projectList}>
            {projects.map((project, index) => (
              <li key={project.name}>
                <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.projectLink} data-font-sound="item">
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

        <section aria-labelledby="open-source-heading" data-entry="open-source">
          <div className={styles.sectionHead}>
            <h2 id="open-source-heading">Open Source Work</h2>
          </div>
          <ol className={styles.projectList}>
            <li>
              <a className={styles.projectLink} href={experience.href} target="_blank" rel="noopener noreferrer" data-font-sound="item">
                <span className={styles.projectNumber} aria-hidden="true">01</span>
                <span className={styles.projectName}>{experience.organization}</span>
                <span className={styles.projectDestination}>
                  {experience.contribution} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          </ol>
        </section>
      </div>

      <div className={styles.details}>
        <section className={styles.education} aria-labelledby="education-heading" data-entry="education">
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

        <section aria-labelledby="practical-heading" data-entry="details">
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
  );
}
