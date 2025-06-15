import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Navbar_Footer.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    alert('Logged out successfully!');
    window.location.href = '/';
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}&genre=${selectedGenre}`);
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/home" className="logo-link">
          Steam Explorer
        </Link>
      </div>
      <div className="search-bar-container">
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
          <button
            type="button"
            className="filter-button"
            onClick={() => navigate('/filter')}
          >
            Filter
          </button>
        </form>
      </div>
      <nav className="main-nav">
        <ul className="nav-links">
          <li>
            <Link to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link to="/gamecomparison">
              Compare Games
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/about">
              About Us
            </Link>
          </li>
          <li>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
