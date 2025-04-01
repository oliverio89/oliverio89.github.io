import React, { useState } from "react";
import "./OptimizedImage.css";

const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = "blur",
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (imagePath) => {
    const sizes = [300, 600, 900];
    return sizes
      .map((size) => {
        // Aquí podrías implementar una función que genere diferentes tamaños de imagen
        // Por ahora usamos la misma imagen
        return `${imagePath} ${size}w`;
      })
      .join(", ");
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setError(true);
    setIsLoading(false);
  };

  if (error) {
    return (
      <div
        className="image-error"
        role="img"
        aria-label={`Error al cargar la imagen: ${alt}`}
      >
        <span>❌</span>
        <p>Error al cargar la imagen</p>
      </div>
    );
  }

  return (
    <div className="optimized-image-container" style={{ width, height }}>
      {isLoading && <div className="image-placeholder" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        className={`optimized-image ${className || ""} ${
          isLoading ? "loading" : "loaded"
        }`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        srcSet={generateSrcSet(src)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        onLoad={handleLoad}
        onError={handleError}
        style={{ opacity: isLoading ? 0 : 1 }}
      />
    </div>
  );
};

export default OptimizedImage;
