import React, { useState } from "react";
import "../components/style/testimonial.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Amazing work! The website is fast and user-friendly.",
    image: "/images/client1.jpg",
    rating: 5,
    video: "/videos/client1.mp4",
  },
  {
    name: "Sarah Smith",
    feedback: "Highly professional and delivered the project on time.",
    image: "/images/client2.jpg",
    rating: 4,
    video: "/videos/client2.mp4",
  },
  {
    name: "Michael Brown",
    feedback: "The app design is outstanding. I love the UI/UX!",
    image: "/images/client3.jpg",
    rating: 5,
    video: "/videos/client3.mp4",
  },
];

// Function to generate star ratings
const renderStars = (rating) => {
  return "⭐".repeat(rating) + "☆".repeat(5 - rating);
};

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div id="testimonials" className="services-wrapper">
    <div className="testimonials-container">
      <h1 className="testimonials-title">What My Clients Say</h1>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card"
            onClick={() => setSelectedVideo(testimonial.video)}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <p className="testimonial-rating">{renderStars(testimonial.rating)}</p>
            <h3 className="testimonial-name">- {testimonial.name}</h3>
          </div>
        ))}
      </Slider>

      {selectedVideo && (
        <div className="video-modal" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <video controls autoPlay className="testimonial-video">
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>
            Close
          </button>
        </div>
      )}
    </div>
    </div>
  );
}
