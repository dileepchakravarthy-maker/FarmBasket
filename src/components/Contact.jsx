import React from 'react';
import './Contact.css';
import { getWhatsAppLink, WHATSAPP_NUMBER } from '../utils/whatsapp';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">Farm Basket</h2>
            <p className="footer-tagline">
              Bringing farm-fresh goodness directly to your home. 
              Quality you can trust, prices you'll love.
            </p>
          </div>

          <div className="footer-contact">
            <h3 className="footer-heading">Contact Us</h3>
            <ul className="contact-list">
              <li>
                <a href={`tel:+${WHATSAPP_NUMBER}`} className="contact-link">
                  <Phone size={20} className="contact-icon" />
                  +91 {WHATSAPP_NUMBER.slice(2)}
                </a>
              </li>
              <li>
                <a 
                  href={getWhatsAppLink("Hi, I want to order fresh vegetables")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link text-whatsapp"
                >
                  <MessageCircle size={20} className="contact-icon" />
                  Order via WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:chakravarthyd12@gmail.com" className="contact-link">
                  <Mail size={20} className="contact-icon" />
                  chakravarthyd12@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-location">
            <h3 className="footer-heading">Service Area</h3>
            <div className="contact-area">
              <MapPin size={24} className="contact-icon-large text-primary" />
              <div className="area-text">
                <p className="font-bold">Ongole</p>
                <p>Andhra Pradesh, India</p>
              </div>
            </div>
            <p className="footer-founder mt-4">Founded by T. Dileep Chakravarthy</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Farm Basket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
