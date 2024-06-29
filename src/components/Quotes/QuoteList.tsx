import React, { useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import QuoteItem from './QuoteItem';
import {Quote} from '../../types.ts';

interface QuoteListProps {
  category?: string;
}

const QuoteList: React.FC<QuoteListProps> = ({ category }) => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axiosApi.get<{ [key: string]: Quote }>('quotes.json');
      const data = response.data;
      if (data) {
        const fetchedQuotes = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        })).filter(quote => !category || quote.category === category);
        setQuotes(fetchedQuotes);
      }
    };

    fetchQuotes();
  }, [category]);

  const handleDelete = async (id: string) => {
    await axiosApi.delete(`quotes/${id}.json`);
    setQuotes(prevQuotes => prevQuotes.filter(quote => quote.id !== id));
  };

  return (
    <div>
      {quotes.map(quote => (
        <QuoteItem key={quote.id} quote={quote} onEdit={() => {}} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default QuoteList;
