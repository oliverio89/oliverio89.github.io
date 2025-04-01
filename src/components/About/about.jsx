import React, { useContext } from "react";
import "./about.css";
import VictorMoreno from "../../resources/images/VíctorMoreno-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

function About() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="about" aria-labelledby="about-title" role="region">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="colAbout">
            <h1 id="about-title" className="title" tabIndex="0">
              <span>{translations[language].titulo}</span>
            </h1>
            <div>
              <p className="mb-4 leading-relaxed" tabIndex="0">
                {translations[language].descriptionAbout}
              </p>
              <nav
                className="mt-4 d-flex justify-content-center justify-content-md-start"
                aria-label="Redes sociales"
              >
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4 social-link"
                  aria-label="Visitar mi perfil de LinkedIn"
                  role="link"
                >
                  <FaLinkedinIn size={50} aria-hidden="true" title="LinkedIn" />
                  <span className="visually-hidden">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Visitar mi perfil de GitHub"
                  role="link"
                >
                  <DiGithubBadge size={50} aria-hidden="true" title="GitHub" />
                  <span className="visually-hidden">GitHub</span>
                </a>
              </nav>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <div
              className="about-image-wrapper"
              data-aos="fade-left"
              data-aos-duration="1500"
              role="img"
              aria-label="Fotografía de perfil con efecto de inclinación interactivo"
            >
              <Tilt
                aria-hidden="true"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                scale={1.05}
                transitionSpeed={2000}
              >
                <OptimizedImage
                  src={VictorMoreno}
                  alt="Víctor Moreno - Desarrollador Web Full Stack"
                  className="imgMyPhoto"
                  width={400}
                  height={400}
                  priority={true}
                />
              </Tilt>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
