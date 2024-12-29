"use client";
import Image from "next/image";
import React, { ComponentProps, useState } from "react";

const imageLoader: ComponentProps<typeof Image>["loader"] = ({
  src,
  width,
  quality,
}) => {
  return `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/${src}?tr=w-${width},q=${quality},f-webp`;
};

const NextImage = (props: Omit<ComponentProps<typeof Image>, "loader">) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="image-container">
      <div className="image-loading-skeleton"></div>
      <Image
        {...props}
        alt={props.alt}
        loader={imageLoader}
        onLoad={() => setIsLoaded((prevState) => !prevState)}
        data-loaded={`${isLoaded}`}
      />
    </div>
  );
};

export default NextImage;
