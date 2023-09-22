import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders calculator', () => {
  const { container } = render(<Calculator />);
  expect(container).toMatchSnapshot();
});

test('clicking AC button resets the display to "0"', () => {
  const { container } = render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  expect(container).toMatchSnapshot();
});

test('clicking number buttons updates the display', () => {
  const { container } = render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  expect(container).toMatchSnapshot();
});
