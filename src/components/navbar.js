// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import "./style/navbar.css";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//    // Scroll to section function
//    const handleScroll = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // Close mobile menu after clicking
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="container">
//         {/* Logo */}
//         <div className="logo">Logo</div>

//         {/* Desktop Menu */}
//         <ul className={`nav-links ${isOpen ? "open" : ""}`}>
//           <li><a href="#services">Services</a></li>
//           <li><a href="#about">About Me</a></li>
//           <li><a href="#portfolio">Portfolio</a></li>
//           <li><a href="#testimonials">Testimonials</a></li>
//         </ul>

//         {/* Contact Button */}
//         <div className="contact-btn">
//           <button className="btn">Contact</button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="mobile-menu">
//           <ul>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#about">About Me</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#testimonials">Testimonials</a></li>
//             <li><button className="btn">Contact</button></li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// }


import { useState, useEffect } from "react";
import {  useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./style/navbar.css";

import Main from "../public/mainpage";
import Services from "../public/services";
import About from "../public/about";
import Testimonials from "../public/testmonials";
import Contact from "../public/contact";
import Portfolio from "../public/portfolio";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo" onClick={() => handleScroll("/", "/")}>
          Ritik kumar
        </div>

        {/* Desktop Menu */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li onClick={() => handleScroll("services", "/services")}>Services</li>
          <li onClick={() => handleScroll("about", "/about")}>About Me</li>
          <li onClick={() => handleScroll("portfolio", "/portfolio")}>Portfolio</li>
          <li onClick={() => handleScroll("testimonials", "/testimonials")}>Testimonials</li>
        </ul>
        <div className="contact-btn">
          <button className="btn" onClick={() => handleScroll("contact", "/contact")}>Contact</button>
          </div>
        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu">
          <ul>
            <li onClick={() => handleScroll("services", "/services")}>Services</li>
            <li onClick={() => handleScroll("about", "/about")}>About Me</li>
            <li onClick={() => handleScroll("portfolio", "/portfolio")}>Portfolio</li>
            <li onClick={() => handleScroll("testimonials", "/testimonials")}>Testimonials</li>
            <li onClick={() => handleScroll("contact", "/contact")}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
    <div id="/" className="section"><Main /></div>
      <div id="work" className="section"><Services /></div>
      <div id="about" className="about"><About /></div>
      <div id="portfolio" className="about"><Portfolio /></div>
      <div id="testimonials" className="testimonials"><Testimonials /></div>
      <div id="contact" className="testimonials"><Contact /></div>
    </>
  );
}
