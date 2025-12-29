import React from "react";

export default function Profile() {
  return (
    <div className="sticky-profile">
      <div className="profile-card">
        {/* Avatar Image */}
        <div className="avatar">
          <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Gubbala Charan" />
        </div>

        {/* Profile Info */}
        <div className="profile-info">
          <h3>Gubbala Charan</h3>
          <p>Associate Software Engineer Intern | MCA Graduate</p>
          <p>React.js • Django • Python • ML</p>
          <p className="small">📍Narsapur, West Godavari,Andhra Pradesh,India</p>
          
          {/* Social Links */}
          <div className="flex gap-5 mt-5 justify-center">
            <a href="mailto:nameischaran4@gmail.com" className="social-icon bg-white text-[#333] w-10 h-10 rounded-full flex items-center justify-center text-xl no-underline transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] border-2 border-[#333]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/charan-gubbala-417a30259" target="_blank" rel="noreferrer" className="social-icon bg-white text-[#333] w-10 h-10 rounded-full flex items-center justify-center text-xl no-underline transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] border-2 border-[#333]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/charan-gubbala" target="_blank" rel="noreferrer" className="social-icon bg-white text-[#333] w-10 h-10 rounded-full flex items-center justify-center text-xl no-underline transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.15)] border-2 border-[#333]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-col gap-2 mt-8 text-center">
            <div>
              <div className="text-[1.8rem] font-bold text-accent-primary leading-none">6+</div>
              <div className="text-[0.85rem] text-text-secondary">Projects</div>
            </div>
            <div>
              <div className="text-[1.8rem] font-bold text-accent-secondary leading-none">3</div>
              <div className="text-[0.85rem] text-text-secondary">Internships</div>
            </div>
            <div>
              <div className="text-[1.8rem] font-bold text-accent-tertiary leading-none">15+</div>
              <div className="text-[0.85rem] text-text-secondary">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
