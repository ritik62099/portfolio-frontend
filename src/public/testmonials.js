import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "../components/style/testimonial.css";

import Client1 from "../images/MobileApp.jpg";
import Client2 from "../images/personalportfolio.png";
import Client3 from "../images/RestaurantApp.jpg";

const testimonials = [
  {
    name: "Client 1",
    project: "Business Website",
    rating: 5,
    feedback:
      "Excellent communication and delivered the website exactly as required.",
    screenshot: Client1,
  },

  {
    name: "Client 2",
    project: "Portfolio Website",
    rating: 5,
    feedback:
      "Professional work and very responsive throughout the project.",
    screenshot: Client2,
  },

  {
    name: "Client 3",
    project: "Landing Page",
    rating: 5,
    feedback:
      "Fast delivery and clean design. Highly recommended.",
    screenshot: Client3,
  },
];

export default function Testimonials() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="testimonials" className="testimonial-section">

      <div className="testimonial-header">
        <span>CLIENT FEEDBACK</span>

        <h1>What My Clients Say</h1>

        <p>
          Real feedback from clients I've worked with on websites
          and digital projects.
        </p>
      </div>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img
              src={item.screenshot}
              alt={item.name}
              onClick={() => setSelectedImage(item.screenshot)}
            />

            <div className="testimonial-content">
              <h3>{item.name}</h3>

              <span>{item.project}</span>

              <div className="rating">
                {"⭐".repeat(item.rating)}
              </div>

              <p>{item.feedback}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            />

            <img
              src={selectedImage}
              alt="Client Feedback"
            />
          </div>
        </div>
      )}
    </section>
  );
}