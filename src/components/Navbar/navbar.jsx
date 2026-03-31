import { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageContext } from '../../contexts/LanguageContext.js';
import espana from '../../resources/images/icons8-spain-48.png';
import inglaterra from '../../resources/images/icons8-united-kingdom-48.png';
import { FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

const NAV_LINKS = [
  { href: '#experiencia', labelKey: 'ExperienciaLaboral' },
  { href: '#aboutme', labelKey: 'AcercaDeMí' },
  { href: '#stack', labelKey: 'Stack' },
  { href: '#projects', labelKey: 'Proyectos' },
  { href: '#contact', labelKey: 'Contacto' },
];

function Navbarr() {
  const { language, translations, changeLanguage } = useContext(LanguageContext);
  const [lang, setIdioma] = useState('en');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = () => {
    setIdioma(lang === 'es' ? 'en' : 'es');
    changeLanguage(lang);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <nav className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-text">VM</span>
          <span className="navbar__logo-dot" />
        </a>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ href, labelKey }) => (
            <li key={href}>
              <a href={href} className="navbar__link">
                {translations[language][labelKey]}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="navbar__actions">
          <button onClick={handleLanguageChange} className="botonIdioma" aria-label="Cambiar idioma">
            <img
              className="iconLenguage"
              src={lang === 'es' ? espana : inglaterra}
              alt={lang === 'es' ? 'Español' : 'English'}
            />
          </button>
          <button
            className="navbar__burger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menú"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {NAV_LINKS.map(({ href, labelKey }) => (
              <a
                key={href}
                href={href}
                className="navbar__mobile-link"
                onClick={closeMenu}
              >
                {translations[language][labelKey]}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbarr;
