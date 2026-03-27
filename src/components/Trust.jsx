import React from 'react';
import './Trust.css';
import { Clock, Sprout, ShieldCheck, MapPin } from 'lucide-react';

const Trust = () => {
  const trustItems = [
    {
      icon: <Clock size={32} className="trust-icon" />,
      title: 'Fresh within 6 hours',
      description: 'Harvested daily to ensure peak freshness and nutrition.'
    },
    {
      icon: <Sprout size={32} className="trust-icon" />,
      title: 'Direct from farmers',
      description: 'Sourced straight from local farms, supporting agriculture.'
    },
    {
      icon: <ShieldCheck size={32} className="trust-icon" />,
      title: 'No middlemen',
      description: 'Direct supply chain means better quality at market rates.'
    },
    {
      icon: <MapPin size={32} className="trust-icon" />,
      title: 'Local delivery in Ongole',
      description: 'Fast, reliable next-day delivery straight to your doorstep.'
    }
  ];

  return (
    <section className="section bg-white" id="trust">
      <div className="container">
        <h2 className="section-title">Why Choose Farm Basket</h2>
        <p className="section-subtitle">We bring the farm to your home</p>
        
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4 trust-grid">
          {trustItems.map((item, index) => (
            <div key={index} className="trust-card card">
              <div className="trust-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="trust-card-title">{item.title}</h3>
              <p className="trust-card-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
