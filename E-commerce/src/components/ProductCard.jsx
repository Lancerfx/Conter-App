import React from 'react';
import { useShop } from '../context/ShopContext';
import './Product.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <article className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.title}</h3>
        <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem', lineHeight: '1.4' }}>{product.description}</p>
        <div className="product-details">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="btn btn-primary btn-add" onClick={() => addToCart(product)}>
            Add to Bag
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
