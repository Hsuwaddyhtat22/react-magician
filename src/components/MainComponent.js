import React from 'react';
import QuoteDisplay from './QuoteDisplay';

const mainComponentStyle = {
  textAlign: 'center',
  marginTop: '70px',
  fontWeight: 'bold',
  fontSize: '15px',
  fontFamily: 'Arial, sans-serif',
};

function MainComponent() {
  return (
    <div style={mainComponentStyle}>
      <QuoteDisplay />
    </div>
  );
}

export default MainComponent;
