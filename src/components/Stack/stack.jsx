import React, { useContext } from "react";
import {
  DiReact,
  DiJavascript1,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
} from "react-icons/di";
import { SiTailwindcss, SiPhp } from "react-icons/si";
import { Row, Col } from "react-bootstrap";
import "./stack.css";
import { LanguageContext } from "../../contexts/LanguageContext.js";

const Stack = () => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="stack" className="m-5">
      <h1 className="mb-5">{translations[language].Stack}</h1>

      <Row className="p-5" my={5}>
        <div className="mb-5 d-flex">
          <Col xs={3} className="iconosStacks">
            <DiReact size={50} />
            <p>React Js</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <DiJavascript1 size={50} />
            <p>JavaScript</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <DiNodejsSmall size={50} />
            <p>Node Js</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <DiHtml5 size={50} />
            <p>HTML Js</p>
          </Col>
        </div>
        <div className="mb-5 d-flex ">
          <Col xs={3} className="iconosStacks">
            <DiCss3 size={50} />
            <p>CSS Js</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <DiBootstrap size={50} />
            <p>Bootstrap</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <SiTailwindcss size={50} />
            <p>Tailwind css</p>
          </Col>
          <Col xs={3} className="iconosStacks">
            <SiPhp size={50} />
            <p>PHP</p>
          </Col>
        </div>
      </Row>
    </section>
  );
};

export default Stack;
