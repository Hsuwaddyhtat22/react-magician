import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('renders the Home component', () => {
  // Render the Home component
  const { container } = render(<Home />);

  // Use Jest snapshots to compare the rendered output
  expect(container).toMatchSnapshot();
});
