import React, { useContext } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import "./Experience.css";

function Experience() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div class="container">
      <div class="main-timeline">
        <h2>{translations[language].experienceTitle}</h2>
        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">{translations[language].currently}</span>
                <span class="year">2025</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">{translations[language].inGeneroTitle}</h5>
            <p class="description">
              {translations[language].inGeneroDescription}
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">{translations[language].months18}</span>
                <span class="year">2023</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">{translations[language].factoriaF5Title}</h5>
            <p class="description">
              {translations[language].factoriaF5Description}
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">{translations[language].months6}</span>
                <span class="year">2023</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">{translations[language].peopleExpertsTitle}</h5>
            <p class="description">
              {translations[language].peopleExpertsDescription}
            </p>
          </div>
        </div>

        <div class="timeline">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month">{translations[language].months3}</span>
                <span class="year">2022</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h5 class="title">{translations[language].ironhackTitle}</h5>
            <p class="description">
              {translations[language].ironhackDescription}
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
