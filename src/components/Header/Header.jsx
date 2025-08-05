import React from "react";

export default function Header({title, subtitle, totalProducts}) {
  return (
    <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p> Total de produtos: {totalProducts}</p>
    </header> 
  )
}