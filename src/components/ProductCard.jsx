import React from 'react'
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard
