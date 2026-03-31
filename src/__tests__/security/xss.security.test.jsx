import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../../components/Contact/contact";
import { LanguageProvider } from "../../contexts/LanguageContext";

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

describe("XSS prevention: Contact form", () => {
  test("name input: XSS payload stored as plain text, not executed", () => {
    renderWithContext(Contact);
    const xssPayload = '<script>alert("xss")</script>';
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: xssPayload } });
    // Value is stored as plain text string
    expect(nameInput.value).toBe(xssPayload);
    // No actual script element was injected into the DOM
    expect(document.querySelectorAll("script[src]").length).toBe(0);
    // The raw angle brackets are not rendered as HTML tags
    expect(document.querySelector("script")).toBeNull();
  });

  test("email input: XSS payload stored as plain text, not executed", () => {
    renderWithContext(Contact);
    const xssPayload = '"><img src=x onerror=alert(1)>';
    const emailInput = screen.getByLabelText(/correo/i);
    fireEvent.change(emailInput, { target: { value: xssPayload } });
    expect(emailInput.value).toBe(xssPayload);
    // No injected img elements with onerror outside the component's own markup
    const imgs = document.querySelectorAll("img[onerror]");
    expect(imgs.length).toBe(0);
  });

  test("message textarea: XSS payload stored as plain text, not executed", () => {
    renderWithContext(Contact);
    const xssPayload = "<svg onload=alert(document.cookie)>";
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    fireEvent.change(messageTextarea, { target: { value: xssPayload } });
    expect(messageTextarea.value).toBe(xssPayload);
    // No svg with onload attribute injected
    const svgWithOnload = document.querySelectorAll("svg[onload]");
    expect(svgWithOnload.length).toBe(0);
  });

  test("form submission: encode function URL-encodes special characters", () => {
    renderWithContext(Contact);
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/correo/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole("button", { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: "Test & User" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(messageTextarea, { target: { value: "Hello <world>" } });
    fireEvent.click(submitButton);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe("/");
    expect(options.method).toBe("POST");
    // The body should URL-encode special characters — & becomes %26, < becomes %3C
    expect(options.body).toContain("%26");
    expect(options.body).toContain("%3C");
  });

  test("no script tags injected into DOM after form interaction", () => {
    renderWithContext(Contact);
    const payloads = [
      "<script>window.hacked=true</script>",
      '"><script>window.hacked=true</script>',
      "'; DROP TABLE users; --",
    ];
    const nameInput = screen.getByLabelText(/nombre/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);

    payloads.forEach((payload) => {
      fireEvent.change(nameInput, { target: { value: payload } });
      fireEvent.change(messageTextarea, { target: { value: payload } });
    });

    // window.hacked must never have been set
    expect(window.hacked).toBeUndefined();
    // No dynamically injected script elements (beyond any already present from CRA)
    const allScripts = document.querySelectorAll("script");
    allScripts.forEach((script) => {
      expect(script.textContent).not.toContain("window.hacked");
    });
  });

  test("img onerror injection attempt: stored as text value", () => {
    renderWithContext(Contact);
    const onerrorPayload = '<img src=x onerror="window.pwned=1">';
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: onerrorPayload } });

    // Value is the raw string, not parsed HTML
    expect(nameInput.value).toBe(onerrorPayload);
    // window.pwned must not have been set
    expect(window.pwned).toBeUndefined();
    // No img elements with onerror attribute exist in the DOM
    expect(document.querySelectorAll("img[onerror]").length).toBe(0);
  });
});
