import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hoof Hearted/i);
  const pTag = screen.getByText('LOL!')
  expect(linkElement).toBeInTheDocument();
  expect(pTag).toBeInTheDocument();
});
