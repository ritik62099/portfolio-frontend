import React from "react";
import "../components/style/footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Ritik Kumar</h2>
          <p>Designing and developing modern websites & applications.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ritik-kumar-a2313b252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/ritik62099" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://x.com/RitikKumar88712?t=yVujw3tTyV-NtM2Tlv3BLw&s=09" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/aryen841207?igsh=MXRpcHhqdXU2b3YxeA==" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ritik Kumar. All rights reserved.</p>
      </div>
    </footer>
  );
}
