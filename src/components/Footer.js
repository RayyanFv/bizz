// src/components/Footer.js
import React from 'react';
import '../Styles/Footer.css'; // Jangan lupa untuk membuat file CSS ini

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Upgrade UMKM. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.instagram.com/upgradeumkm.id/" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
