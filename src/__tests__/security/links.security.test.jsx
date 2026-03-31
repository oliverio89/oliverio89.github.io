import { render } from "@testing-library/react";
import { LanguageProvider } from "../../contexts/LanguageContext";
import Footer from "../../components/Footer/footer";
import About from "../../components/About/about";
import Contact from "../../components/Contact/contact";

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
});

describe("Link security: target=_blank must have rel=noopener noreferrer", () => {
  test("Footer: all target=_blank links have rel=noopener noreferrer", () => {
    const { container } = renderWithContext(Footer);
    const blankLinks = container.querySelectorAll('a[target="_blank"]');
    expect(blankLinks.length).toBeGreaterThan(0);
    blankLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("About: all target=_blank links have rel=noopener noreferrer", () => {
    const { container } = renderWithContext(About);
    const blankLinks = container.querySelectorAll('a[target="_blank"]');
    expect(blankLinks.length).toBeGreaterThan(0);
    blankLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("Contact: all target=_blank links have rel=noopener noreferrer", () => {
    const { container } = renderWithContext(Contact);
    const blankLinks = container.querySelectorAll('a[target="_blank"]');
    expect(blankLinks.length).toBeGreaterThan(0);
    blankLinks.forEach((link) => {
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    });
  });

  test("Footer: LinkedIn link points to expected domain (linkedin.com)", () => {
    const { container } = renderWithContext(Footer);
    const links = Array.from(container.querySelectorAll("a[href]"));
    const linkedinLink = links.find((link) =>
      link.getAttribute("href").includes("linkedin.com"),
    );
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink.getAttribute("href")).toMatch(/linkedin\.com/);
  });

  test("Footer: GitHub link points to expected domain (github.com)", () => {
    const { container } = renderWithContext(Footer);
    const links = Array.from(container.querySelectorAll("a[href]"));
    const githubLink = links.find((link) =>
      link.getAttribute("href").includes("github.com"),
    );
    expect(githubLink).toBeTruthy();
    expect(githubLink.getAttribute("href")).toMatch(/github\.com/);
  });

  test("About: LinkedIn link has rel=noopener noreferrer", () => {
    const { container } = renderWithContext(About);
    const links = Array.from(container.querySelectorAll("a[href]"));
    const linkedinLink = links.find((link) =>
      link.getAttribute("href").includes("linkedin.com"),
    );
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("About: GitHub link has rel=noopener noreferrer", () => {
    const { container } = renderWithContext(About);
    const links = Array.from(container.querySelectorAll("a[href]"));
    const githubLink = links.find((link) =>
      link.getAttribute("href").includes("github.com"),
    );
    expect(githubLink).toBeTruthy();
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("Contact: email mailto link has rel=noopener noreferrer", () => {
    const { container } = renderWithContext(Contact);
    const links = Array.from(container.querySelectorAll("a[href]"));
    const mailtoLink = links.find((link) =>
      link.getAttribute("href").startsWith("mailto:"),
    );
    expect(mailtoLink).toBeTruthy();
    expect(mailtoLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
