import React from "react";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ['Java', 'Python', 'JavaScript',]
  },
  {
    title: "Frontend Development",
    skills: [ 'HTML5', 'CSS3','React.js',]
  },
  {
    title: "Backend Development",
    skills: ['FastAPI', 'Django', ]
  },
  {
    title: "Database & Tools",
    skills: ['MySQL', 'PostgreSQL', 'vs code', 'Git',]
  },
 
];

export default function Skills() {
  return (
    <section id="skills" className="card">
      <h2>Technical Skills</h2>
      {/* Category cards in 4-column grid */}
      <div className="skill-grid">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">
              {category.title}
            </h3>
            <ul className="skill-list">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="skill-item">
                  <span className="skill-bullet">•</span>
                  <span className="skill-name">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
