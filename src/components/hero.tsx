"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-soft overflow-hidden bubble-container">
      {/* Beautiful Bubble Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        {/* Additional floating elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-25 animate-pulse-slow"></div>
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-5 relative z-10">
        
        {/* Left Content */}
        <div className="max-w-4xl lg:ml-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="badge-theme text-sm font-medium mt-20 pt-4"
          >
            FutureTech • Transforming Ideas Into Reality
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-3xl font-bold text-gray-900 leading-tight lg:text-4xl xl:text-5xl px-2 py-5"
          >
            We build <span className="text-gradient font-extrabold">innovative solutions</span> that{" "}
            transform businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-base text-gray-600 leading-relaxed max-w-2xl"
          >
            From AI and cloud technologies to digital transformation, we deliver solutions that empower businesses and create lasting impact.
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
              <span key={chip} className="badge-theme text-xs font-medium px-3 py-1.5">
                {chip}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="cta-primary text-sm font-semibold"
            >
              Explore Services <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="cta-outline text-sm font-semibold"
            >
              Get Started Today <ArrowRight size={16} />
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
