import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/Internships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import "./styles/styles.css"; // Import global styles

export default function App() {
  return (
   <div className="gap-[5rem]"><>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Layout with Sticky Profile */}
      <div className="main-layout">
        {/* Sticky Profile Sidebar - Left Card */}
        <Profile />

        {/* Main Website Sections - Right Card Container */}
        <main className="main-content">
          <div className="sections-container">
            {/* Hero Section Card */}
            <Hero />

            {/* About Section Card */}
            <About />

            {/* Skills Section Card */}
            <Skills />

            {/* Projects Section Card */}
            <Projects />

            {/* Internships Section Card */}
            <Internships />

            {/* Contact Section Card */}
            <Contact />
          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
    </div>
  );
}
