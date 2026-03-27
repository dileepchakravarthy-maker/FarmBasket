import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Story</h1>
          <p className="page-subtitle">Supporting local farmers, delivering freshness to your family.</p>
        </div>
      </div>

      <div className="container section">
        <div className="about-content grid grid-cols-1 grid-cols-md-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          <div className="about-image-wrapper animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1595858603612-42111de680fc?auto=format&fit=crop&q=80&w=800" 
              alt="Local Indian Farmer" 
              className="about-image" 
            />
            <div className="image-caption">Proudly partnered with 50+ local farmers in Prakasam District.</div>
          </div>

          <div className="about-text animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="section-title" style={{ textAlign: 'left' }}>The Farm Basket Mission</h2>
            <p className="text-large">
              Farm Basket was born out of a simple realization: the vegetables reaching our homes in Ongole weren't as fresh as they could be, and the local farmers weren't getting the fair prices they deserved.
            </p>
            <p>
              By the time produce traveled from the farm, through multiple wholesale markets, and finally to local vendors, days had passed. We decided to change that.
            </p>
            <p>
              Our model is simple. We source directly from the fields early every morning. We bring it to our hygienic fulfillment center, pack it carefully, and deliver it straight to your doorstep via WhatsApp orders within hours.
            </p>
            
            <div className="mission-highlights mt-4">
              <div className="mission-item">
                <div className="mission-number">01</div>
                <div>
                  <h4>Empowering Farmers</h4>
                  <p>By removing middlemen, farmers earn up to 30% more for their hard work.</p>
                </div>
              </div>
              <div className="mission-item">
                <div className="mission-number">02</div>
                <div>
                  <h4>Absolute Freshness</h4>
                  <p>From soil to kitchen in under 12 hours. Taste the difference.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
