"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#f3f0ff] to-[#e6f7ff]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-16">
        
        {/* Left Content */}
        <div className="max-w-4xl lg:ml-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-block rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700"
          >
            FutureTech • Empowering Communities Through Technology
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold text-gray-900 leading-snug lg:text-5xl"
          >
            We transform bold ideas into breakthrough technologies that solve real problems and create opportunities worldwide
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            From AI and Cloud to Digital Transformation and Emerging Technologies, we deliver world-class solutions that empower communities, create equal opportunities, and build sustainable futures.
          </motion.p>

          {/* Industry chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {[
              "Education & EdTech",
              "Telecom & Media",
              "Energy & Sustainability",
              "Healthcare",
              "Information Technology",
            ].map((chip) => (
              <span key={chip} className="badge-theme bg-white/80 text-gray-700 border border-gray-200">
                {chip}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <a
              href="#services"
              className="cta-primary"
            >
              Explore Services <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="cta-outline"
            >
              Talk to an Expert <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative mt-12 lg:mt-0"
        >
          {/* Person Image */}
          <Image
  src="/boy.png"
  alt="Hero visual"
  width={920}
  height={1120}
  priority={false}
  className="relative z-10 scale-105 mt-12" // ✅ Removed -translate-y-30, added margin-top
/>

        </motion.div>
      </div>
    </section>
  );
}
