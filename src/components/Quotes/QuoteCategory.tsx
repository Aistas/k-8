import React from 'react';
import { Link } from 'react-router-dom';

const QuoteCategory: React.FC = () => {
  return (
    <>
      <div className="mb-4 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
          <Link to="/" className="nav-link">All Quotes</Link>
        </button>
        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
          <Link to="/category/star-wars" className="nav-link">Star Wars</Link>
        </button>
        <button className="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled"
                type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>
          <Link to="/category/motivational" className="nav-link">Motivational</Link>
        </button>
        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
          <Link to="/category/saying" className="nav-link">Saying</Link>
        </button>
        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
          <Link to="/category/humour" className="nav-link">Humour</Link>
        </button>
        <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings"
                type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
          <Link to="/category/famous-people" className="nav-link">Famous people</Link>
        </button>
      </div>
    </>
  );
};

export default QuoteCategory;
