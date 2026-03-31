import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiUser, FiLayers } from 'react-icons/fi';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import { projects } from './data';
import './proyects.css';

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
          <span className="section-eyebrow">Proyectos</span>
          <h2 className="section-title">
            {translations[language].Aplicaciones}
          </h2>
          <p className="section-desc">
            Cada proyecto cuenta el problema que resolvía, mi rol y las decisiones técnicas que tomé.
          </p>
        </motion.div>

        <motion.div
          className="projects__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              className={`project-card${i === 0 ? ' project-card--featured' : ''}`}
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
                    <span className="project-card__featured-badge">Featured</span>
                  )}
                </div>
              )}

              {/* Content */}
              <div className="project-card__content">
                <span className="project-card__subtitle">{project.subtitle}</span>

                <h3 className="project-card__title">
                  {project.hideProjectLink ? (
                    <span className="project-card__title-link">{project.title}</span>
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
                      Qué construí
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
                        Ver proyecto
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
