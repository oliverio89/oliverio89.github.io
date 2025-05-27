import React, { useContext, memo } from "react";
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

const stackItems = [
  { Icon: DiHtml5, name: "HTML", ariaLabel: "HTML technology" },
  {
    Icon: DiJavascript1,
    name: "JavaScript",
    ariaLabel: "JavaScript technology",
  },
  { Icon: DiBootstrap, name: "Bootstrap", ariaLabel: "Bootstrap framework" },
  { Icon: DiNodejsSmall, name: "Node.js", ariaLabel: "Node.js runtime" },
  { Icon: FaVuejs, name: "Vue", ariaLabel: "Vue.js framework" },
  {
    Icon: SiBitbucket,
    name: "Bitbucket",
    ariaLabel: "Bitbucket version control",
  },
  { Icon: DiCss3, name: "CSS", ariaLabel: "CSS technology" },
  { Icon: DiReact, name: "React", ariaLabel: "React library" },
  {
    Icon: SiTailwindcss,
    name: "Tailwind CSS",
    ariaLabel: "Tailwind CSS framework",
  },
  { Icon: SiPhp, name: "PHP", ariaLabel: "PHP programming language" },
  { Icon: SiLaravel, name: "Laravel", ariaLabel: "Laravel framework" },
  { Icon: SiJirasoftware, name: "Jira", ariaLabel: "Jira project management" },
];

const Stack = memo(() => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="stack" className="m-5">
      <h1 className="mb-5">{translations[language].Stack}</h1>
      <Row className="p-3 g-4">
        {stackItems.map((item, index) => (
          <Col
            key={item.name}
            xs={6}
            sm={4}
            md={3}
            lg={2}
            className="iconosStacks animate__flipInY"
          >
            <item.Icon size={50} aria-label={item.ariaLabel} role="img" />
            <p>{item.name}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
});

Stack.displayName = "Stack";

export default Stack;
