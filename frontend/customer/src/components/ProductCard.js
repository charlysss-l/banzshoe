import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = ({ shoe }) => {
  return (
    <div className={styles.card}>
        <h1 className={styles.prodTitle}>{shoe.name}</h1>
        <div className={styles.productDetails}>
            <h2>Brand: {shoe.brand}</h2>
            <h2>Color: {shoe.color}</h2>
            <h2>Quantity: {shoe.quantity}</h2>
            <h2>Price: {shoe.price}</h2>
        </div>
    </div>
  );
}

export default ProductCard;
