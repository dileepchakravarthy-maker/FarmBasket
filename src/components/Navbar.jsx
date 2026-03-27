import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import { getWhatsAppLink } from '../utils/whatsapp';
import { ShoppingBasket, Menu, X, ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useContext(CartContext);
  
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <ShoppingBasket className="logo-icon" size={28} />
          <span className="logo-text">Farm Basket</span>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-links desktop-only">
          <button onClick={() => scrollToSection('trust')} className="nav-link">Why Us</button>
          <button onClick={() => scrollToSection('products')} className="nav-link">Fresh Veggies</button>
          <button onClick={() => scrollToSection('how-it-works')} className="nav-link">How it Works</button>
          
          <button onClick={toggleCart} className="cart-toggle-btn" aria-label="Open cart">
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="mobile-actions mobile-only">
          <button onClick={toggleCart} className="cart-toggle-btn m-right-2" aria-label="Open cart">
            <ShoppingCart size={24} />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </button>
          
          <button 
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu mobile-only animate-fade-in">
          <button onClick={() => scrollToSection('trust')} className="mobile-link">Why Us</button>
          <button onClick={() => scrollToSection('products')} className="mobile-link">Fresh Veggies</button>
          <button onClick={() => scrollToSection('how-it-works')} className="mobile-link">How it Works</button>
          <div className="mobile-menu-action">
            <a 
              href={getWhatsAppLink("Hi, I want to order fresh vegetables")} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-block"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
