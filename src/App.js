// src/App.js
import React from 'react';
import Calculator from './components/Calculator';
import CustomQuote from './components/QuoteDisplay'; // Import MainComponent
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-heading">
        {' '}
        Welcome to Our App
        {' '}
      </h1>
      {' '}
      <Calculator />
      <CustomQuote />
    </div>
  );
}

export default App;
