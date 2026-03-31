import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronDown } from 'react-icons/fi';
import './NewComponent.css';

const EXPERIENCE = [
  {
    id: 'dimo',
    role: 'Lead Full-Stack Developer & Platform Architect',
    company: 'JJendémico — Di-Mo',
    period: 'Ene 2026 – Actualidad',
    location: 'Málaga, Híbrido',
    type: 'Jornada completa',
    featured: true,
    summary:
      'Di-Mo es una plataforma SaaS para el sector de la arquitectura y la construcción. Diseñé y desarrollé toda la infraestructura cloud que da soporte a la app móvil en Unity: backend, panel web y sincronización en tiempo real.',
    what: [
      'Diseñé la arquitectura completa del backend API REST con Node.js + TypeScript desde cero.',
      'Estructuré la capa de datos en Firebase Firestore y Google Cloud Storage, optimizando para sincronización en tiempo real entre la app Unity y la nube.',
      'Desarrollé el panel de administración web completo con React, TypeScript, Vite y Material UI.',
      'Implementé el sistema de autenticación con Firebase Auth y Google Sign-In.',
      'Diseñé el motor de exportación de proyectos en PDF, DXF y bundles de archivos.',
      'Coordiné técnicamente con el equipo de Unity y gestioné integraciones con empresas externas.',
    ],
    stack: ['Node.js', 'TypeScript', 'React', 'Firebase', 'Firestore', 'GCS', 'Docker', 'Vite', 'Material UI'],
  },
  {
    id: 'ingenero',
    role: 'Programador Informático',
    company: 'Asociación In Género',
    period: 'Ene 2025 – Dic 2025',
    location: 'Melilla, Remoto',
    type: 'Autónomo · 1 año',
    featured: false,
    summary:
      'Gestión y mantenimiento de la infraestructura tecnológica de la organización. Desarrollo de soluciones digitales para apoyo a proyectos sociales y garantía de cumplimiento GDPR.',
    what: [
      'Administré la infraestructura de servidores, redes y sistemas de seguridad de la organización.',
      'Implementé herramientas tecnológicas que mejoraron la eficiencia operativa interna.',
      'Desarrollé soluciones digitales de apoyo a los proyectos sociales de la asociación.',
      'Aseguré la protección de datos y el cumplimiento de normativas GDPR.',
      'Capacité al personal en el uso de nuevas herramientas digitales.',
    ],
    stack: ['Linux', 'WordPress', 'Nginx', 'GDPR', 'Soporte técnico'],
  },
  {
    id: 'f5',
    role: 'Co-Formador — Bootcamp Full Stack',
    company: 'Factoría F5',
    period: 'Oct 2023 – Dic 2024',
    location: 'Madrid, Híbrido',
    type: 'Jornada completa · 1 año 3 meses',
    featured: false,
    summary:
      'Diseñé y entregué el programa de desarrollo web full stack para más de 100 estudiantes. Mentoring técnico, feedback personalizado y preparación para el mercado laboral.',
    what: [
      'Diseñé junto al equipo el programa educativo de desarrollo web full stack.',
      'Lideré sesiones de aprendizaje de frontend y backend: React, Node.js, Express, bases de datos.',
      'Mentoring personalizado a +100 estudiantes con distintos puntos de partida.',
      'Preparé a los alumnos para entrevistas técnicas y el mercado laboral real.',
      'Me mantuve al día con tendencias del sector para actualizar el contenido continuamente.',
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'SQL', 'Git', 'Metodologías Ágiles'],
  },
  {
    id: 'people',
    role: 'Desarrollador Web Full Stack',
    company: 'PEOPLE EXPERTS Psicólogos Empresariales',
    period: 'May 2023 – Oct 2023',
    location: 'Madrid, Híbrido',
    type: 'Jornada completa · 6 meses',
    featured: false,
    summary:
      'Primer trabajo en empresa. Desarrollé aplicaciones web completas con Vue.js en el frontend y Laravel en el backend, colaborando con diseñadores y analistas.',
    what: [
      'Desarrollé el frontend con Vue.js siguiendo arquitectura MVC.',
      'Construí el backend con Laravel / PHP con endpoints RESTful.',
      'Escribí tests unitarios e integración para garantizar calidad del software.',
      'Colaboré con diseñadores y analistas en la planificación y entrega de soluciones.',
    ],
    stack: ['Vue.js', 'Laravel', 'PHP', 'MySQL', 'REST APIs', 'Git'],
  },
  {
    id: 'clickgenius',
    role: 'Desarrollador Web',
    company: 'Click Genius',
    period: 'Oct 2022 – Jun 2023',
    location: 'Madrid, Remoto',
    type: 'Jornada completa · 9 meses',
    featured: false,
    summary:
      'Primer contacto con el mundo profesional. Desarrollé apps y sitios web personalizados para distintos clientes, gestionando proyectos de forma autónoma.',
    what: [
      'Desarrollé aplicaciones web, sitios y sistemas de bases de datos a medida.',
      'Colaboré con clientes para entender requisitos y ofrecer soluciones efectivas.',
      'Gestioné proyectos de forma autónoma cumpliendo plazos de entrega.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];

export default function NewComponent() {
  const [expanded, setExpanded] = useState('dimo');

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
          <span className="section-eyebrow">Trayectoria</span>
          <h2 className="section-title">
            Experiencia
            <br />
            <span className="gradient-text">profesional.</span>
          </h2>
          <p className="section-desc">
            3+ años construyendo plataformas, enseñando y resolviendo problemas
            reales con tecnología.
          </p>
        </motion.div>

        <div className="experience__list">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              className={`exp-card${exp.featured ? ' exp-card--featured' : ''}${expanded === exp.id ? ' exp-card--open' : ''}`}
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
                      <span className="exp-card__badge">Actual</span>
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
                      className={`exp-card__chevron${expanded === exp.id ? ' exp-card__chevron--up' : ''}`}
                      size={18}
                    />
                  </div>
                </div>

                <p className="exp-card__summary">{exp.summary}</p>

                <div className="exp-card__stack">
                  {exp.stack.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </button>

              {/* Expanded detail */}
              <AnimatePresence initial={false}>
                {expanded === exp.id && (
                  <motion.div
                    className="exp-card__detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <div className="exp-card__detail-inner">
                      <p className="exp-card__detail-title">Lo que hice:</p>
                      <ul className="exp-card__what">
                        {exp.what.map((point) => (
                          <li key={point} className="exp-card__what-item">
                            <span className="exp-card__what-dot" />
                            {point}
                          </li>
                        ))}
                      </ul>
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
