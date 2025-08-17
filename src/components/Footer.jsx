import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-text">
          © 2025 Sourav Jana. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="https://www.facebook.com/lusifar.lusifar.7509" className="footer-social-link">📘</a>
          <a href="https://wa.me/918583845972" className="footer-social-link">💬</a>
          <a href="https://www.linkedin.com/in/sourav-jana-1b7aa4376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-social-link">💼</a>
          <a href="https://github.com/souravjana2000" className="footer-social-link">🐙</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;