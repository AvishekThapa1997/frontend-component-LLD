import React from "react";
import { ProductDto } from "./types";
import Products from "./Products";

const ProductSection = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=50");
  const { products } = await response.json();
  const productDto = products.map(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (result: any) =>
      ({
        id: result.id,
        title: result.title,
        description: result.description,
        tags: result.tags,
        imageUrl: result.images[0],
      } as ProductDto)
  );

  return <Products products={productDto} />;
};
export default ProductSection;
