import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";


export default function Header({title, subtitle, totalProducts}) {
  return (
    <header className={styles.header}>
      <Image
        src="/img/logo.png"
        alt="Loja de Eletrônicos Logo"
        priority
        width={100}
        height={50}
        className={styles.logo}
      />
      <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.totalProducts}> Total de produtos: {totalProducts}</p>
    </header> 
  )
}