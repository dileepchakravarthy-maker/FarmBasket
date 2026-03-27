import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/mockData';
import './Products.css';

const Products = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Vegetables', 'Leafy Greens'];

  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="products-page">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Fresh Vegetables</h1>
          <p className="page-subtitle">Sourced today, delivered today. Choose from our wide selection of farm-fresh produce.</p>
        </div>
      </div>

      <div className="container section">
        <div className="products-layout">
          {/* Simple Filter Sidebar */}
          <aside className="products-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">Categories</h3>
              <ul className="filter-list">
                {categories.map(cat => (
                  <li key={cat}>
                    <button 
                      className={`filter-btn ${filter === cat ? 'active' : ''}`}
                      onClick={() => setFilter(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="products-main">
            <div className="products-count">
              Showing {filteredProducts.length} products
            </div>
            
            <div className="grid grid-cols-1 grid-cols-md-2 grid-cols-lg-3">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="no-products text-center">
                <h3>No products found in this category.</h3>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
