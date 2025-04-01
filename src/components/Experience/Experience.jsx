import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div class="container">
      <div class="main-timeline">
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">Actualmente</span>
                <span class="year">2025</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Informático: "In Genero"</h5>
            <p class="description">
              Desarrollo y mantenimiento de aplicaciones web, implementación de
              soluciones tecnológicas y gestión de proyectos digitales.
              Colaboración en la transformación digital de la organización y
              mejora de procesos internos.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">18 meses</span>
                <span class="year">2024</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Full Stack Developer: "Freelance"</h5>
            <p class="description">
              Desarrollo de proyectos web como profesional independiente,
              implementando soluciones completas desde el frontend hasta el
              backend. Especialización en React, Node.js y tecnologías modernas
              de desarrollo web.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">6 meses</span>
                <span class="year">2023</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Programador Web: "People Experts"</h5>
            <p class="description">
              Fue la primera empresa que confió en mí y me vio crecer en este
              mundo, donde pude desarrollar mis primeros proyectos y aprender de
              grandes profesionales. Desarrollé proyectos en Laravel y Vue, con
              la finalidad de llevar a la empresa a lo más alto.
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">3 meses</span>
                <span class="year">2022</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Bootcamp: "Iron Hack"</h5>
            <p class="description">
              Empecé mi camino en la programación de la mano de la prestigiosa
              escuela Ironhack Madrid, donde descrubrí este gran mundo y donde
              pude especializarme en el desarrollo web. React y Node.js fueron
              mis principales herramientas.
            </p>
          </div>
        </div>

        {/* <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">2 Years</span>
                <span class="year">2018</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Graphic Designer</h5>
            <p class="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              efficitur ex sit amet massa scelerisque scelerisque. Aliquam erat
              volutpat. Aenean interdum finibus efficitur. Praesent dapibus
              dolor felis, eu ultrices elit molestie.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Experience;
