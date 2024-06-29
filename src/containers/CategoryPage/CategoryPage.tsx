import React from 'react';
import { useLocation } from 'react-router-dom';
import QuoteList from '../../components/Quotes/QuoteList.tsx';

const CategoryPage: React.FC = () => {
  const location = useLocation();
  const category = location.pathname.split('/').pop() || '';

  return (
    <div className="container mt-4">
      <h1 className="display-4">{category} Quotes</h1>
      <QuoteList category={category}/>
    </div>
  );
};

export default CategoryPage;
