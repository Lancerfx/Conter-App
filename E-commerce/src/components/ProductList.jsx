import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import './Product.css';

const ProductList = () => {
  return (
    <section id="shop" className="container product-list">
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
