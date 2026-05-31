import React from "react";
import "../components/style/contact.css";

export default function Contact() {

  const openWhatsApp = () => {
    const phoneNumber = "916209968385"; // Apna number
    const message =
      "Hi Ritik, I visited your portfolio and would like to discuss a project.";

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="contact-container">
      <div className="contact-content">
        <h1>Let's Work Together</h1>

        <p>
          Have a website, app, or video editing project in mind?
          Let's discuss it on WhatsApp.
        </p>

        <button
          className="whatsapp-btn"
          onClick={openWhatsApp}
        >
          Chat on WhatsApp
        </button>
      </div>
    </section>
  );
}