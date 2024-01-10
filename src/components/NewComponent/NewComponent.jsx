import React from "react";
import "./NewComponent.css";

function NewComponent() {
  return (
    <div class="container">
      <div class="main-timeline">
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">Actualmente</span>
                <span class="year">2023</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">Co-formador: "Factoría F5"</h5>
            <p class="description">
              Hoy me encuentro formando a otras personas que como yo, vemos un
              mundo de posibildiades en la programación. En este caso, me
              encuentro formando a personas en el desarrollo web con React y
              Node.js. Esta gran oportunidad me la dió Factoría F5, una escuela
              de programación que apuesta por la formación de calidad y por la
              inserción laboral de sus alumnos. Especializandome más aún en
              React y Node.js. <br />
              Como suelen decir: "Aprender enseñando es la mejor forma de
              aprender".
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

export default NewComponent;
