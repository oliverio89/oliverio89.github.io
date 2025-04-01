import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingSpinner from "../components/Loader/LoadingSpinner";

// Lazy loading de componentes
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const About = lazy(() => import("../components/About/about"));
const Projects = lazy(() => import("../components/Proyects/Proyects"));
const Contact = lazy(() => import("../components/Contact/contact"));

const AppRoutes = () => {
  return (
    <main role="main">
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default AppRoutes;
