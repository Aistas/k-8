import {Link} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="nav-link">BRANDNAME</Link>
        <ul className="navbar-nav d-flex flex-row gap-3 flex-nowrap">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/submit" className="nav-link">Submit new quote</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Toolbar;