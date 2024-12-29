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

const NextImage = ({
  className,
  ...props
}: Omit<ComponentProps<typeof Image>, "loader">) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div className="relative">
      <div
        className={`animate-pulse bg-gray-200 absolute inset-0 ${
          isLoaded ? "hidden" : "block"
        }`}
      ></div>
      <Image
        {...props}
        className={
          className
            ? className + " z-10 " + (isLoaded ? "opacity-100" : "opacity-0")
            : isLoaded
            ? "opacity-100"
            : "opacity-0"
        }
        alt={props.alt}
        loader={imageLoader}
        onLoad={() => setIsLoaded((prevState) => !prevState)}
        aria-hidden={!isLoaded}
      />
    </div>
  );
};

export default NextImage;
