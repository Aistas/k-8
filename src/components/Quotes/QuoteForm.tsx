import React, { useState } from 'react';
import axiosApi from '../../axiosApi';
import { Quote } from '../../types.ts';

interface QuoteFormProps {
  quote?: Quote;
  onSave: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ quote, onSave }) => {
  const [author, setAuthor] = useState(quote ? quote.author : '');
  const [category, setCategory] = useState(quote ? quote.category : '');
  const [text, setText] = useState(quote ? quote.text : '');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const quoteData = {
      author,
      category,
      text
    };
    if (quote && quote.id) {
      await axiosApi.put(`quotes/${quote.id}.json`, quoteData);
    } else {
      await axiosApi.post('quotes.json', quoteData);
    }
    onSave();
  };

  return (
    <form className="col-md-6" onSubmit={handleSubmit}>
      <input className="mb-3"
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <select className="mb-3" value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="star-wars">Star Wars</option>
        <option value="famous-people">Famous people</option>
        <option value="saying">Saying</option>
        <option value="humour">Humour</option>
        <option value="motivational">Motivational</option>
      </select>
      <textarea
        placeholder="Quote text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ms-3" type="submit">Save</button>
    </form>
  );
};

export default QuoteForm;
