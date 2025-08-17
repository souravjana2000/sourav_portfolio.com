import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Home.css';

const Home = ({ setActiveSection }) => {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Web Developer', 'Frontend Developer', 'React Enthusiast', 'JavaScript Lover'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            Hi, I'm <span className="name">Sourav</span>
          </h1>
          < p className="home-subtitle">
            I love creating innovative solutions and bringing ideas to life through code. 
            <br />I’m passionate <span id="element" ref={typedElement}></span>
          </p>
          <div className="home-buttons">
            <button className="btn-primary" onClick={() => setActiveSection('projects')}>
              View My Work
            </button>

            <a
              href="https://drive.google.com/file/d/19R2N8VSxghWk5IKAwSyk6xwCarnddGod/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="home-image">
          <div className="image-circle">
            <img className="image-circle" src="/profileimg.jpg" alt="Sourav" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
