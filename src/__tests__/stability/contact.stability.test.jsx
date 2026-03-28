import { render, screen, fireEvent } from '@testing-library/react';
import Contact from '../../components/Contact/contact';

beforeEach(() => {
  window.alert = vi.fn();
  global.fetch = vi.fn(() => Promise.resolve({ ok: true }));
  vi.clearAllMocks();
});

describe('Contact form stability', () => {
  test('Contact renders without crashing', () => {
    expect(() => render(<Contact />)).not.toThrow();
  });

  test('Contact form has name input', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/nombre/i);
    expect(nameInput).toBeInTheDocument();
  });

  test('Contact form has email input with type=email', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/correo/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('Contact form has message textarea', () => {
    render(<Contact />);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    expect(messageTextarea).toBeInTheDocument();
    expect(messageTextarea.tagName.toLowerCase()).toBe('textarea');
  });

  test('Contact form has submit button', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('typing in name input updates its value', () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/nombre/i);
    fireEvent.change(nameInput, { target: { value: 'María García' } });
    expect(nameInput.value).toBe('María García');
  });

  test('typing in email input updates its value', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/correo/i);
    fireEvent.change(emailInput, { target: { value: 'maria@ejemplo.com' } });
    expect(emailInput.value).toBe('maria@ejemplo.com');
  });

  test('typing in message textarea updates its value', () => {
    render(<Contact />);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    fireEvent.change(messageTextarea, { target: { value: 'Hola, me interesa tu trabajo.' } });
    expect(messageTextarea.value).toBe('Hola, me interesa tu trabajo.');
  });

  test('form submit calls fetch with POST method', async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/correo/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Test User' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    fireEvent.click(submitButton);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [url, options] = global.fetch.mock.calls[0];
    expect(url).toBe('/');
    expect(options.method).toBe('POST');
  });

  test('form submit encodes form data correctly', async () => {
    render(<Contact />);
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/correo/i);
    const messageTextarea = screen.getByLabelText(/mensaje/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    fireEvent.change(nameInput, { target: { value: 'Ana López' } });
    fireEvent.change(emailInput, { target: { value: 'ana@test.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Mensaje de prueba' } });
    fireEvent.click(submitButton);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [, options] = global.fetch.mock.calls[0];
    expect(options.headers['Content-Type']).toBe('application/x-www-form-urlencoded');
    expect(options.body).toContain('form-name=contact');
    expect(options.body).toContain('name=');
    expect(options.body).toContain('email=');
    expect(options.body).toContain('message=');
  });

  test('email input has type=email attribute (browser validation)', () => {
    render(<Contact />);
    const emailInput = screen.getByLabelText(/correo/i);
    expect(emailInput).toHaveAttribute('type', 'email');
  });

  test('submit button text is Enviar', () => {
    render(<Contact />);
    const submitButton = screen.getByRole('button', { name: /enviar/i });
    expect(submitButton.textContent.trim()).toBe('Enviar');
  });
});
