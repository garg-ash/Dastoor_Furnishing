import React from 'react';
import './Testimonials.css'; // You will need to create and style this file as per the design.

const testimonialsData = [
  {
    name: 'John Doe',
    role: 'Homeowner',
    feedback: 'The sofa I bought from this store has completely transformed my living room! It’s both comfortable and stylish.',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Sarah Smith',
    role: 'Interior Designer',
    feedback: 'I highly recommend this furniture for my clients. The quality is top-notch, and the design options are endless!',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Alex Johnson',
    role: 'Office Manager',
    feedback: 'We’ve outfitted our entire office with desks and chairs from this shop. Perfect blend of ergonomics and aesthetics!',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  },
  {
    name: 'Emma Brown',
    role: 'Shop Owner',
    feedback: 'The display units I purchased work perfectly in my store. The sleek design enhances the presentation of my products.',
    image: 'https://via.placeholder.com/100', // Replace with actual image URL
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3 className="testimonials-heading">What Our Customers Say</h3>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-item" key={index}>
            <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
            <div className="testimonial-content">
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
              <p className="testimonial-name">- {testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
