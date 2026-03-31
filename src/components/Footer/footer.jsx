import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail, FiHeart } from 'react-icons/fi';
import './footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        {/* Brand */}
        <div className="footer__brand">
          <span className="footer__logo">VM<span className="footer__dot">.</span></span>
          <p className="footer__tagline">
            Full-Stack Developer · Platform Architect · Automatización IA
          </p>
        </div>

        {/* Links */}
        <div className="footer__nav">
          <a href="#hero" className="footer__link">Inicio</a>
          <a href="#experiencia" className="footer__link">Experiencia</a>
          <a href="#aboutme" className="footer__link">About</a>
          <a href="#stack" className="footer__link">Stack</a>
          <a href="#projects" className="footer__link">Proyectos</a>
          <a href="#contact" className="footer__link">Contacto</a>
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
          © {year} Víctor Moreno García · Hecho con{' '}
          <FiHeart size={12} className="footer__heart" />
        </p>
      </div>
    </footer>
  );
}
