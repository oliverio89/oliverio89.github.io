import React from "react";
import "./HomePage.css";
import { LanguageProvider } from "../../contexts/LanguageContext.js";
import About from "../../components/About/about";
import Projects from "../../components/Proyects/Proyects";
import Footer from "../../components/Footer/footer.jsx";
import Navbar from "../../components/Navbar/navbar";
import KnowledgeStack from "../../components/Stack/stack";

const HomePage = () => {
  return (
    <section className="homepage">
      <LanguageProvider>
        <div className="mb-1">
          {" "}
          <Navbar />{" "}
        </div>
        <div className="mb-6">
          {" "}
          <About />{" "}
        </div>
        <div className="mb-4">
          {" "}
          <KnowledgeStack />{" "}
        </div>
        <div className="mb-4">
          {" "}
          <Projects />{" "}
        </div>{" "}
        <div>
          {" "}
          <Footer />{" "}
        </div>{" "}
      </LanguageProvider>
    </section>
  );
};

export default HomePage;
