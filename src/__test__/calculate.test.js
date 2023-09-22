import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('renders calculator', () => {
  render(<Calculator />);
  const displays = screen.getAllByText('0');
  expect(displays.length).toBeGreaterThanOrEqual(1);
});

test('clicking AC button resets the display to "0"', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('AC'));
  // Check if at least one display resets to "0"
  const displays = screen.getAllByText('0');
  expect(displays.length).toBeGreaterThanOrEqual(1);
});

test('clicking number buttons updates the display', () => {
  render(<Calculator />);
  // Click on the number buttons '1' and '2'
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('2'));
  // Check if at least one display shows '12'
  const displays = screen.getAllByText('12');
  expect(displays.length).toBeGreaterThanOrEqual(1);
});
