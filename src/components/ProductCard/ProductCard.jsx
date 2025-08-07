import React from "react";
import styles from "./ProductCard.module.css";

export default function Card({ product }) {
  return (
    <div className={styles.productCard} data-category={product.category}>
      <div className={styles.productImage}>
        <img
          src={product.image}
          alt={product.title}
          style={{width: "100%", height: "100%", objectFit: "cover", borderRadius: 4}}
        />
      </div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.productDescription}>
        {product.description}
      </div>
      <div className={styles.productRating}>
        <span className={styles.productStars}>{product.stars}</span>
        <span>{product.count} - {product.review}</span>
      </div>
    </div>
  );
}
