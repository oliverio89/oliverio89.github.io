import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  useEffect(() => {
    // Optimización de rendimiento
    const handleFirstContentfulPaint = () => {
      // Precargar recursos críticos
      const links = [
        { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
      ];

      links.forEach((link) => {
        const linkElement = document.createElement("link");
        Object.entries(link).forEach(([key, value]) => {
          linkElement[key] = value;
        });
        document.head.appendChild(linkElement);
      });
    };

    handleFirstContentfulPaint();
  }, []);

  return (
    <div className="App" role="application">
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </div>
  );
}

export default App;
