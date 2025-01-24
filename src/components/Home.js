import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="home-container">
        {/* Profile Picture */}
        <img
          src={require("../assets/profile.jpg")} // Path to your picture
          alt="Your Name"
          className="profile-picture"
        />
        <h1 className="home-title">
          Hi, I'm <span className="highlight">Ajai Kannan M</span>
        </h1>
        <p className="home-subtitle">Aspiring AI & Data Science Engineer</p>
        <p className="home-description">
          Passionate about solving real-world problems through AI and web development.
          Let's build something great together!
        </p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Home;
