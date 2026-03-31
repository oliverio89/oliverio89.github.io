import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import {
  LanguageProvider,
  LanguageContext,
} from "../../contexts/LanguageContext";
import { projects } from "../../components/Proyects/data";
import App from "../../App";
import Navbar from "../../components/Navbar/navbar";
import About from "../../components/About/about";
import Projects from "../../components/Proyects/Proyects";
import Footer from "../../components/Footer/footer";
import Contact from "../../components/Contact/contact";
import Stack from "../../components/Stack/stack";
import NewComponent from "../../components/NewComponent/NewComponent";
import translations from "../../components/Language/translations";

function renderWithContext(Component) {
  return render(
    <LanguageProvider>
      <Component />
    </LanguageProvider>,
  );
}

beforeEach(() => {
  window.alert = vi.fn();
  global.fetch = vi.fn(() => Promise.resolve({ ok: true }));
  vi.clearAllMocks();
});

describe("Component stability: renders without crashing", () => {
  test("App renders without crashing", () => {
    expect(() =>
      render(
        <LanguageProvider>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </LanguageProvider>,
      ),
    ).not.toThrow();
  });

  test("Navbar renders without crashing", () => {
    expect(() => renderWithContext(Navbar)).not.toThrow();
  });

  test("About renders without crashing", () => {
    expect(() => renderWithContext(About)).not.toThrow();
  });

  test("Projects renders without crashing", () => {
    expect(() => renderWithContext(Projects)).not.toThrow();
  });

  test("Footer renders without crashing", () => {
    expect(() => renderWithContext(Footer)).not.toThrow();
  });

  test("Contact renders without crashing", () => {
    expect(() => renderWithContext(Contact)).not.toThrow();
  });

  test("Stack renders without crashing", () => {
    expect(() => renderWithContext(Stack)).not.toThrow();
  });

  test("NewComponent renders without crashing", () => {
    expect(() => renderWithContext(NewComponent)).not.toThrow();
  });
});

describe("Component stability: content checks", () => {
  test("App renders correct number of main sections", () => {
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </LanguageProvider>,
    );
    // The homepage wraps all sections
    expect(document.querySelector(".homepage")).toBeInTheDocument();
    // Verify key section ids are present
    // Note: About uses id="aboutme container d-flex mb-3" (id contains spaces), use attribute selector
    expect(document.querySelector('[id^="aboutme"]')).toBeInTheDocument();
    expect(document.querySelector("#stack")).toBeInTheDocument();
    expect(document.querySelector("#projects")).toBeInTheDocument();
    // Note: Contact component is not included in HomePage, so no #contact section in App
  });

  test("Navbar has navigation links", () => {
    renderWithContext(Navbar);
    const links = document.querySelectorAll("a[href]");
    expect(links.length).toBeGreaterThan(0);
  });

  test("Footer has social links", () => {
    const { container } = renderWithContext(Footer);
    const links = container.querySelectorAll("a[href]");
    expect(links.length).toBeGreaterThan(0);
    const hrefs = Array.from(links).map((l) => l.getAttribute("href"));
    const hasSocialLink = hrefs.some(
      (href) => href.includes("linkedin.com") || href.includes("github.com"),
    );
    expect(hasSocialLink).toBe(true);
  });

  test("Projects renders all projects from data", () => {
    const { container } = renderWithContext(Projects);
    // Use translations data instead of static data
    const esProjects = translations.es.projectsData;

    esProjects
      .filter((p) => !p.hideProjectLink && !p.hideAllLinks)
      .forEach((project) => {
        const titleEl = container.querySelector(
          `[href="${project.link}"], a[href="${project.link}"]`,
        );
        expect(titleEl).toBeTruthy();
      });
  });

  test("Stack renders technology icons", () => {
    const { container } = renderWithContext(Stack);
    // Stack section must exist
    expect(container.querySelector("#stack")).toBeInTheDocument();
    // Technology names are rendered as text
    expect(container.textContent).toContain("React Js");
    expect(container.textContent).toContain("JavaScript");
    expect(container.textContent).toContain("Node Js");
  });

  test("Contact form has all required inputs (name, email, message, submit)", () => {
    renderWithContext(Contact);
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /enviar/i })).toBeInTheDocument();
  });
});
