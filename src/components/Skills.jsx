import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'Java', level: 'core' },
    { name: 'React', level: 'intermediate' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Expert' },
    { name: 'Git', level: 'Advanced' }
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                {skill.name.charAt(0)}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;