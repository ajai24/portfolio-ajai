import React from "react";
import "../styles/Navbar.css"; // Make sure this path matches where your CSS file is located

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
