import React, { useContext } from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { getCartWhatsAppLink } from '../utils/whatsapp';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={toggleCart} />
      
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <div className="cart-title">
            <ShoppingBag size={24} />
            <h2>Your Cart ({totalItems})</h2>
          </div>
          <button onClick={toggleCart} className="cart-close-btn" aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <ShoppingBag size={48} className="empty-icon" />
              <p>Your cart is empty!</p>
              <button className="btn btn-secondary mt-4" onClick={toggleCart}>
                Browse Fresh Veggies
              </button>
            </div>
          ) : (
            <ul className="cart-items">
              {cartItems.map(item => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-image" loading="lazy" />
                  <div className="cart-item-details">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                    
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => updateQuantity(item.id, 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <a 
              href={getCartWhatsAppLink(cartItems)} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp btn-block"
              onClick={toggleCart}
            >
              Checkout via WhatsApp
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
