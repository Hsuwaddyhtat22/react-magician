import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../components/Navigation';
/* eslint-disable */
test('renders the Navigation component', () => {
            const { container } = render( < Router >
                <
                Navigation / >
                <
                /Router>);

                // Use Jest snapshots to compare the rendered output
                expect(container).toMatchSnapshot();
            });