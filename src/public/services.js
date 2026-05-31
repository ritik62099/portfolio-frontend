import React, { useState } from "react";
import "../components/style/services.css";
import { AiOutlineClose } from "react-icons/ai";

import WebsiteImg from "../images/CustomWebsite.jpg";
import MobileAppImg from "../images/app-image.jpg";
import VideoEditingImg from "../images/Responsive.jpg";
import AIAutomationImg from "../images/APIIntegration.jpg";

const services = [
  {
    title: "Website Development",
    description:
      "Modern and responsive websites designed to grow your business.",
    extraDescription:
      "Portfolio websites, business websites, landing pages, e-commerce stores, and custom web applications built with modern technologies.",
    image: WebsiteImg,
  },

  {
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications with modern UI.",
    extraDescription:
      "Fast and scalable mobile applications built using React Native and modern development practices.",
    image: MobileAppImg,
  },

  {
    title: "Video Editing",
    description:
      "Professional editing for YouTube, Reels, Shorts, and social media.",
    extraDescription:
      "Clean cuts, transitions, motion graphics, subtitles, color correction, and content optimization.",
    image: VideoEditingImg,
  },

  {
    title: "AI Automation",
    description:
      "Coming Soon - AI-powered business automation solutions.",
    extraDescription:
      "Chatbots, lead generation systems, CRM automation, email automation, and AI agents.",
    image: AIAutomationImg,
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="services-section">
      <div className="services-heading">
        <span>WHAT I OFFER</span>

        <h1>Digital Solutions For Modern Businesses</h1>

        <p>
          I help businesses and creators with websites, mobile
          applications, video editing, and future-ready AI solutions.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            onClick={() => setSelectedService(service)}
          >
            <img src={service.image} alt={service.title} />

            <h2>{service.title}</h2>

            <p>{service.description}</p>

            {service.title === "AI Automation" && (
              <span className="coming-soon">
                Coming Soon
              </span>
            )}

            <button>Learn More</button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="service-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <AiOutlineClose
              className="close-btn"
              onClick={() => setSelectedService(null)}
            />

            <img
              src={selectedService.image}
              alt={selectedService.title}
            />

            <h2>{selectedService.title}</h2>

            <p>{selectedService.extraDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}