import React from "react";
import "../components/style/main.css";
import Ritik from "../images/ritik2.png";

export default function Main() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag">
          👋 Welcome to my portfolio
        </span>

        <h1>
          Hi, I'm <span>Ritik Kumar</span>
        </h1>

        <h2>
          Full Stack Developer &
          <br />
          Creative Problem Solver
        </h2>

        <p>
          I build modern, responsive and user-friendly web
          applications with clean code and great user experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            View Projects
          </button>

          <a
            href="/resume.pdf"
            download
            className="secondary-btn"
          >
            Download CV
          </a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/ritik62099">
            <i className="fab fa-github"></i>
          </a>

          <a href="https://www.linkedin.com/in/ritik-kumar-a2313b252/">
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a href="https://www.instagram.com/pixel.forgeweb?utm_source=qr&igsh=MXRoNHdycDQzdmlnbA==">
            <i className="fab fa-instagram"></i>
          </a>

          <a href="#">
            <i className="fab fa-x-twitter"></i>
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-wrapper">
          <img src={Ritik} alt="Ritik Kumar" />
        </div>
      </div>
    </section>
  );
}