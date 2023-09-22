import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the Home component', () => {
    // Log the rendered output to the console for debugging
    console.log(render( < Home / > ));

    // Check if a specific text exists in the rendered output
    const expectedText = /Our app is designed to make your life easier and more enjoyable\. Whether you're a student looking for a handy calculator, or you simply need some daily inspiration, we've got you covered\./;
    expect(screen.getByText(expectedText, { exact: false })).toBeInTheDocument();
});