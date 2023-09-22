import React from 'react';
import { render } from '@testing-library/react';
import CustomQuote from '../components/QuoteDisplay';

test('renders CustomQuote component', () => {
  const { container } = render(<CustomQuote />);
  expect(container).toMatchSnapshot();
});
