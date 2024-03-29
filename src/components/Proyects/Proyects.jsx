import React, { useContext } from "react";
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

function Projects() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <section id="projects" className=" container m-5">
      <div>
        <div className="">
          <h1 className="mb-5">{translations[language].Aplicaciones}</h1>
        </div>
        <Row my={2} className=" ">
          {projects.map((project) => (
            <Col xs={{ span: 12 }} md={{ span: 6 }} className="col-6 p-4">
              <a id="href" href={project.link} target="blank">
                <MDBCard
                  background="dark opacit"
                  className="text-white w-150 p-6"
                >
                  <Tilt>
                    <MDBCardImage overlay src={project.image} alt="..." />
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
}

export default Projects;
