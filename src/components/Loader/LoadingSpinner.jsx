import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div
      className="loading-spinner-container"
      role="alert"
      aria-busy="true"
      aria-label="Cargando contenido"
    >
      <div className="loading-spinner">
        <div className="spinner-circle"></div>
        <span className="spinner-text">Cargando...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
