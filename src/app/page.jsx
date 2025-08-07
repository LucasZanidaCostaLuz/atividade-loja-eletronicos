"use client";
import React from "react";
import Card from "@/components/ProductCard/ProductCard";
import {product} from "@/data/products.js";

export default function Home(){
  return(
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px'}}>
      {product.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}