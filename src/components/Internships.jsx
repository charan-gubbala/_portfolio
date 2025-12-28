import React from "react";

const internships = [
  {
    company: "Gamyam Info Tech LLP",
    role: "Associate Software Engineer Intern",
    duration: "Oct 2025 – Present",
    period: "On-Site",
    
    achievements: [
      "Working with full stack applications and build web applications using reactjs and django",
      "Implementing web scraping and data extraction for real-time data processing"
    ],
    technologies: ["Python", "Django", "react.js", "Data Extraction"]
  },
  {
    company: "Datapoint IT & Hardware Tech Pvt. Ltd.",
    role: "Python with Deep Learning Intern",
    duration: "Dec 2024 – Apr 2025",
    period: "Remote",
    // description: "Applied Python and Django for machine learning model development and integration.",
    achievements: [
      "Applied Python and Django for machine learning model development",
      "Built and integrated AI models into web interfaces for testing and deployment"
    ],
    technologies: ["Python", "Django", "Machine Learning", "API", "Deep Learning"]
  },
  {
    company: "Triaright Solutions",
    role: "Python Intern",
    duration: "Apr 23 - Jun 23",
    period: "Remote",
    // description: "Developed Python-based backend modules with data handling and API integration.",
    achievements: [
      "Developed Python-based backend modules with data handling and API integration",
      "Worked through full software development lifecycle (SDLC) and team collaboration"
    ],
    technologies: ["Python", "Backend Development", "API Integration", "SDLC"]
  }
];

export default function Internships() {
  return (
    <section id="internships" className="card">
      <div className="internships-header">
        <div className="internships-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-6-2h-4v2h4V4zm6 16H4V8h16v12z"/>
          </svg>
        </div>
        <h2>Professional Experience</h2>
      </div>
      
      <div className="internships-timeline">
        {internships.map((internship, index) => (
          <div key={index} className="internship-timeline-item">
            <div className="timeline-marker"></div>
            <div className="internship-content">
              <h3 className="internship-company">{internship.company}</h3>
              <div className="internship-duration">{internship.duration} | {internship.period}</div>
              <div className="internship-role">{internship.role}</div>
              {internship.description && (
                <div className="internship-description">{internship.description}</div>
              )}
              {internship.achievements && internship.achievements.length > 0 && (
                <div className="internship-achievements">
                  {internship.achievements.map((achievement, idx) => (
                    <div key={idx} className="achievement-item">
                      <span className="achievement-bullet">•</span>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              )}
              {internship.technologies && internship.technologies.length > 0 && (
                <div className="internship-technologies">
                  {internship.technologies.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
