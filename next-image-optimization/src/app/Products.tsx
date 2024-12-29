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
      <div className="max-w-4xl space-y-4 p-4  mx-auto">
        <ClientDimension />
        <div className="gap-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
