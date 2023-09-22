import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';

test('renders the Navigation component', () => {
    render( <
        Router >
        <
        Navigation / >
        <
        /Router>
    );

    // Check if the navigation logo is rendered
    expect(screen.getByText('MATH MAGICIANS')).toBeInTheDocument();

    // Check if the "Home" link is present
    expect(screen.getByText('Home')).toBeInTheDocument();

    // Check if the "Calculator" link is present
    expect(screen.getByText('Calculator')).toBeInTheDocument();

    // Check if the "Quotes" link is present
    expect(screen.getByText('Quotes')).toBeInTheDocument();
});

test('activates the correct navigation link when on that page', () => {
    render( <
        Router >
        <
        Navigation / >
        <
        /Router>
    );

    // Check if the "Home" link is active when on the home page
    expect(screen.getByText('Home').closest('a')).toHaveClass('active');

    // Check if the "Calculator" link is active when on the calculator page
    // You can simulate this by changing the route or providing a custom route
    // that matches the Calculator page.
    // For example, you can use something like <Router initialEntries={['/calculator']}>.
    // Then, you can expect the "Calculator" link to have the "active" class.

    // Check if the "Quotes" link is active when on the quotes page
    // Similar to the "Calculator" link, you can simulate this by changing the route
    // or providing a custom route that matches the Quotes page.

    // Adjust the test cases accordingly for the 'Calculator' and 'Quotes' links.
});