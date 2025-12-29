import React, { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    // Handle smooth scrolling with proper offset for sections
    const handleNavClick = (e) => {
      const href = e.target.getAttribute('href');
      
      // Only handle internal anchor links
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navHeight = 64; // --nav-height value
          const offset = navHeight + 32; // Additional spacing for visibility
          
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // Attach click handlers to all nav links
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleNavClick);
      });
    };
  }, []);

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
