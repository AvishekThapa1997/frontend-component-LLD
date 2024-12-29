import ClientDimension from "@/app/ClientDimension";
import NextImage from "@/app/NextImage";
import React from "react";
import "../../product.css";

interface ProductDetailPageParams {
  params: {
    productId: string;
  };
}

const ProductDetailPage = async ({
  params: { productId },
}: ProductDetailPageParams) => {
  const response = await fetch("https://dummyjson.com/products/" + productId);
  const result = await response.json();

  return (
    <>
      <ClientDimension />
      <div
        className="product-detail-container"
        style={{
          maxInlineSize: "60rem",
          marginInline: "auto",
        }}
      >
        <NextImage
          id="product-image"
          height={800}
          width={800}
          src={result.images[0]}
          alt={result.title}
          quality={75}
          fetchPriority="high"
          sizes="(min-width:1024px) calc(50vw - 1rem) , calc(100vw - 1rem)"
        />

        <div
          style={{
            border: "2px solid black",
            padding: "1rem",
          }}
        >
          <h1
            style={{
              marginBlockEnd: "0.8rem",
            }}
          >
            {result.title}
          </h1>
          <p>{result.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;
