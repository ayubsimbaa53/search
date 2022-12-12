import React from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

export default function Products({ products }) {
  return (
    <section className="mt-5">
      {products.map((product) => (

        <div>
          <Link to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        </div>

        
      ))}{" "}
    </section>
    
  );
}
