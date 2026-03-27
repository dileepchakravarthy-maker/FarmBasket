import React, { useContext } from 'react';
import './Products.css';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    category: 'Daily Vegetables',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Onions & Potatoes',
    category: 'Roots',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1615484478144-8cbdf6a928e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Spinach (Palak)',
    category: 'Leafy',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Fresh Carrots',
    category: 'Roots',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    name: 'Lady Finger (Okra)',
    category: 'Daily Vegetables',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1425543103986-22abb7d7e8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 6,
    name: 'Mint & Coriander',
    category: 'Leafy',
    price: 'Market Price',
    image: 'https://images.unsplash.com/photo-1600857544200-b2f56860a4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="section bg-light" id="products">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Farm Fresh Produce</h2>
          <p className="section-subtitle">Categorized for your daily needs.</p>
        </div>
        
        <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3 products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                <span className="product-category-badge">{product.category}</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  className="btn btn-primary btn-block mt-4"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
