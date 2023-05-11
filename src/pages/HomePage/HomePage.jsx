import React from "react";
import "./HomePage.css";
import About from "../../components/About/about";
import Projects from "../../components/Proyects/Proyects";
import Footer from "../../components/Footer/footer.jsx";

import Navbar from "../../components/Navbar/navbar";
import { LanguageProvider } from "../../contexts/LanguageContext.js";
import KnowledgeStack from "../../components/Stack/stack";

const HomePage = () => {
  return (
    <section className="homepage">
      <LanguageProvider>
        <div>
          {" "}
          <Navbar />{" "}
        </div>
        <div>
          {" "}
          <About />{" "}
        </div>
        <div>
          {" "}
          <KnowledgeStack />{" "}
        </div>
        <div>
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
