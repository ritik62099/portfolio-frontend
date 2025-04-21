import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import "../components/style/portfolio.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Web from '../images/web-image.jpg';

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-featured e-commerce platform with secure payment integration.",
    details: "Built using React, Node.js, and MongoDB. Includes product listings, cart, and admin panel.",
    image: Web,
    link: "https://your-ecommerce-site.com",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my work and skills.",
    details: "Created using React and styled-components for a modern, responsive UI.",
    image: Web,
    link: "https://your-portfolio-site.com",
  },
  {
    title: "Social Media App",
    description: "A social networking app with user authentication and messaging.",
    details: "Developed using React Native and Firebase for real-time chat and user posts.",
    image: Web,
    link: "https://your-social-media-app.com",
  },
  {
    title: "Restaurant App",
    description: "An online food ordering system with table reservations.",
    details: "Built with Flutter and Firebase, including real-time order tracking.",
    image: Web,
    link: "https://your-restaurant-app.com",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedProject]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div id="portfolio" className="services-wrapper">
      <div className={`portfolio-container ${selectedProject ? "blur-active" : ""}`}>
        <h1 className="portfolio-title">My Projects</h1>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card" onClick={() => setSelectedProject(project)}>
              <img src={project.image} alt={project.title} className="portfolio-image" />
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      {selectedProject && (
        <div className="project-details">
          <AiOutlineClose className="close-icon" onClick={() => setSelectedProject(null)} />
          <h2>{selectedProject.title}</h2>
          <p>{selectedProject.details}</p>
          <img src={selectedProject.image} alt={selectedProject.title} className="project-detail-image" />
          <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="visit-btn">
            Visit Project
          </a>
        </div>
      )}
    </div>
  );
}
