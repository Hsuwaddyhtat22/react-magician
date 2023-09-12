import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line
                setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'AC') {
      setInput('');
    } else if (value === '+/-') {
      setInput((prevInput) => (prevInput.charAt(0) === '-' ? prevInput.slice(1) : `-${prevInput}`));
    } else if (value === 'Del') {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', 'Del', '=',
  ];

  return (
    <div className="calculator">
      <div className="input">
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { input }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </div>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <div className="buttons">
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        {
            buttons.map((button) => (
                // eslint-disable-next-line
                <
                button key={button}
                  onClick={
                    () => handleClick(button)
                }
                >
                  { ' ' }
                  {' '}
                  { ' ' }
                  {' '}
                  { ' ' }
                  {' '}
                  { button }
                  {' '}
                  { ' ' }
                  {' '}
                  { ' ' }

                </button>
            ))
        }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </div>
      {' '}
      { ' ' }
      {' '}
      { ' ' }

    </div>
  );
}

export default App;
