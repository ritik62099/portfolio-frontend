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
    title: "Web Development",
    description: "Creating modern and responsive websites.",
    extraDescription:
      "I specialize in building fast, SEO-friendly, and scalable websites using the latest technologies like React, Next.js, and more.",
    image: Web,
  },
  {
    title: "App Development",
    description: "Building high-performance mobile applications.",
    extraDescription:
      "From Android to iOS, I develop apps with intuitive UI and great performance using React Native and Flutter.",
    image: App,
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
