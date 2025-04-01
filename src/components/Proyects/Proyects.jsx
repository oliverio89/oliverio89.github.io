import React, { useContext } from "react";
import { projects } from "./data";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";
import "./proyects.css";

function Projects() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="projects">
      <h1>{translations[language].Aplicaciones}</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            className="project-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
          >
            <MDBCard className="project-card">
              <Tilt>
                <MDBCardImage
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <MDBCardOverlay className="project-overlay">
                  <MDBCardTitle as="h5">{project.title}</MDBCardTitle>
                  <MDBCardText>
                    <strong>Tecnologías aplicadas:</strong>
                    <br />
                    {project.subtitle}
                  </MDBCardText>
                  <MDBCardText className="project-description">
                    {project.description}
                  </MDBCardText>
                </MDBCardOverlay>
              </Tilt>
            </MDBCard>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
