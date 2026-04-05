import { useEffect, useState, useContext } from "react";
import { motion } from "framer-motion";
import { FiArrowDown, FiMail, FiChevronDown } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "./Hero.css";

function useTypewriter(words, speed = 90) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1800);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setText(words[index].substring(0, subIndex));
      },
      reverse ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed]);

  return text;
}

export default function Hero() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];
  const role = useTypewriter(t.heroRoles || []);

  return (
    <section id="hero" className="hero">
      {/* Background effects */}
      <div className="hero__grid" />

      {/* Blobs */}
      <div className="hero__blobs">
        <motion.div
          className="hero__blob hero__blob--1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="hero__blob hero__blob--2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="hero__scroll-text">{t.scrollear || "Scroll"}</span>
        <FiChevronDown className="hero__scroll-icon" />
      </motion.div>

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.span
            className="hero__eyebrow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="hero__status-dot" />
            {t.disponible}
          </motion.span>

          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Víctor
            <br />
            <span className="gradient-text">Moreno.</span>
          </motion.h1>

          <motion.div
            className="hero__role-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="hero__role">
              {role}
              <span className="hero__cursor" />
            </span>
          </motion.div>

          <motion.p
            className="hero__subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {t.heroSubtitle}
            <br />
            {t.heroSubtitle2}
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <a href="#experiencia" className="btn-primary">
              {t.verExperiencia}
              <FiArrowDown />
            </a>
            <a href="#contact" className="btn-ghost">
              {t.contactar}
              <FiMail />
            </a>
          </motion.div>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="https://github.com/oliverio89"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/victor-wdfs/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="mailto:oliverio89@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Stats card */}
        <motion.div
          className="hero__stats"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {[
            { value: "3+", labelKey: "anosExp" },
            { value: "5", labelKey: "empresas" },
            { value: "10+", labelKey: "stacksDominados" },
          ].map((stat) => (
            <div key={stat.labelKey} className="hero__stat">
              <span className="hero__stat-value gradient-text">
                {stat.value}
              </span>
              <span className="hero__stat-label">{t[stat.labelKey]}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
