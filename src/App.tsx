import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage.tsx';
import CategoryPage from './containers/CategoryPage/CategoryPage.tsx';
import SubmitPage from './containers/SubmitPage/SubmitPage.tsx';
import Toolbar from './components/Toolbar/Toolbar.tsx';

const App: React.FC = () => {
  return (

    <>
      <Toolbar/>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">All Quotes</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/star-wars" className="nav-link">Star Wars</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/motivational" className="nav-link">Motivational</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/saying" className="nav-link">Saying</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/humour" className="nav-link">Humour</Link>
              </li>
              <li className="nav-item">
                <Link to="/category/famous-people" className="nav-link">Famous people</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
          <Route path="/submit" element={<SubmitPage/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;

