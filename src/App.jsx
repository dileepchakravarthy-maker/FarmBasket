import React from 'react';
import { CartProvider } from './context/CartContext';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Products from './components/Products';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import DeliveryInfo from './components/DeliveryInfo';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CartDrawer from './components/CartDrawer';

function App() {
  return (
    <CartProvider>
      <div className="app-wrapper">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Trust />
        <Products />
        <HowItWorks />
        <WhyChooseUs />
        <DeliveryInfo />
      </main>
      <Contact />
      <FloatingWhatsApp />
      <CartDrawer />
    </div>
    </CartProvider>
  );
}

export default App;
