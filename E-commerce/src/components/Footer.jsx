import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
        </div>
        <p>&copy; {new Date().getFullYear()} L4NCER. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
