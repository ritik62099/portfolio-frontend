import React from "react";
import "../components/style/about.css";
import Ritik from "../images/ritik.jpg";

export default function About() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="about" className="about-section">

      <div className="about-image">
        <img src={Ritik} alt="Ritik Kumar" />
      </div>

      <div className="about-content">

        <span className="about-tag">
          ABOUT ME
        </span>

        <h1>
          Building Digital Experiences
          That Make An Impact
        </h1>

        <p>
          Hi, I'm <strong>Ritik Kumar</strong>, a passionate
          Full Stack Developer focused on creating modern websites,
          mobile applications, and digital experiences that are fast,
          scalable, and user-friendly.
        </p>

        <p>
          I work with technologies like React, Node.js, Express,
          MongoDB, and React Native to transform ideas into real-world
          products that help businesses grow online.
        </p>

        <div className="about-stats">

          <div className="stat-box">
            <h2>10+</h2>
            <span>Projects</span>
          </div>

          <div className="stat-box">
            <h2>100%</h2>
            <span>Dedication</span>
          </div>

          <div className="stat-box">
            <h2>24/7</h2>
            <span>Support</span>
          </div>

        </div>

        <button
          className="about-btn"
          onClick={scrollToContact}
        >
          Let's Work Together
        </button>

      </div>
    </section>
  );
}