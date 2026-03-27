import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">We're here to help. Reach out to us for orders, support, or partnership inquiries.</p>
        </div>
      </div>

      <div className="container section">
        <div className="grid grid-cols-1 grid-cols-md-2" style={{ gap: '4rem' }}>
          
          {/* Contact Info */}
          <div className="contact-info">
            <h2 className="section-title" style={{ textAlign: 'left' }}>Get in Touch</h2>
            <p className="mb-4 text-muted">For the fastest response and to place direct orders, we recommend sending us a message on WhatsApp.</p>
            
            <a 
              href="https://wa.me/919177518695?text=Hi!%20I%20need%20some%20help." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-block mb-4"
              style={{ padding: '1rem', fontSize: '1.125rem' }}
            >
              <MessageSquare size={20} />
              Chat on WhatsApp
            </a>

            <div className="contact-methods mt-4">
              <div className="contact-method">
                <div className="icon-circle">
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 91775 18695</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-circle">
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>chakravarthyd12@gmail.com</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-circle">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kurnool Road, Ongole<br/>Andhra Pradesh 523001, India</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="icon-circle">
                  <Clock size={24} />
                </div>
                <div>
                  <h4>Working Hours</h4>
                  <p>Everyday: 6:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="card form-card">
              <h3 className="form-title">Send us a message</h3>
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="+91 xxxxx xxxxx" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
