import React, { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./Hero.css";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import VictorMoreno from "../../resources/images/VíctorMoreno-removebg-preview.png";

const Hero = () => {
  const { language, translations } = useContext(LanguageContext);
  const typingRef = useRef(null);

  useEffect(() => {
    const roles = [
      "Full Stack Developer",
      "Frontend Developer",
      "React Developer",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (typingRef.current) {
        if (!isDeleting) {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex + 1
          );
          typingRef.current.setAttribute(
            "aria-label",
            `Rol actual: ${currentRole}`
          );
          charIndex++;

          if (charIndex === currentRole.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pausa antes de borrar
          }
        } else {
          typingRef.current.textContent = currentRole.substring(
            0,
            charIndex - 1
          );
          charIndex--;

          if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 100;
          }
        }
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section
      className="hero-container"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1 id="hero-title" className="hero-title">
            <span
              className="greeting"
              aria-label={translations[language].greeting}
            >
              {translations[language].greeting}
            </span>
            <span className="name">Víctor Moreno</span>
          </h1>
          <div
            className="role-container"
            role="text"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              ref={typingRef}
              className="role"
              aria-label="Rol profesional"
            ></span>
            <span className="cursor" aria-hidden="true">
              |
            </span>
          </div>
          <p className="hero-description" role="text">
            {translations[language].heroDescription}
          </p>
          <div
            className="hero-cta"
            role="navigation"
            aria-label="Enlaces principales"
          >
            <a
              href="#projects"
              className="primary-button"
              role="button"
              aria-label={translations[language].viewProjects}
            >
              {translations[language].viewProjects}
            </a>
            <a
              href="#contact"
              className="secondary-button"
              role="button"
              aria-label={translations[language].contactMe}
            >
              {translations[language].contactMe}
            </a>
          </div>
        </div>
        <div className="hero-image" role="img" aria-label="Imagen de perfil">
          <OptimizedImage
            src={VictorMoreno}
            alt="Víctor Moreno - Desarrollador Full Stack"
            width={500}
            height={500}
            priority={true}
            className="profile-image"
          />
        </div>
      </div>
      <div
        className="scroll-indicator"
        role="complementary"
        aria-label="Indicador de desplazamiento"
        aria-hidden="true"
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
