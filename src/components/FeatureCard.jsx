import React from 'react';
import './FeatureCard.css';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="feature-card animate-fade-in">
      <div className="feature-icon-wrapper">
        <Icon size={32} className="feature-icon" />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{description}</p>
    </div>
  );
};

export default FeatureCard;
