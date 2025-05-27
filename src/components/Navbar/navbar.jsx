import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../resources/images/OliDeVT-removebg-preview.png";
import React, {
  useContext,
  useCallback,
  memo,
  useState,
  useEffect,
} from "react";
import espana from "../../resources/images/icons8-spain-48.png";
import inglaterra from "../../resources/images/icons8-united-kingdom-48.png";
import { LanguageContext } from "../../contexts/LanguageContext.js";

const Navbarr = memo(() => {
  const { language, translations, changeLanguage } =
    useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLanguageChange = useCallback(() => {
    const newLanguage = language === "es" ? "en" : "es";
    changeLanguage(newLanguage);
  }, [language, changeLanguage]);

  return (
    <Navbar
      collapseOnSelect
      bg="transparent"
      expand="lg"
      fixed="top"
      className={`modern-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <div className="navbar-content">
        <Navbar.Brand href="#" className="brand-container">
          <img
            src={logo}
            className="imgLogo"
            alt="OliDev Logo"
            loading="lazy"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggler"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-nav-center">
            <Nav.Link href="#projects" className="nav-link-modern">
              <span className="nav-text">
                {translations[language].Proyectos}
              </span>
            </Nav.Link>
            <Nav.Link href="#aboutme" className="nav-link-modern">
              <span className="nav-text">
                {translations[language].AcercaDeMí}
              </span>
            </Nav.Link>
            <Nav.Link href="#stack" className="nav-link-modern">
              <span className="nav-text">{translations[language].Stack}</span>
            </Nav.Link>
          </Nav>

          <Nav className="navbar-nav-right">
            <div className="language-switcher">
              <button
                onClick={handleLanguageChange}
                className={`language-btn ${language}`}
                aria-label={`Switch to ${
                  language === "es" ? "English" : "Spanish"
                }`}
              >
                <div className="language-btn-content">
                  <img
                    className="flag-icon"
                    src={language === "es" ? espana : inglaterra}
                    alt={language === "es" ? "Español" : "English"}
                    loading="lazy"
                  />
                  <span className="language-text">
                    {language === "es" ? "ES" : "EN"}
                  </span>
                </div>
                <div className="language-indicator"></div>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
});

Navbarr.displayName = "Navbarr";

export default Navbarr;
