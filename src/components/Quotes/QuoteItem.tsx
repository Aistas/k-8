import React from 'react';
import {Quote} from '../../types.ts';

interface QuoteItemProps {
  quote: Quote;
  onEdit: (quote: Quote) => void;
  onDelete: (id: string) => void;
}

const QuoteItem: React.FC<QuoteItemProps> = ({ quote, onEdit, onDelete }) => {
  return (
    <div className="mb-4">
      <p>"{quote.text}"</p>
      <p><strong>Author: {quote.author}</strong> | category: {quote.category}</p>
      <button onClick={() => onEdit(quote)}>Edit</button>
      <button onClick={() => onDelete(quote.id!)}>Delete</button>
    </div>
  );
};

export default QuoteItem;
