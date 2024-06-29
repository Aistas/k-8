import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.tsx';
import CategoryPage from './containers/CategoryPage/CategoryPage.tsx';
import SubmitPage from './containers/SubmitPage/SubmitPage.tsx';
import Toolbar from './components/Toolbar/Toolbar.tsx';
import QuoteCategory from './components/Quotes/QuoteCategory.tsx';

const App: React.FC = () => {
  return (
    <>
      <Toolbar/>
      <div className="container">
        <div className="d-flex align-items-start">
          <QuoteCategory/>
          <div className="ms-5 container mt-4">
            <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/category/:category" element={<CategoryPage/>}/>
              <Route path="/submit" element={<SubmitPage/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

