"use client";

import { useState } from "react";
import Image from "next/image";

interface SafeImageProps {
  src?: string;
  alt?: string;
  fallbackSrc?: string;
  className?: string;
  imageClassName?: string;
}

export default function SafeImage({
  src,
  alt = "Imagen",
  fallbackSrc = "/img/san_andres.png",
  className,
  imageClassName = "rounded-t-xl",
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <div className={`relative ${className}`}>
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={`object-cover ${imageClassName}`}
        onError={() => setImgSrc(fallbackSrc)}
      />
    </div>
  );
}
