import React, { useState } from "react";
import "./Testimonials.css"; // Use your existing CSS file

const testimonialsData = [
  {
    name: "John Doe",
    role: "Homeowner",
    feedback:
      "The sofa I bought from this store has completely transformed my living room! It’s both comfortable and stylish.",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Sarah Smith",
    role: "Interior Designer",
    feedback:
      "I highly recommend this furniture for my clients. The quality is top-notch, and the design options are endless!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Alex Johnson",
    role: "Office Manager",
    feedback:
      "We’ve outfitted our entire office with desks and chairs from this shop. Perfect blend of ergonomics and aesthetics!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emma Brown",
    role: "Shop Owner",
    feedback:
      "The display units I purchased work perfectly in my store. The sleek design enhances the presentation of my products.",
    image: "https://via.placeholder.com/100",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handlers for navigation
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <div className="testimonials">
      <h3 className="testimonials-heading">What Our Customers Say</h3>
      <div className="testimonial-wrapper">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>

        {/* Single Testimonial */}
        <div className="testimonial-item">
          <img
            className="testimonial-image"
            src={currentTestimonial.image}
            alt={currentTestimonial.name}
          />
          <div className="testimonial-content">
            <p className="testimonial-feedback">"{currentTestimonial.feedback}"</p>
            <p className="testimonial-name">- {currentTestimonial.name}</p>
            <p className="testimonial-role">{currentTestimonial.role}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
