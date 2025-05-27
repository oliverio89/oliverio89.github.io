import "./navbar.css";
import { Nav, Navbar } from "react-bootstrap";
import logo from "../../resources/images/OliDeVT-removebg-preview.png";
import React, { useContext, useCallback, memo } from "react";
import espana from "../../resources/images/icons8-spain-48.png";
import inglaterra from "../../resources/images/icons8-united-kingdom-48.png";
import { LanguageContext } from "../../contexts/LanguageContext.js";

const Navbarr = memo(() => {
  const { language, translations, changeLanguage } =
    useContext(LanguageContext);

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
      className=" navbar-white m-3 "
    >
      <Navbar.Brand href="#">
        <img src={logo} className="imgLogo" alt="imgLogo" loading="lazy" />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="my-navbar-toggler"
      />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Nav.Link href="#projects" className="text-white p-5">
            {translations[language].Proyectos}
          </Nav.Link>
          <Nav.Link href="#aboutme" className="text-white p-5">
            {translations[language].AcercaDeMí}
          </Nav.Link>
          <Nav.Link href="#stack" className="text-white p-5">
            {translations[language].Stack}
          </Nav.Link>
        </Nav>
        <Nav className="m-auto">
          <button
            onClick={handleLanguageChange}
            className="botonIdioma"
            aria-label={`Switch to ${
              language === "es" ? "English" : "Spanish"
            }`}
          >
            <img
              className="iconLenguage"
              src={language === "es" ? espana : inglaterra}
              alt={language === "es" ? "Español" : "English"}
              loading="lazy"
            />
          </button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

Navbarr.displayName = "Navbarr";

export default Navbarr;
