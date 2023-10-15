import React, { useContext } from "react";
import {
  DiReact,
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import {
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiBitbucket,
  SiJirasoftware,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";

import { Row, Col } from "react-bootstrap";
import "./stack.css";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import "animate.css";

const Stack = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="stack" className="m-5">
      <h1 className="mb-5">{translations[language].Stack}</h1>

      <Row className="p-3" my={5}>
        <div className="mb-5 d-flex ">
          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiHtml5 size={50} />
            <p>HTML Js</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiJavascript1 size={50} />
            <p>JavaScript</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiBootstrap size={50} />
            <p>Bootstrap</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiNodejsSmall size={50} />
            <p>Node Js</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <FaVuejs size={50} />
            <p>VUE</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <SiBitbucket size={50} />
            <p>Bitbucket</p>
          </Col>
        </div>

        <div className="mb-5 d-flex ">
          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiCss3 size={50} />
            <p>CSS Js</p>
          </Col>

          <Col xs={2} className="iconosStacks animate__flipInY">
            <DiReact size={50} />
            <p>React Js</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <SiTailwindcss size={50} />
            <p>Tailwind css</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <SiPhp size={50} />
            <p>PHP</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <SiLaravel size={50} />
            <p>Laravel</p>
          </Col>
          <Col xs={2} className="iconosStacks animate__flipInY">
            <SiJirasoftware size={50} />
            <p>Jira</p>
          </Col>
        </div>
      </Row>
    </section>
  );
};

export default Stack;
