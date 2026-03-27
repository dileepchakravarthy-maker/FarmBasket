import React from 'react';
import './FloatingWhatsApp.css';
import { getWhatsAppLink } from '../utils/whatsapp';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  return (
    <a 
      href={getWhatsAppLink("Hi, I want fresh vegetables")}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <div className="whatsapp-icon-bg">
        <MessageCircle size={28} />
      </div>
      <span className="whatsapp-tooltip">Order Now</span>
    </a>
  );
};

export default FloatingWhatsApp;
