// src/pages/BizguidePro.js
import React from 'react';
import '../Styles/Bizguide.css';

const BizguidePro = () => {
  return (
    <div className="bizguide-pro">
      <header className="bizguide-header">
        <h1>BizGuide Pro</h1>
        <nav className="bizguide-nav">
          <a href="#overview">Overview</a>
          <a href="#add-ons">Add-Ons</a>
          <a href="#faq">FAQ</a>
        </nav>
      </header>
      <main className="bizguide-content">
        <div className="main-content">
          <img src="path-to-main-image.jpg" alt="BizGuide Pro Main" className="main-image" />
          <div className="text-content">
            <h2>Introduction</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <h2>Feature</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <button className="btn-show-more">Show More</button>
            <button className="btn-get">GET</button>
          </div>
        </div>
        <div className="thumbnail-gallery">
          <img src="path-to-thumbnail-1.jpg" alt="Thumbnail 1" />
          <img src="path-to-thumbnail-2.jpg" alt="Thumbnail 2" />
          <img src="path-to-thumbnail-3.jpg" alt="Thumbnail 3" />
          <img src="path-to-thumbnail-4.jpg" alt="Thumbnail 4" />
          <img src="path-to-thumbnail-5.jpg" alt="Thumbnail 5" />
        </div>
      </main>
    </div>
  );
};

export default BizguidePro;
