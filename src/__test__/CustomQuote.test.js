import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CustomQuote from '../components/QuoteDisplay';

// Mock the fetch function to return a resolved or rejected promise
global.fetch = jest.fn();

describe('CustomQuote component', () => {
  beforeEach(() => {
    global.fetch.mockClear();
  });

  it('renders loading text initially', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => [],
    });

    render(<CustomQuote />);

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Loading...')).toBeNull();
    });

    expect(screen.getByTestId('quote-loading')).toMatchSnapshot();
  });

  it('renders quote and author after fetching data', async () => {
    global.fetch.mockResolvedValueOnce({
      json: async () => [{ quote: 'Test Quote', author: 'Test Author' }],
    });

    render(<CustomQuote />);

    // Wait for the fetch to resolve
    await waitFor(() => {
      const quoteElement = screen.getByText('Test Quote');
      const authorElement = screen.getByText('Test Author');
      expect(quoteElement).toBeInTheDocument();
      expect(authorElement).toBeInTheDocument();
    });

    expect(screen.getByTestId('quote-loaded')).toMatchSnapshot();
  });
});
