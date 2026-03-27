import React from 'react';
import './StepCard.css';

const StepCard = ({ number, title, description, icon: Icon }) => {
  return (
    <div className="step-card">
      <div className="step-number">{number}</div>
      <div className="step-icon">
        <Icon size={40} />
      </div>
      <h3 className="step-title">{title}</h3>
      <p className="step-desc">{description}</p>
    </div>
  );
};

export default StepCard;
