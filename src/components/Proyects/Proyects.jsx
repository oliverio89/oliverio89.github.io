import React, { useContext, memo } from "react";
import { projects } from "./data";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { Row, Col } from "react-bootstrap";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./proyects.css";

const Projects = memo(() => {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="projects" className="container m-5">
      <div>
        <div>
          <h1 className="mb-5">{translations[language].Aplicaciones}</h1>
        </div>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col
              key={project.id || index}
              xs={{ span: 12 }}
              md={{ span: 6 }}
              className="p-4"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View project: ${project.title}`}
              >
                <MDBCard background="dark" className="text-white h-100">
                  <Tilt>
                    <MDBCardImage
                      overlay
                      src={project.image}
                      alt={`Screenshot of ${project.title} project`}
                      loading="lazy"
                    />
                    <MDBCardOverlay
                      className="p-4 mask"
                      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                    >
                      <MDBCardTitle>{project.title}</MDBCardTitle>
                      <MDBCardText>{project.subtitle}</MDBCardText>
                      <MDBCardText className="texto-ocultar">
                        {project.description}
                      </MDBCardText>
                    </MDBCardOverlay>
                  </Tilt>
                </MDBCard>
              </a>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
