import React from "react";

const certifications = [
  {
    label: "Python 3.4.3 Training",
    value: "Spoken Tutorial"
  },
  {
    label: "Data Engineering",
    value: "AWS Academy, Eduskills"
  },
  {
    label: "Python Certification",
    value: "DataPoint IT & Hardware Pvt. Ltd"
  }
];

const educationDetails = [
  {
    degree: "MCA (Master of Computer Applications)",
    college: "Swarnandhra College of Engineering and Technology",
    university: "Jawaharlal Nehru Technological University",
    period: "2023-2025",
    grade: "8.37/10",
    location: "Narsapur, West Godavari, Andhra Pradesh"
  },
  {
    degree: "B.Sc (Computer Science)",
    college: "Sri Y.N Degree College",
    university: "Adikavi Nannaya University",
    period: "2020-2023",
    grade: "8.44/10",
    location: "Narsapur, West Godavari, Andhra Pradesh"
  }
];


export default function About() {
  return (
    <section id="about" className="card">
      <h2>About Me</h2>
      
      {/* About Paragraph Card - Alone */}
      <div className="about-paragraph-card mb-8">
        <h3 className="about-category-title mb-4">About</h3>
        <p className="text-[1.05rem] leading-[1.8]">
        I am an MCA graduate and aspiring Software Developer with hands-on experience in Python, Django, React.js, and full-stack web development. I am currently working as an Associate Software Engineer Intern, where I contribute to the development of Python and Django-based applications, RESTful APIs, and automation workflows.

I have practical exposure to AI and machine learning projects, including social media hashtag prediction and text-to-image generation using Stable Diffusion and GANs. I am actively seeking entry-level software development positions or internship opportunities that will allow me to apply my skills, grow professionally, and add value to a technology-driven organization.
        </p>
      </div>
      
      {/* Two Columns Layout - Education & Contact (Left), Certifications & Connect (Right) */}
      <div className="about-two-columns-grid">
        {/* Left Column */}
        <div className="about-column">
          {/* Education Section */}
          <div className="about-section-content">
            <div className="about-category-header">
              <div className="about-item-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9M5 13.18v3.82L12 19l7-2v-3.82L12 17l-7-3.82z"/>
                </svg>
              </div>
              <h3 className="about-category-title">Education</h3>
            </div>
            <div className="education-items-container">
              {educationDetails.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-item-header">
                    <span className="education-degree">{edu.degree}</span>
                    <span className="education-grade">{edu.grade}</span>
                  </div>
                  <div className="education-item-details">
                    <div className="education-college">{edu.college}</div>
                    <div className="education-university">{edu.university}</div>
                    <div className="education-meta">
                      <span className="education-period">{edu.period}</span>
                      <span className="education-separator">•</span>
                      <span className="education-location">📍 {edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="about-column">
          {/* Certifications Section */}
          <div className="about-section-content">
            <div className="about-category-header">
              <div className="about-item-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="about-category-title">Certifications</h3>
            </div>
            <div className="certifications-items-container">
              {certifications.map((cert, itemIndex) => (
                <div key={itemIndex} className="certification-item">
                  <div className="about-item-icon-wrapper-small">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div className="about-item-content">
                    <span className="about-item-value">{cert.label} | {cert.value}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Contact Section */}
            <div className="about-contact-section">
              <div className="about-category-header">
                <div className="about-item-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="about-category-title">Contact</h3>
              </div>
              {/* Contact Icons - Single Line */}
              <div className="about-contact-icons-horizontal">
                <a href="tel:+919505823739" className="about-contact-icon-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  +91 9505823739
                </a>
                <a href="https://www.linkedin.com/in/charan-gubbala-417a30259" target="_blank" rel="noreferrer" className="about-contact-icon-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="https://github.com/charan-gubbala" target="_blank" rel="noreferrer" className="about-contact-icon-link">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
              </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}
