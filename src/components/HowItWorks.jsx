import React from 'react';
import './HowItWorks.css';
import { Smartphone, Tractor, Truck } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Order on WhatsApp',
      description: 'Send us a message with your vegetable list.',
      icon: <Smartphone size={40} className="step-icon" />
    },
    {
      number: '02',
      title: 'We Source It Fresh',
      description: 'We pick the best quality directly from local farms.',
      icon: <Tractor size={40} className="step-icon" />
    },
    {
      number: '03',
      title: 'Next Day Delivery',
      description: 'Clean, hygienic, and delivered to your doorstep.',
      icon: <Truck size={40} className="step-icon" />
    }
  ];

  return (
    <section className="section bg-white" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">Simple 3-step process to get fresh vegetables</p>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-icon-container">
                {step.icon}
                <span className="step-number">{step.number}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
