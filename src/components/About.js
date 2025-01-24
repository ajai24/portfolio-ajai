import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Ajai Kannan M, a passionate engineering student specializing in
            AI & Data Science. I'm constantly exploring new technologies and
            working on exciting projects that blend my interests in AI, Machine
            Learning, and Web Development. With an eye for problem-solving, I
            aim to develop innovative solutions that have a positive impact on the
            world.
          </p>
        </div>

        <div className="skills">
          <h3>My Skills</h3>
          <div className="skills-container">
            <div className="skill-card">
              <h4>Programming Languages</h4>
              <div className="skill-list">
              <span>C</span>
              <span>C++</span>
              <span>Python</span>
               <span>Java</span>
               <span>JavaScript</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Frameworks & Libraries</h4>
              <div className="skill-list">
                <span>React.js</span>
                <span>Node.js</span>
                <span>Pandas</span>
                <span>NumPy</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Databases</h4>
              <div className="skill-list">
                <span>MySQL</span>
                <span>MongoDB</span>
              </div>
            </div>
            <div className="skill-card">
              <h4>Other Skills</h4>
              <div className="skill-list">
                <span>Git & GitHub</span>
                <span>Machine Learning</span>
                <span>Problem Solving</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
