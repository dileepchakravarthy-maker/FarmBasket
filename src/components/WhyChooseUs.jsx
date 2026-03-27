import React from 'react';
import './WhyChooseUs.css';
import { Leaf, DollarSign, Users, Droplets } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Leaf className="feature-icon" />,
      title: "Better Quality Than Market",
      desc: "Fresh, unbruised, and carefully sorted vegetables."
    },
    {
      icon: <DollarSign className="feature-icon" />,
      title: "Same Price as Local Vendors",
      desc: "Premium quality without the premium price tag."
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Supports Farmers Directly",
      desc: "Your purchase helps local farmers get a fair price."
    },
    {
      icon: <Droplets className="feature-icon" />,
      title: "Hygienic Handling",
      desc: "Washed and packed with strict cleanliness standards."
    }
  ];

  return (
    <section className="section bg-light why-choose-us">
      <div className="container">
        <div className="choose-wrapper">
          <div className="choose-content">
            <h2 className="section-title text-left">Why Farm Basket?</h2>
            <p className="choose-subtitle">
              We eliminate the middlemen so you get farm-fresh produce 
              and the farmers get their rightful share.
            </p>
            
            <ul className="feature-list">
              {features.map((item, idx) => (
                <li key={idx} className="feature-list-item">
                  <div className="feature-icon-wrapper">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="feature-title">{item.title}</h4>
                    <p className="feature-desc">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="choose-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Fresh vegetables in a basket" 
              className="choose-image"
              loading="lazy"
            />
            <div className="experience-badge">
              <span className="exp-num">100%</span>
              <span className="exp-text">Farm Fresh Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
