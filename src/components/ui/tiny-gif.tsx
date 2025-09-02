"use client";

import { useState } from "react";

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
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={className}
      onError={() => setError(true)}
    />
  );
}


