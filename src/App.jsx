import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch(activeSection) {
      case 'home': return <Home setActiveSection={setActiveSection} />;
      case 'about': return <About />;
      case 'skills': return <Skills />;
      case 'projects': return <Projects />;
      case 'contact': return <Contact />;
      default: return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="main-content">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;