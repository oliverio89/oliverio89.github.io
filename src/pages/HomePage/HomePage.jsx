import React from "react";
import "./HomePage.css";
import { LanguageProvider } from "../../contexts/LanguageContext.js";
import About from "../../components/About/about";
import Projects from "../../components/Proyects/Proyects";
import Footer from "../../components/Footer/footer.jsx";
import Navbar from "../../components/Navbar/navbar";
import KnowledgeStack from "../../components/Stack/stack";
import NewComponent from "../../components/NewComponent/NewComponent.jsx";

const HomePage = () => {
  return (
    <section className="homepage">
      <LanguageProvider>
        <div className="m-3">
          {" "}
          <Navbar />{" "}
        </div>
        <div className="m-6">
          {" "}
          <About />{" "}
        </div>
        <div className="m-6">
          {" "}
          <NewComponent />{" "}
        </div>
        <div className="m-6">
          {" "}
          <KnowledgeStack />{" "}
        </div>
        <div className="m-6">
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
