import React, { useContext } from "react";
import "./about.css";
import VictorMoreno from "../../resources/images/VíctorMoreno-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

function About() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="about" aria-labelledby="about-title" role="region">
      <Container fluid className="about-container">
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="colAbout order-2 order-md-1">
            <div className="about-content">
              <h1 id="about-title" className="title" tabIndex="0">
                <span className="highlight">
                  {translations[language].titulo}
                </span>
              </h1>
              <p className="description" tabIndex="0">
                {translations[language].descriptionAbout}
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                  aria-label="Visitar mi perfil de LinkedIn"
                >
                  <FaLinkedinIn size={30} />
                </a>
                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link github"
                  aria-label="Visitar mi perfil de GitHub"
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center order-1 order-md-2">
            <div className="image-container">
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.1}
                transitionSpeed={2000}
                className="tilt-container"
              >
                <OptimizedImage
                  src={VictorMoreno}
                  alt="Víctor Moreno - Desarrollador Web Full Stack"
                  className="profile-image"
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
