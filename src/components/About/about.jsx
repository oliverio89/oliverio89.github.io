import React, { useContext, memo, useEffect, useRef } from "react";
import "./about.css";
import MyNewPhoto from "../../resources/images/NewImage.png";
import Tilt from "react-parallax-tilt";
import { LanguageContext } from "../../contexts/LanguageContext.js";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

const About = memo(() => {
  const { language, translations } = useContext(LanguageContext);
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="aboutme" className="hero-section">
      <Container fluid className="hero-container">
        <Row className="hero-row">
          {/* Text Content */}
          <Col lg={6} className="hero-text-col">
            <div className="hero-content" ref={textRef}>
              <div className="status-badge">
                <div className="status-dot"></div>
                <span>Available for work</span>
              </div>

              <h1 className="hero-title">
                <span className="title-line">
                  {translations[language].titulo}
                </span>
              </h1>

              <p className="hero-subtitle">
                {translations[language].descriptionAbout}
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Client Satisfaction</span>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  href="https://www.linkedin.com/in/victor-wdfs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedinIn />
                  <span>Let's Connect</span>
                </a>

                <a
                  href="https://github.com/oliverio89"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                  <span>View Code</span>
                </a>

                <button className="btn btn-outline">
                  <FaDownload />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </Col>

          {/* Image Content */}
          <Col lg={6} className="hero-image-col">
            <div className="hero-image-container" ref={imageRef}>
              <div className="image-backdrop"></div>
              <div className="image-frame">
                <Tilt
                  tiltMaxAngleX={8}
                  tiltMaxAngleY={8}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className="profile-image-container">
                    <img
                      src={MyNewPhoto}
                      className="profile-image"
                      alt="Víctor Moreno García - Full Stack Developer"
                      loading="lazy"
                    />
                    <div className="image-overlay"></div>
                  </div>
                </Tilt>
              </div>

              {/* Floating Elements */}
              <div className="floating-elements">
                <div className="floating-card tech-card">
                  <span>React</span>
                </div>
                <div className="floating-card tech-card tech-card-2">
                  <span>Node.js</span>
                </div>
                <div className="floating-card tech-card tech-card-3">
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line"></div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </Container>

      {/* Background Elements */}
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
