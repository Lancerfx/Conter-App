import React from 'react';
import { useShop } from '../context/ShopContext';
import './Navbar.css';

const Navbar = () => {
  const { cartCount, toggleCart } = useShop();

  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <a href="/" className="logo">L4NCER.</a>

        <div className="nav-icons">
          <button className="btn-icon" onClick={toggleCart} aria-label="Cart">
            <div className="cart-icon-wrapper">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
