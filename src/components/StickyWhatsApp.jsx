import React from 'react';
import { MessageCircle } from 'lucide-react';
import './StickyWhatsApp.css';

const StickyWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/919177518695?text=Hi%20Farm%20Basket,%20I%20would%20like%20to%20place%20an%20order!" 
      className="sticky-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={32} />
      </div>
      <span className="whatsapp-tooltip">Order Now</span>
    </a>
  );
};

export default StickyWhatsApp;
