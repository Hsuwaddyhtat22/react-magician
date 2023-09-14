import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './CustomQuote.css';

const CustomQuote = (props) => {
  const { category, apiKey } = props;
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: { 'X-Api-Key': apiKey },
    })
      .then((response) => response.json())
      .then((data) => {
        setQuote(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [category, apiKey]);

  if (loading) {
    return (
      <div className="custom-container">
        <div className="custom-wrapper">
          <h2>
            {' '}
            { ' ' }
            Loading...
            {' '}
            { ' ' }
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
            { ' ' }
            Error: An error occurred!
            { ' ' }
            {' '}

          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="custom-quote">
      <h2>
        {' '}
        { ' ' }
        Unique Magicians
        {' '}
        { ' ' }
        {' '}

      </h2>
      {' '}
      { ' ' }
      {' '}
      <p>
        {' '}
        { ' ' }
        {' '}
        { quote.quote }
        {' '}
        { ' ' }

      </p>
      {' '}
      { ' ' }
      {' '}
      <p className="custom-author">
        {' '}
        { ' ' }
        {' '}
        { quote.author }
        {' '}
        { ' ' }

      </p>
      {' '}
      { ' ' }

    </div>
  );
};

// Define prop types for category and apiKey
CustomQuote.propTypes = {
  category: PropTypes.string.isRequired,
  apiKey: PropTypes.string.isRequired,
};

export default CustomQuote;
