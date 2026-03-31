import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiChevronDown,
  FiExternalLink,
} from "react-icons/fi";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./NewComponent.css";

export default function NewComponent() {
  const [expanded, setExpanded] = useState("dimo");
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];

  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <motion.div
          className="experience__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{t.trayectoriaEyebrow}</span>
          <h2 className="section-title">
            {t.expTitle}
            <br />
            <span className="gradient-text">{t.expTitleGradient}</span>
          </h2>
          <p className="section-desc">{t.expDesc}</p>
        </motion.div>

        <div className="experience__list">
          {t.experienceData.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={`exp-card${exp.featured ? " exp-card--featured" : ""}${expanded === exp.id ? " exp-card--open" : ""}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {/* Timeline dot */}
              <div className="exp-card__dot" />

              {/* Header */}
              <button
                className="exp-card__header"
                onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                aria-expanded={expanded === exp.id}
              >
                <div className="exp-card__top">
                  <div className="exp-card__left">
                    {exp.featured && (
                      <span className="exp-card__badge">{t.currentLabel}</span>
                    )}
                    <h3 className="exp-card__role">{exp.role}</h3>
                    <p className="exp-card__company">
                      <FiBriefcase size={13} />
                      {exp.company}
                    </p>
                  </div>
                  <div className="exp-card__right">
                    <span className="exp-card__meta">
                      <FiCalendar size={12} />
                      {exp.period}
                    </span>
                    <span className="exp-card__meta">
                      <FiMapPin size={12} />
                      {exp.location}
                    </span>
                    <FiChevronDown
                      className={`exp-card__chevron${expanded === exp.id ? " exp-card__chevron--up" : ""}`}
                      size={18}
                    />
                  </div>
                </div>

                <p className="exp-card__summary">{exp.summary}</p>

                <div className="exp-card__stack">
                  {exp.stack.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                {exp.links && exp.links.length > 0 && (
                  <div className="exp-card__header-links">
                    {exp.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="exp-card__link-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink size={13} />
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </button>

              <AnimatePresence initial={false}>
                {expanded === exp.id && (
                  <motion.div
                    className="exp-card__detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="exp-card__detail-inner">
                      <p className="exp-card__detail-title">{t.loQueHice}</p>
                      <ul className="exp-card__what">
                        {exp.what.map((point) => (
                          <li key={point} className="exp-card__what-item">
                            <span className="exp-card__what-dot" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      {exp.links && exp.links.length > 0 && (
                        <div className="exp-card__links">
                          <p className="exp-card__detail-title">
                            {t.verEnProduccion}
                          </p>
                          <div className="exp-card__links-row">
                            {exp.links.map((link) => (
                              <a
                                key={link.url}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="exp-card__link-btn"
                              >
                                <FiExternalLink size={13} />
                                {link.label}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
