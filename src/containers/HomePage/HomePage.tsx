import React from 'react';
import QuoteList from '../../components/Quotes/QuoteList.tsx';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>All Quotes</h1>
      <QuoteList />
    </div>
  );
};

export default HomePage;
