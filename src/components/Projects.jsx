import React from "react";

const projects = [
  {
    title: ' Text-to-Image Generator',
    desc: 'Advanced web application using Stable Diffusion models for generating high-quality images from text prompts. Features include batch processing, style transfer, and real-time preview.',
    tech: ['Python', 'Django', 'Stable Diffusion', 'GAN', 'CLIP'],
    features: ['Real-time image generation', 'Style transfer capabilities', 'Converting text-to-image', 'User authentication'],
    github: 'https://github.com/charan-gubbala/text-image.git',
    demo: '#'
  },
  {
    title: ' E-Commerce Web Application',
    desc: 'Complete e-commerce solution with modern UI, secure payment integration, and admin dashboard. Implemented user authentication, product catalog, cart, and order management with CRUD operations.',
    tech: ['React', 'FastAPI', 'MySQL',],
    features: ['Secure payment processing', 'CRUD Operations', 'Admin dashboard', 'Product catalog'],
    github: 'https://github.com/charan-gubbala/E-commerce.git',
    demo: '#'
  },
  {
    title: 'Hashtag Prediction',
    desc: 'Machine learning-powered system that analyzes social media content and suggests relevant hashtags using TF-IDF vectorization and k-NN algorithms.',
    tech: ['Python', 'KNN', 'TF-IDF', 'Flask',],
    features: ['Content analysis', 'Hashtag suggestions', 'Trending topics', 'API integration'],
    github: 'https://github.com/charan-gubbala/hash-tag-prediction.git',
    demo: '#'
  },

];

export default function Projects() {
  return (
    <section id="projects" className="card">
      <h2>Featured Projects</h2>
      <p className="text-text-secondary mb-8">
        A showcase of my recent work spanning full-stack development, machine learning, and modern web applications
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            
            <div className="tech-stack">
              {project.tech.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            
            <div className="project-features">
              <h4 className="text-accent-primary text-base mb-2">Key Features:</h4>
              <ul className="text-text-secondary text-[0.9rem] pl-5">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="project-links">
              <a href={project.github} className="btn-primary" target="_blank" rel="noopener noreferrer">
                <span>📁</span> View Code
              </a>
              {/* <a href={project.demo} className="btn-secondary" onClick={e => e.preventDefault()}>
                <span>🚀</span> Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}