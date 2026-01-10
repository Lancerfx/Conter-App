import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="container">
      <header className="hero animate-fade-in">
        <div className="hero-content">
          <h1>Minimalism tailored for you.</h1>
          <p>Discover a curated collection of premium essentials that elevate your everyday life.</p>
          <button className="btn btn-primary" onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })}>
            Shop Collection
          </button>
        </div>
      </header>
    </div>
  );
};

export default Hero;
