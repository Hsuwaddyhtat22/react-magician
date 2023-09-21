import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import CustomQuote from './components/QuoteDisplay'; // Import MainComponent
import './App.css';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          <Route
            path="/calculator"
            element={<Calculator />}
          />
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          <Route
            path="/quote"
            element={<CustomQuote />}
          />
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          { ' ' }
          {' '}
          <Route
            path="/customquote"
            element={<CustomQuote />}
          />
          {' '}
          { ' ' }
          {' '}
          { ' ' }

        </Routes>
      </div>
    </Router>
  );
}

export default App;
