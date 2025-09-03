"use client";

import { useState } from "react";
import Image from "next/image";

type TinyGifProps = {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
};

export default function TinyGif({ src, alt = "decorative gif", className, size = 28 }: TinyGifProps) {
  const [error, setError] = useState(false);
  if (error) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      onError={() => setError(true)}
      unoptimized
    />
  );
}


