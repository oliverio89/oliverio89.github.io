import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiUser, FiLayers } from "react-icons/fi";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./proyects.css";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="projects__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.proyectosEyebrow}</span>
          <h2 className="section-title">{t.Aplicaciones}</h2>
          <p className="section-desc">{t.proyectosDesc}</p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {t.projectsData.map((project, i) => (
            <motion.article
              key={project.title}
              className={`project-card${i === 0 ? " project-card--featured" : ""}${project.hideImage ? " project-card--text-only" : ""}`}
              variants={item}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image */}
              {!project.hideImage && (
                <div className="project-card__img-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-card__img"
                    loading="lazy"
                  />
                  <div className="project-card__img-overlay" />
                  {i === 0 && (
                    <span className="project-card__featured-badge">
                      {t.featuredBadge}
                    </span>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="project-card__content">
                <span className="project-card__subtitle">
                  {project.subtitle}
                </span>

                <h3 className="project-card__title">
                  {project.hideProjectLink || project.hideAllLinks ? (
                    <span className="project-card__title-link">
                      {project.title}
                    </span>
                  ) : (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__title-link"
                    >
                      {project.title}
                      <FiExternalLink size={14} />
                    </a>
                  )}
                </h3>

                <p className="project-card__desc">{project.description}</p>

                {project.what && (
                  <div className="project-card__what">
                    <span className="project-card__what-label">
                      <FiLayers size={11} />
                      {t.queConstrue}
                    </span>
                    <p className="project-card__what-text">{project.what}</p>
                  </div>
                )}

                {project.role && (
                  <div className="project-card__role">
                    <FiUser size={11} />
                    {project.role}
                  </div>
                )}

                {!project.hideAllLinks && (
                  <div className="project-card__actions">
                    {!project.hideProjectLink && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__btn"
                      >
                        <FiExternalLink size={14} />
                        {t.verProyecto}
                      </a>
                    )}
                    <a
                      href="https://github.com/oliverio89"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__btn project-card__btn--ghost"
                    >
                      <FiGithub size={14} />
                      GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
