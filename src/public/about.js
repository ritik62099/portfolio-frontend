import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../components/style/about.css"; // Import the CSS file

import Ritik from '../images/ritik.jpg'

export default function About() {
  const [ setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll and Navigate function
  const handleScroll = (id, path) => {
    if (location.pathname === path) {
      // Same page scroll
      scrollToSection(id);
    } else {
      // Navigate to another page and then scroll
      navigate(path);
      setTimeout(() => {
        scrollToSection(id);
      }, 500); // Delay for smooth transition
    }
    setIsOpen(false); // Close mobile menu
  };

  // Scroll Helper Function
    const scrollToSection = (id) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    // Scroll to section after page refresh
    useEffect(() => {
      const hash = location.hash.replace("#", "");
      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 500);
      }
    }, [location]);
  
  return (
    <>
    <div id="about" className="services-wrapper">
    <div className="about-container">
      {/* Left Side - Image */}
      <div className="about-image">
        <img src={Ritik} alt="Ritik Kumar" />
      </div>

      {/* Right Side - Content */}
      <div className="about-content">
        <h1>About Me</h1>
        <h2>Hey, I'm <span className="highlight">Ritik Kumar</span></h2>
        <p>
          I am a passionate <span className="highlight">Web & App Developer</span> 
          with expertise in front-end and back-end technologies.
          I create modern, high-performance digital solutions that enhance user experiences.
        </p>
        <p>
          With a strong foundation in frameworks like <span className="highlight">React, Next.js, and Node.js</span>, 
          I help businesses bring their ideas to life through scalable and efficient solutions.
        </p>
        
        <button className="about-btn" onClick={() => handleScroll("contact", "/contact")}>Contact Me</button>
      </div>
    </div>
    </div>
    
    </>
  );
}
