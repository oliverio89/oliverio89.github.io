import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders without crashing', () => {
    expect(() =>
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      )
    ).not.toThrow();
  });

  test('renders the root route (homepage) by default', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(document.querySelector('.homepage')).toBeInTheDocument();
  });
});
