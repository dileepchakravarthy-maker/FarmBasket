import React from 'react';
import './Hero.css';
import { getWhatsAppLink } from '../utils/whatsapp';
import { ShoppingBasket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="badge-dot"></span> Serving Ongole
          </div>
          <h1 className="hero-title animate-fade-in">
            Fresh Vegetables Direct from Farmers to Your Home in <span className="text-primary">Ongole</span>
          </h1>
          <p className="hero-subtitle animate-fade-in">
            Harvested within 6 hours &bull; Better quality at market price
          </p>
          <div className="hero-actions animate-fade-in">
            <a 
              href={getWhatsAppLink("Hi, I want to order fresh vegetables")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-hero"
            >
              <ShoppingBasket size={20} />
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
