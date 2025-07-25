"use client";

import { useState } from "react";

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export default function SafeImage({
  fallbackSrc = "/img/san_andres.png",
  ...props
}: SafeImageProps) {
  const [src, setSrc] = useState(props.src);

  return (
    <img
      {...props}
      src={src}
      onError={() => setSrc(fallbackSrc)}
      alt={props.alt || "Imagen"}
    />
  );
}
