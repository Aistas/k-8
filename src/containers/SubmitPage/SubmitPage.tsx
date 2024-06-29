import React from 'react';
import QuoteForm from '../../components/Quotes/QuoteForm.tsx';

const SubmitPage: React.FC = () => {
  return (
    <div className="container mt-4">
      <h1>Submit a New Quote</h1>
      <div className="row">
        <div className="col-md-6">
          <QuoteForm onSave={() => {
          }}/>
        </div>
      </div>
    </div>
  );
};

export default SubmitPage;
