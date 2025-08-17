import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Sourav Jana</div>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item}>
              <button
                className={`nav-item ${activeSection === item ? 'nav-item-active' : ''}`}
                onClick={() => setActiveSection(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;