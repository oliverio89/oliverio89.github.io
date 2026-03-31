import { render, screen, act } from "@testing-library/react";
import { useContext } from "react";
import {
  LanguageProvider,
  LanguageContext,
} from "../../contexts/LanguageContext";
import Navbar from "../../components/Navbar/navbar";
import translations from "../../components/Language/translations";

// Helper: consumer component that exposes context values via data attributes
function ContextConsumer({ onRender }) {
  const ctx = useContext(LanguageContext);
  onRender(ctx);
  return null;
}

describe("Language stability: LanguageContext", () => {
  test("LanguageContext provides default Spanish language", () => {
    let capturedCtx = null;
    render(
      <LanguageProvider>
        <ContextConsumer
          onRender={(ctx) => {
            capturedCtx = ctx;
          }}
        />
      </LanguageProvider>,
    );
    expect(capturedCtx).not.toBeNull();
    expect(capturedCtx.language).toBe("es");
  });

  test("LanguageContext changeLanguage updates the language", () => {
    let capturedCtx = null;
    render(
      <LanguageProvider>
        <ContextConsumer
          onRender={(ctx) => {
            capturedCtx = ctx;
          }}
        />
      </LanguageProvider>,
    );
    expect(capturedCtx.language).toBe("es");
    act(() => {
      capturedCtx.changeLanguage("en");
    });
    expect(capturedCtx.language).toBe("en");
  });

  test("translations object has both es and en keys", () => {
    expect(translations).toHaveProperty("es");
    expect(translations).toHaveProperty("en");
  });

  test("Spanish has Acerca de mí translation", () => {
    expect(translations.es.AcercaDeMí).toBe("Acerca de mí");
  });

  test("English has About me translation", () => {
    expect(translations.en.AcercaDeMí).toBe("About me");
  });
});

describe("Language stability: Navbar", () => {
  test("Navbar renders language toggle button", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );
    // The language toggle is a button containing an img flag icon
    const button = document.querySelector("button.botonIdioma");
    expect(button).toBeInTheDocument();
  });

  test("Navbar shows language options by default", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );
    // lang state defaults to 'es', so 'ES' should be active
    const esOpt = document.querySelector(".lang-opt.lang-opt--active");
    expect(esOpt).toBeInTheDocument();
    expect(esOpt.textContent).toBe("ES");
  });

  test("Navbar navigation links render translated text in Spanish", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );
    // LanguageProvider defaults to 'es', so Spanish translations should appear
    expect(screen.getByText(translations.es.Proyectos)).toBeInTheDocument();
    expect(screen.getByText(translations.es.AcercaDeMí)).toBeInTheDocument();
    expect(screen.getByText(translations.es.Stack)).toBeInTheDocument();
  });

  test("Proyectos text appears in Spanish by default", () => {
    render(
      <LanguageProvider>
        <Navbar />
      </LanguageProvider>,
    );
    expect(screen.getByText("Proyectos")).toBeInTheDocument();
  });
});
