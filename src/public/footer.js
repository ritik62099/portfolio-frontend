import React from "react";
import "../components/style/footer.css";

export default function Footer() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openWhatsApp = () => {
    const phone = "916209968385"; // apna number
    const message = "Hi Ritik, I want to discuss a project.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-box">
          <h2>Ritik Kumar</h2>

          <span className="badge">
            🚀 Available for Freelance Work
          </span>

          <p>
            Full Stack Developer building modern websites,
            mobile apps & digital solutions.
          </p>

          <button className="whatsapp-btn" onClick={openWhatsApp}>
            Chat on WhatsApp
          </button>
        </div>

        {/* Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>

          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("services")}>Services</li>
            <li onClick={() => scrollToSection("portfolio")}>Portfolio</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h3>Contact</h3>

          <p>
            📧{" "}
            <a href="mailto:ritik@example.com">
              ritik.webdevlper@gmail.com
            </a>
          </p>

          <div className="socials">
            <a href="https://github.com/ritik62099" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/ritik-kumar-a2313b252/" target="_blank">LinkedIn</a>
            <a href="https://www.instagram.com/pixel.forgeweb?utm_source=qr&igsh=MXRoNHdycDQzdmlnbA==" target="_blank">Instagram</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ritik Kumar • Built with React ⚡
        </p>
      </div>

    </footer>
  );
}