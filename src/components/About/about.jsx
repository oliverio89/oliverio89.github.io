import React, { useContext } from "react";
import "./about.css";
import myPhoto from "../../resources/images/IMG_9956.JPG";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";

function About() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="about container d-flex mb-5">
      <Container className="d-flex aboutEnd align-items-center p-5 mb-5 ">
        <Row className=" d-flex justify-content-center ">
          <Col className="colAbout justify-content-center">
            <div>
              <h1 className="p-2">{translations[language].titulo}</h1>
              <p className="mb-8 leading-relaxed p-2">
                {translations[language].descriptionAbout}
              </p>
              <div className="flex justify-center p-2">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <FaLinkedinIn size={50} />
                </a>
                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <DiGithubBadge size={50} />
                </a>
              </div>
            </div>
          </Col>
          <Col className="justify-content-center box">
            <Tilt>
              <img src={myPhoto} className="imgMyPhoto" alt="myPhoto" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
