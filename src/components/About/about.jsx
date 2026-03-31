import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMapPin, FiBriefcase } from 'react-icons/fi';
import './about.css';

const STACK_GROUPS = [
  {
    label: 'Frontend',
    color: 'accent',
    items: ['React', 'Vue', 'TypeScript', 'Vite', 'Material UI'],
  },
  {
    label: 'Backend',
    color: 'cyan',
    items: ['Node.js', 'Laravel / PHP', 'REST APIs', 'Firebase'],
  },
  {
    label: 'Cloud & Infra',
    color: 'green',
    items: ['Google Cloud', 'Docker', 'Nginx', 'Linux / LXD', 'Firestore'],
  },
  {
    label: 'Automatización',
    color: 'purple',
    items: ['n8n', 'Make', 'IA Workflows', 'MongoDB', 'MySQL'],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="aboutme" className="section about">
      <div className="container">
        <motion.div
          className="about__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Sobre mí</span>
          <h2 className="section-title">
            Construyo sistemas,
            <br />
            <span className="gradient-text">no solo código.</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          {/* Bio */}
          <motion.div
            className="about__bio"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="about__meta">
              <span className="about__meta-item">
                <FiMapPin size={14} />
                Motril, España
              </span>
              <span className="about__meta-item about__meta-item--active">
                <FiBriefcase size={14} />
                Lead Full-Stack @ Di-Mo
              </span>
            </div>

            <p className="about__text">
              Soy desarrollador Full-Stack especializado en arquitecturas cloud,
              plataformas SaaS y automatización con IA. Me mueve construir
              sistemas que resuelvan problemas reales — no solo implementar
              features, sino diseñar soluciones completas desde la base de datos
              hasta la interfaz.
            </p>
            <p className="about__text">
              Actualmente lidero el desarrollo de <strong>Di-Mo</strong>, una
              plataforma SaaS para el sector de la arquitectura que sincroniza
              datos en tiempo real entre una app móvil en Unity y la nube. Antes
              de eso, formé a más de 100 desarrolladores en Factoría F5 y trabajé
              en múltiples proyectos web con Vue, Laravel y React.
            </p>
            <p className="about__text">
              Lo que más me interesa ahora: la intersección entre desarrollo
              backend, infraestructura cloud y automatización con IA para crear
              flujos que eliminan trabajo manual.
            </p>

            <div className="about__links">
              <a
                href="https://www.linkedin.com/in/victor-wdfs/"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-btn"
              >
                <FaLinkedinIn size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/oliverio89"
                target="_blank"
                rel="noopener noreferrer"
                className="about__social-btn about__social-btn--ghost"
              >
                <FaGithub size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Stack grid */}
          <motion.div
            className="about__stack"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {STACK_GROUPS.map((group) => (
              <motion.div key={group.label} className="about__stack-group" variants={item}>
                <span className={`about__stack-label about__stack-label--${group.color}`}>
                  {group.label}
                </span>
                <div className="about__stack-chips">
                  {group.items.map((tech) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
