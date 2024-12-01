import React from 'react';
import './Feature.css'; // CSS file for styling

const Feature = () => {
  const features = [
    {
      id: 1,
      title: 'Elegant Designs',
      description: 'Explore our collection of beautifully crafted furniture to elevate your home.',
      image: '/assets/design.jpg', // Replace with your image path
    },
    {
      id: 2,
      title: 'Comfort Meets Style',
      description: 'Experience unmatched comfort with stylish designs for every space.',
      image: '/assets/comfort.jpg',
    },
    {
      id: 3,
      title: 'Durable & Sustainable',
      description: 'Made with high-quality materials that ensure longevity and sustainability.',
      image: '../Components/assets/sustaianble_furniture.png',
    },
  ];

  return (
    <div className="feature-section">
      <h2 className="feature-title">Why Choose Us?</h2>
      <div className="feature-grid">
        {features.map((feature) => (
          <div key={feature.id} className="feature-item">
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3 className="feature-heading">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
