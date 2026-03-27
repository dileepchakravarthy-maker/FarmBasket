import React from 'react';
import './DeliveryInfo.css';
import { MapPin, CalendarClock, Bike } from 'lucide-react';

const DeliveryInfo = () => {
  return (
    <section className="section bg-primary text-white" id="delivery">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title text-white">Delivery Information</h2>
          <p className="section-subtitle text-white-opacity">Fast and reliable farm-to-home service</p>
        </div>

        <div className="grid grid-cols-1 grid-cols-md-3 delivery-grid">
          <div className="delivery-card">
            <MapPin size={48} className="delivery-icon" />
            <h3>Service Area</h3>
            <p className="text-xl font-bold mt-2">Ongole City</p>
            <p className="delivery-desc">We currently serve all major areas within Ongole.</p>
          </div>

          <div className="delivery-card">
            <CalendarClock size={48} className="delivery-icon" />
            <h3>Delivery Time</h3>
            <p className="text-xl font-bold mt-2">Next Day Delivery</p>
            <p className="delivery-desc">Order today, receive freshly harvested veggies tomorrow morning.</p>
          </div>

          <div className="delivery-card">
            <Bike size={48} className="delivery-icon" />
            <h3>Delivery Mode</h3>
            <p className="text-xl font-bold mt-2">Self Delivery Team</p>
            <p className="delivery-desc">Handled safely by our own trained delivery personnel.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
