"use client";
import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";

export default function Home(){
  return(
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}