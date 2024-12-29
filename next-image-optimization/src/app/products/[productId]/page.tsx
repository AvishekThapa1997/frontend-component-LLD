import ClientDimension from "@/app/ClientDimension";
import React from "react";
import NextImage from "@/app/NextImage";

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
      <div className="grid p-6 md:p-4 gap-6 lg:grid-cols-[auto,1fr] md:gap-4 max-w-6xl mx-auto">
        <div className="border-2 rounded overflow-hidden">
          <NextImage
            height={500}
            width={500}
            src={result.images[0]}
            alt={result.title}
            quality={75}
            className="mx-auto max-w-full object-contain h-auto aspect-square bg-gray-100"
            sizes="(min-width:1024px) calc(30vw - 1rem) , (min-width:768px) calc(35vw - 1rem) , (min-width:640px) calc(30vw - 1rem) , calc(40vw - 1rem)"
          />
        </div>
        <div className="h-full space-y-3">
          <h1 className="text-2xl font-medium md:text-5xl">{result.title}</h1>
          <p>{result.description}</p>
        </div>
        <ClientDimension />
      </div>
    </>
  );
};

export default ProductDetailPage;
