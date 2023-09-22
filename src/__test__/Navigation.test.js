import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
/* eslint-disable */
test('renders the Navigation component', () => {
            render( < Router >
                <
                Navigation / >
                <
                /Router>);


                expect(screen.getByText('MATH MAGICIANS')).toBeInTheDocument();


                expect(screen.getByText('Home')).toBeInTheDocument();


                expect(screen.getByText('Calculator')).toBeInTheDocument();


                expect(screen.getByText('Quotes')).toBeInTheDocument();
            });

        test('activates the correct navigation link when on that page', () => {
                render( < Router >
                    <
                    Navigation / >
                    <
                    /Router>);


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