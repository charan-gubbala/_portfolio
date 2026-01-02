import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleResumeClick = (e) => {
    e.preventDefault();
    const resumeUrl = `${import.meta.env.BASE_URL}charan_res.pdf`;
    
    // Open in new window
    window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    
    // Trigger download
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Charan_Gubbala_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Close menu if open
    setIsMenuOpen(false);
  };

  const handleLinkClick = (e) => {
    const href = e.target.getAttribute('href');
    
    // Only handle internal anchor links
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navHeight = 64; // --nav-height value
        const offset = navHeight + 20; // Additional spacing
        
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav className="nav">
      <div className="nav-inner container">
        <div className="brand">Gubbala Charan</div>
        
        {/* Desktop Navigation */}
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#internships">Internships</a>
          <a href="#contact">Contact</a>
          <a className="btn" href={`${import.meta.env.BASE_URL}charan_res.pdf`} onClick={handleResumeClick} target="_blank" rel="noreferrer">Resume</a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu open">
            <div className="mobile-menu-content">
              <a href="#about" onClick={handleLinkClick}>About</a>
              <a href="#skills" onClick={handleLinkClick}>Skills</a>
              <a href="#projects" onClick={handleLinkClick}>Projects</a>
              <a href="#internships" onClick={handleLinkClick}>Internships</a>
              <a href="#contact" onClick={handleLinkClick}>Contact</a>
              <a className="btn" href={`${import.meta.env.BASE_URL}charan_res.pdf`} onClick={handleResumeClick} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
