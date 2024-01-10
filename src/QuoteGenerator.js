import React, { useState, useEffect } from 'react';
import axios from 'axios';


const QuoteGenerator = () => {
  const [quote, setQuote] = useState({});

  useEffect(() => {
    fetchRandomQuote();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const quotes = response.data.quotes || [];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)] || {};
      setQuote(randomQuote);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div>
      <p>{quote?.quote}</p>
      <p>- {quote?.author}</p>
      <button onClick={fetchRandomQuote}>Get Another Quote</button>
    </div>
  );
};

export default QuoteGenerator;