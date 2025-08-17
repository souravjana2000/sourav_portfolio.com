import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <h3 className="contact-title">Contact Information</h3>
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <span>janasourav991@email.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <span>+91 8583845972 </span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <span>Kolkata, West Bengal, India</span>
            </div>
          </div>
          <div>
            <h3 className="contact-title">Follow Me</h3>
            <div className="social-links">
              <a href="https://www.facebook.com/lusifar.lusifar.7509" className="social-link">
                <span className="contact-icon">📘</span>
                Facebook
              </a>
              <a href="https://wa.me/918583845972" target='blank' className="social-link">
                <span className="contact-icon">💬</span>
                WhatsApp
              </a>
              <a href="https://www.linkedin.com/in/sourav-jana-1b7aa4376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-link">
                <span className="contact-icon">💼</span>
                LinkedIn
              </a>
              <a href="https://github.com/souravjana2000" className="social-link">
                <span className="contact-icon">🐙</span>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;