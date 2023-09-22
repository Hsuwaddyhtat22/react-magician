import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the Home component', () => {
  // Render the Home component
  render(<Home />);

  // Check if the expected text exists in the rendered output
  const expectedText = /Our app is designed to make your life easier and more enjoyable/;
  const textElement = screen.getByText(expectedText, { exact: false });
  expect(textElement).toBeInTheDocument();
});
