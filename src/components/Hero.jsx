import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="card hero-card">
      <div className="hero-inner w-full">
        {/* MAIN CONTENT */}
        <div className="hero-main w-full">
          <h1>
            Hi, I'm <span className="accent">Gubbala Charan</span>
          </h1>
          <p className="lead mb-4">
            Associate Software Engineer Intern | MCA Graduate
          </p>
          <p className="text-[1.1rem] mb-8 max-w-[600px]">
            I specialize in building modern web applications using React.js and Django, 
            and developing innovative AI solutions including text-to-image generation and 
            machine learning models. Passionate about creating technology that makes a real impact.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>🚀</span> View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
