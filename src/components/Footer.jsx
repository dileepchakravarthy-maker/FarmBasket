import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">Farm Basket</h3>
            <p className="footer-desc">
              Fast, fresh, and reliable hyperlocal vegetable delivery in Ongole. Sourced directly from local farmers to your doorstep in hours.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Fresh Vegetables</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-subtitle">Contact Us</h4>
            <ul>
              <li>
                <MapPin size={16} className="footer-icon" />
                <span>Ongole, Andhra Pradesh, India</span>
              </li>
              <li>
                <Phone size={16} className="footer-icon" />
                <span>+91 00000 00000</span>
              </li>
              <li>
                <Mail size={16} className="footer-icon" />
                <span>support@farmbasket.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Farm Basket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
