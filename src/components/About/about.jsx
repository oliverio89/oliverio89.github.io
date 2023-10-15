import React, { useContext } from "react";
import "./about.css";
import MyNewPhoto from "../../resources/images/NewImage.png";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { DiGithubBadge } from "react-icons/di";

function About() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="aboutme container d-flex mb-3">
      <h1 className="m-5 title">
        <span>{translations[language].titulo}</span>
      </h1>
      <Container className="d-flex aboutEnd align-items-center p-5 mb-5 ">
        <Row className="d-flex">
          <Col
            xs={{ order: 2, span: 12 }}
            lg={{ order: 1, span: 6 }}
            className="colAbout "
          >
            <div>
              <p className="mb-8 leading-relaxed p-2">
                {translations[language].descriptionAbout}
              </p>
              <div className=" mt-5">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4"
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
          <Col
            xs={{ order: 1, span: 12 }}
            lg={{ order: 2, span: 6 }}
            className="boxtilt mi-elemento"
          >
            <Tilt>
              <img src={MyNewPhoto} className="imgMyPhoto" alt="myPhoto" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
