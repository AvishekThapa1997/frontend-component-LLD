import React from "react";
import { ProductDto } from "./types";

import ProductItem from "./ProductItem";
import ClientDimension from "./ClientDimension";

export interface ProductsProps {
  products: ProductDto[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <>
      <ClientDimension />
      <div className="product-container">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default Products;
