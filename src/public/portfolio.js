import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../components/style/portfolio.css";

import PortfolioImg from "../images/personalportfolio.png";
import EcommerceImg from "../images/Exam.png";
import AppImg from "../images/school.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "A modern responsive portfolio built using React.",
    details:
      "Designed and developed to showcase my skills, services, and projects with a clean UI and responsive experience.",
    image: PortfolioImg,
    tech: "React • CSS • JavaScript",
    github: "#",
    live: "#",
  },

  {
    title: "Exam Management System",
    description:
      "A web application for managing exams and student results.",
    details:
      "Built as a learning project using modern frontend and backend technologies.",
    image: EcommerceImg,
    tech: "React • Node.js • MongoDB",
    github: "#",
    live: "#",
  },

  {
    title: "School Management System",
    description:
      "A web application for managing school operations and student records.",
    details:
      "Built as a learning project using modern frontend and backend technologies.",
    image: AppImg,
    tech: "React • Node.js • MongoDB",
    github: "#",
    live: "#",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">

      <div className="portfolio-header">
        <span>MY WORK</span>

        <h1>Featured Projects</h1>

        <p>
          Some projects I have built while learning and improving
          my development skills.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <span>{project.tech}</span>

              <button>View Details</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="close-btn"
              onClick={() => setSelectedProject(null)}
            />

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.details}</p>

            <div className="project-buttons">
              <a href={selectedProject.github}>
                GitHub
              </a>

              <a href={selectedProject.live}>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}