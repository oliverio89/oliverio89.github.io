import React, { useContext } from "react";
import "./about.css";
import VictorMoreno from "../../resources/images/VíctorMoreno-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";

function About() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="about">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} className="colAbout">
            <h1 className="title">
              <span>{translations[language].titulo}</span>
            </h1>
            <div>
              <p className="mb-4 leading-relaxed">
                {translations[language].descriptionAbout}
              </p>
              <div className="mt-4 d-flex justify-content-center justify-content-md-start">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="me-4"
                >
                  <FaLinkedinIn size={50} />
                </a>
                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DiGithubBadge size={50} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="text-center">
            <div
              className="about-image-wrapper"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Tilt>
                <img
                  src={VictorMoreno}
                  className="imgMyPhoto"
                  alt="Víctor Moreno"
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
