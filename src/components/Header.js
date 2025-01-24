import React from "react";
import "../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img
          src={require("../assets/logo.png")} // Path to your logo/picture
          alt="Logo"
          className="header-logo"
        />
        {/* Navigation */}
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
