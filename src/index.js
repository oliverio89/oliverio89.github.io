import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingSpinner from "./components/Loader/LoadingSpinner";

// Configuración de reportWebVitals para métricas de rendimiento
const reportWebVitalsCallback = (metric) => {
  // Enviar métricas a tu servicio de análisis
  console.log(metric);
  // Aquí puedes añadir tu servicio de analytics preferido
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>
);

reportWebVitals(reportWebVitalsCallback);
