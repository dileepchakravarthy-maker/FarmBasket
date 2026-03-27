import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const whatsappMsg = `Hi Farm Basket, I'd like to order: ${product.name} (${product.price} ${product.unit})`;
  const whatsappUrl = `https://wa.me/910000000000?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="product-card card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="product-details">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.name}</h3>
        <div className="product-price-row">
          <span className="product-price">{product.price}</span>
          <span className="product-unit">{product.unit}</span>
        </div>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block product-cta">
          <ShoppingCart size={18} />
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
