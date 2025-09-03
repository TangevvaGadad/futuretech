"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type HeroVisualProps = {
  src?: string;
  alt?: string;
};

export default function HeroVisual({
  src = "/hero.gif",
  alt = "AI generated person working on laptop"
}: HeroVisualProps) {
  return (
    <div className="hidden lg:block absolute right-6 top-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div className="absolute -inset-6 rounded-full blur-2xl opacity-30 gradient-secondary" />
        <div className="relative rounded-[28px] overflow-hidden shadow-2xl ring-1 ring-black/5">
          <Image
            src={src}
            alt={alt}
            width={520}
            height={520}
            priority={false}
            loading="lazy"
            unoptimized
            className="object-cover will-change-transform"
          />
        </div>
      </motion.div>
    </div>
  );
}



