import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">Gubbala Charan</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={`${import.meta.env.BASE_URL}resume.pdf`} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </nav>
  );
}
