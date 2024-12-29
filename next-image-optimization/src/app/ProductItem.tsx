import React from "react";
import { ProductDto } from "./types";
import NextImage from "./NextImage";
import Link from "next/link";

export interface ProductItemProps {
  product: ProductDto;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="border-2 rounded overflow-hidden">
      <Link href={`/products/${product.id}`}>
        <NextImage
          id="product-image"
          src={product.imageUrl}
          height={256}
          width={256}
          quality={75}
          alt={product.title}
          className="h-auto mx-auto aspect-square max-w-full object-contain"
          sizes="(min-width:1024px) calc(22vw - (3 * 0.5rem) - 1rem) , (min-width:768px) calc(30vw - (2 * 0.5rem) - 1rem) ,calc(50vw - 0.5rem - 1rem)"
        />
      </Link>
    </div>
  );
};

export default ProductItem;
