import { motion } from 'framer-motion';
import {
  DiReact, DiJavascript1, DiNodejsSmall,
  DiHtml5, DiCss3, DiMongodb,
} from 'react-icons/di';
import {
  SiTypescript, SiVite, SiFirebase, SiDocker,
  SiNginx, SiLaravel, SiMysql, SiVuedotjs,
} from 'react-icons/si';
import { FiZap } from 'react-icons/fi';
import { FaGitAlt } from 'react-icons/fa';
import { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import './stack.css';

const TECH = [
  { Icon: DiReact, name: 'React Js', color: '#61dafb', level: 95 },
  { Icon: DiJavascript1, name: 'JavaScript', color: '#f7df1e', level: 95 },
  { Icon: SiTypescript, name: 'TypeScript', color: '#3178c6', level: 85 },
  { Icon: DiNodejsSmall, name: 'Node Js', color: '#6dbf67', level: 90 },
  { Icon: SiVuedotjs, name: 'Vue.js', color: '#42b883', level: 80 },
  { Icon: SiLaravel, name: 'Laravel', color: '#ff2d20', level: 75 },
  { Icon: SiFirebase, name: 'Firebase', color: '#ffa611', level: 85 },
  { Icon: SiDocker, name: 'Docker', color: '#2496ed', level: 75 },
  { Icon: SiNginx, name: 'Nginx', color: '#009639', level: 70 },
  { Icon: DiMongodb, name: 'MongoDB', color: '#47a248', level: 80 },
  { Icon: SiMysql, name: 'MySQL', color: '#4479a1', level: 80 },
  { Icon: SiVite, name: 'Vite', color: '#646cff', level: 90 },
  { Icon: FaGitAlt, name: 'Git', color: '#f1502f', level: 90 },
  { Icon: DiHtml5, name: 'HTML5', color: '#e34f26', level: 95 },
  { Icon: DiCss3, name: 'CSS3', color: '#1572b6', level: 90 },
  { Icon: FiZap, name: 'n8n / Make', color: '#ea4b71', level: 75 },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function Stack() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="stack" className="section skills">
      <div className="container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">{translations[language].stackEyebrow}</span>
          <h2 className="section-title">
            {translations[language].Stack}
          </h2>
          <p className="section-desc">
            {translations[language].stackDesc}
          </p>
        </motion.div>

        <motion.div
          className="skills__grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {TECH.map(({ Icon, name, color, level }) => (
            <motion.div
              key={name}
              className="skill-card"
              variants={item}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              <div className="skill-card__icon" style={{ '--tech-color': color }}>
                <Icon size={36} style={{ color }} />
              </div>
              <span className="skill-card__name">{name}</span>
              <div className="skill-card__bar">
                <motion.div
                  className="skill-card__fill"
                  style={{ '--tech-color': color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
