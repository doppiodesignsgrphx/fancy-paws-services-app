import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading message', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Loading services.../i);
  expect(loadingElement).toBeInTheDocument();
});
