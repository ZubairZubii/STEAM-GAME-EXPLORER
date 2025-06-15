// Group Members
// 22i-1636 (M Bilal Ikram)
// 22i-1697 (Saif-Ur-Rehman)
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar_Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Steam Game Explorer</h3>
          <p>Your ultimate destination for discovering, comparing, and exploring the best games on Steam.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/home">Home</Link>
          <Link to="/gamecomparison">Compare Games</Link>
          <Link to="/filter">Browse Games</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
          <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">Steam Store</a>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <p>Follow us on social media for the latest updates and game recommendations.</p>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Steam Game Explorer. All rights reserved.</p>
        <p>Powered by Steam API. This website is not affiliated with Valve Corporation.</p>
      </div>
    </footer>
  );
}

export default Footer;
