import React, { useState, useEffect } from "react";
import "../components/style/services.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineClose } from "react-icons/ai"; // Import Close Icon

import Web from '../images/web-image.jpg';
import App from '../images/app-image.jpg';

const services = [
  {
    title: "Custom Website Development",
    description: "Building unique, fully customized websites tailored to your needs.",
    extraDescription: "No templates, just clean code and responsive design.",
    image: Web,
  },
  {
    title: "Responsive Design",
    description: "Creating websites and apps that look great on any device.",
    extraDescription: "Mobile-friendly, tablet-compatible, and desktop-optimized.",
    image: Web,
  },
  {
    title: "Frontend Development",
    description: "Expert development using React.js, Next.js, and modern UI libraries.",
    extraDescription: "Fast, scalable frontends with clean user interfaces.",
    image: Web,
  },
  {
    title: "Backend Development",
    description: "Building secure and scalable backend systems with Node.js, Express, and more.",
    extraDescription: "Database integration with MongoDB, Firebase, and others.",
    image: Web,
  },
  {
    title: "Mobile App Development",
    description: "Creating high-performance mobile apps for both Android and iOS.",
    extraDescription: "Using React Native and Flutter for cross-platform development.",
    image: App,
  },
  {
    title: "E-Commerce Solutions",
    description: "Building feature-rich e-commerce websites and apps.",
    extraDescription: "Product listings, cart, secure payments, and order tracking.",
    image: Web,
  },
  {
    title: "UI/UX Design for Apps",
    description: "Crafting intuitive and beautiful mobile app designs.",
    extraDescription: "Using tools like Figma and Adobe XD for pixel-perfect designs.",
    image: App,
  },
  {
    title: "API Integration for Apps & Websites",
    description: "Connecting your app or website to external services.",
    extraDescription: "Payment gateways, maps, weather data, and more.",
    image: Web,
  },
  {
    title: "App Deployment & Maintenance",
    description: "Deploying apps to Google Play and Apple App Store.",
    extraDescription: "Ongoing maintenance, updates, and bug fixes after launch.",
    image: App,
  },
  {
    title: "SEO Optimization",
    description: "Making sure your website or app ranks well on search engines.",
    extraDescription: "Improved visibility with SEO-friendly design and content.",
    image: Web,
  },
];


export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  useEffect(() => {
    if (selectedService) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [selectedService]);

  return (
    <div id="services" className="services-wrapper">
      <div className={`services-container ${selectedService ? "blur-active" : ""}`}>
        <h1 className="services-title">My Services</h1>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="service-card" onClick={() => setSelectedService(service)}>
              <img src={service.image} alt={service.title} className="service-image" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </Slider>
      </div>

      {selectedService && (
        <div className="service-details">
          <AiOutlineClose className="close-icon" onClick={() => setSelectedService(null)} />
          <h2>{selectedService.title}</h2>
          <p>{selectedService.description}</p>
          <p className="extra-description">{selectedService.extraDescription}</p>
          <img src={selectedService.image} alt={selectedService.title} className="service-detail-image" />
        </div>
      )}
    </div>
  );
}
