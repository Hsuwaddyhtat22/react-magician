import React from 'react';
import { render } from '@testing-library/react';
import CustomQuote from '../components/QuoteDisplay';

test('CustomQuote component displays loading message', () => {
  const { getByText } = render(<CustomQuote />);
  const loadingMessage = getByText(/Loading/i);
  expect(loadingMessage).toBeInTheDocument();
});

test('CustomQuote component displays error message', () => {
  const errorMessage = 'Custom error message'; // Replace with your expected error message
  const { getByText } = render(<CustomQuote error={errorMessage} />);
  const errorElement = getByText((content) => content.startsWith('Error:')); expect(errorElement).toBeInTheDocument();
});

test('CustomQuote component displays quote and author', () => {
  const quoteData = {
    quote: 'This is a test quote.',
    author: 'Test Author',
  };

  const { getByText } = render(<CustomQuote
    quote={quoteData}
    error={null}
  />);
  const quoteText = getByText((content) => content.includes('This is a test quote.'));
  const authorText = getByText((content) => content.includes('Test Author')); expect(quoteText).toBeInTheDocument(); expect(authorText).toBeInTheDocument();
});
