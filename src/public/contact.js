import React, { useState } from "react";
import "../components/style/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({ 
    name: "", 
    email: "", 
    message: "" 
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("https://portfolio-frontend-mey4.vercel.app/api/contact", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "same-origin" // Changed from 'include' for security
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }
      
      setSuccess("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("API Error:", error);
      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Contact Me</h1>
        <p>Have a project in mind? Let's talk!</p>
        
        {success && <div className="alert success">{success}</div>}
        {error && <div className="alert error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
          ></textarea>
          <button 
            type="submit" 
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}