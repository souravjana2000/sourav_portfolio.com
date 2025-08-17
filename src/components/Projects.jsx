import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Online Examination System",
      description: "Online Examination System is a web-based platform that enables administrators, teachers, and students to manage and participate in online tests efficiently. It offers features like secure login, question management, auto-grading, and result generation. This system streamlines the examination process, reduces paperwork, and provides instant feedback..",
      technologies: ["HTML", "CSS", "JavaScript", "MySql"]
    }
    
  ];

  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;