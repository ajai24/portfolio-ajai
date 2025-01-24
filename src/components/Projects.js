import React from "react";
import "../styles/Project.css";

function Projects() {
  const projectList = [
    {
      title: "Plant Disease Detection",
      description: "An AI-based web app for identifying plant diseases from images.",
      technologies: ["Python", "Data Science", "Machine Learning", "TensorFlow"],
    },
    {
      title: "Traffic Prediction System",
      description: "A data-driven solution for predicting traffic patterns using NumPy and Pandas.",
      technologies: ["Python", "Data Science", "NumPy", "Pandas", "Machine Learning"],
    },
    {
      title: "Space Shooter Game",
      description: "A 2D game built with Python and Pygame, featuring unique enemies and power-ups.",
      technologies: ["Python", "Pygame"],
    },
    {
      title: "Safe Money Transfer with Blockchain",
      description: "A secure and decentralized money transfer system built on blockchain technology.",
      technologies: ["Blockchain", "Smart Contracts", "Ethereum", "Solidity"],
    },
    {
      title: "Generate Student Certificate with Java and MySQL",
      description: "A system to generate and manage student certificates using Java and MySQL.",
      technologies: ["Java", "MySQL", "JDBC"],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {project.technologies && (
              <ul className="project-tech-list">
                {project.technologies.map((tech, i) => (
                  <li key={i} className="project-tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            )}
            <a
              href={project.link}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
