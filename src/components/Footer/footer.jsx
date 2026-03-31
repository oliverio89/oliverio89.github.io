import { useContext } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiHeart } from 'react-icons/fi';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import './footer.css';

export default function Footer() {
  const { language, translations } = useContext(LanguageContext);
  const t = translations[language];
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__logo">VM<span className="footer__dot">.</span></span>
          <p className="footer__tagline">{t.footerTagline}</p>
        </div>

        {/* Links */}
        <div className="footer__nav">
          <a href="#hero" className="footer__link">{t.inicio}</a>
          <a href="#experiencia" className="footer__link">{t.ExperienciaLaboral}</a>
          <a href="#aboutme" className="footer__link">{t.AcercaDeMí}</a>
          <a href="#stack" className="footer__link">{t.Stack}</a>
          <a href="#projects" className="footer__link">{t.Proyectos}</a>
          <a href="#contact" className="footer__link">{t.Contacto}</a>
        </div>

        {/* Socials */}
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/victor-wdfs/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://github.com/oliverio89"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="mailto:oliverio89@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social"
            aria-label="Email"
          >
            <FiMail size={18} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {year} Víctor Moreno García · {t.hechoConAmor}{' '}
          <FiHeart size={12} className="footer__heart" />
        </p>
      </div>
    </footer>
  );
}
