import React, { useState, useEffect } from 'react';

function QuoteDisplay() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = 'q/2+QpbXpKBC4M8F3JXLxQ==10lXcqJooy2U63OD';
    const category = 'happiness';

    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setQuote(data[0].quote);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
      });
  }, []);

  if (isLoading) {
    return <div> Loading... </div>;
  }

  if (error) {
    return (
      <div>
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        Error:
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { error }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </div>
    );
  }

  return (
    <div>
      <h2>
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        MATH MAGICIANS
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </h2>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      <p>
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { quote }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }
        {' '}
        { ' ' }

      </p>
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }
      {' '}
      { ' ' }

    </div>
  );
}

export default QuoteDisplay;