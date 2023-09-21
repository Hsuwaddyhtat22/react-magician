import React, { useState, useEffect } from 'react';
import './CustomQuote.css';

const CustomQuote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = 'q/2+QpbXpKBC4M8F3JXLxQ==10lXcqJooy2U63OD';
  const category = 'happiness';

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        // Check if the data is an array and has at least one quote
        if (Array.isArray(data) && data.length > 0) {
          setQuote(data[0]);
        } else {
          setError('No quotes found for the specified category');
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="custom-container">
        <div className="custom-wrapper">
          <h2>
            {' '}
            Loading...
            {' '}
          </h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="custom-container">
        <div className="custom-wrapper">
          <h2>
            {' '}
            Error:
            { error }
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-quote">
      <h2>
        {' '}
        Unique Magicians
        {' '}
      </h2>
      {' '}
      <p>
        {' '}
        { quote.quote }
        {' '}

      </p>
      {' '}
      <p className="custom-author">
        {' '}
        { quote.author }
        {' '}

      </p>
      {' '}

    </div>
  );
};

export default CustomQuote;
