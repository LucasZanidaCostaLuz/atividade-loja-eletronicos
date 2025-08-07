import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";

export default function Card({ product }) {
  return (
    <div className={styles.productCard} data-category={product.category}>
      <div className={styles.productImage}>
        {
          product.image ? (
            <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className={styles.productImage}
      /> ) : ( <span style={{ width: "100%", height: "auto", textAlign: "center",fontSize: 48, color: "#ccc" }}>📦</span>
        )
        }
      </div>
      <div className={styles.productTitle}>{product.title}</div>
      <div className={styles.productPrice}>{product.price}</div>
      <div className={styles.productDescription}>
        {product.description}
      </div>
      <div className={styles.productRating}>
        <span className={styles.productStars}>{"⭐".repeat(product.rating.stars)}</span>
        <span>{product.rating.count} - {product.rating.reviews}</span>
      </div>
    </div>
  );
}
