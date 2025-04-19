import React, { useState } from "react";
import "../components/style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      // const response = await fetch("http://localhost:5000/api/contact", {
        const response = await fetch("https://portfolio-frontend-mey4.vercel.app//api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Message Sent Successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess("Error: " + data.error);
      }
    } catch (error) {
      setSuccess("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>Have a project in mind? Let's talk!</p>
        {success && <p className="message">{success}</p>}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
