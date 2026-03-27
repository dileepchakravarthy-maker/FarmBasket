import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, Clock, Sprout, Star, Truck, HeartHandshake } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import StepCard from '../components/StepCard';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/mockData';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="home-page">
      {/* ABOVE THE FOLD - HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="trust-badge animate-fade-in">
              <ShieldCheck size={18} />
              <span>Locally sourced | Same-day delivery</span>
            </div>
            <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Farm Fresh Vegetables Delivered in Hours – <span className="text-primary">Ongole</span>
            </h1>
            <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
              No middlemen. No long waits. Just fresh produce at your doorstep.
            </p>
            <div className="hero-actions animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://wa.me/910000000000?text=I'd%20like%20to%20order%20farm%20fresh%20vegetables!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp hero-primary-btn"
              >
                Order on WhatsApp
              </a>
              <Link to="/products" className="btn btn-secondary hero-secondary-btn">
                View Products
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200" 
              alt="Fresh vegetables in a basket" 
              className="hero-image"
              loading="lazy"
            />
            <div className="hero-floating-card">
              <Sprout size={24} className="text-primary" />
              <div>
                <strong>100% Fresh</strong>
                <span>Harvested Today</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Farm Basket</h2>
          <p className="section-subtitle">We bring the farm directly to your kitchen, skipping the middlemen to guarantee freshness and value.</p>
          
          <div className="grid grid-cols-1 grid-cols-md-3">
            <FeatureCard 
              icon={Sprout} 
              title="100% Farm Fresh" 
              description="Direct sourcing from local farmers early every morning. We guarantee crisp, fresh vegetables every time." 
            />
            <FeatureCard 
              icon={Clock} 
              title="Fast Local Delivery" 
              description="Same-day delivery in Ongole or within hours of your order. Never wait days for your groceries again." 
            />
            <FeatureCard 
              icon={HeartHandshake} 
              title="Better Prices" 
              description="No middlemen margins or hidden fees. By going direct, we ensure farmers earn more and you pay less." 
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">A simple, transparent process to ensure you get the absolute best produce.</p>
          
          <div className="grid grid-cols-1 grid-cols-md-3 how-it-works-grid">
            <StepCard 
              number="1"
              icon={Sprout}
              title="We Source Locally"
              description="Our team visits vetted local farmers at dawn to select the daily harvest."
            />
            <StepCard 
              number="2"
              icon={ShieldCheck}
              title="Quality Check & Pack"
              description="Produce is thoroughly inspected, cleaned, and packed in hygienic, eco-friendly conditions."
            />
            <StepCard 
              number="3"
              icon={Truck}
              title="Delivered to You"
              description="Our delivery agents bring your fresh order directly to your doorstep in Ongole."
            />
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header-row">
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>Featured Fresh Stock Today</h2>
              <p className="text-muted">High-quality essentials available for immediate delivery.</p>
            </div>
            <Link to="/products" className="view-all-link">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-4 mt-4">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* TRUST & SOCIAL PROOF SECTION */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Trusted by Local Families</h2>
          <p className="section-subtitle">See what our customers in Ongole have to say about our freshness and service.</p>
          
          <div className="grid grid-cols-1 grid-cols-md-3">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRONG CTA SECTION */}
      <section className="section cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2 className="cta-title">Get Fresh Vegetables Delivered Today</h2>
          <p className="cta-subtitle">Order now in just one click and enjoy absolute freshness, straight from the farm.</p>
          <a 
            href="https://wa.me/910000000000?text=Hi!%20I%20would%20like%20to%20place%20an%20order." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp cta-btn"
          >
            Order Now via WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
