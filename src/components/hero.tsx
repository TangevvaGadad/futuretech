"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-soft overflow-hidden bubble-container min-h-screen flex items-center">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 relative z-10">
        
        {/* Left Content - Simplified */}
        <div className="max-w-2xl lg:max-w-3xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full text-purple-700 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            FutureTech • Transforming Ideas Into Reality
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6"
          >
            We build{" "}
            <span className="text-gradient font-extrabold">
              innovative solutions
            </span>{" "}
            that transform businesses
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
          >
            From AI and cloud technologies to digital transformation, we deliver solutions that empower businesses and create lasting impact.
          </motion.p>

          {/* Simplified CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#services"
              className="cta-primary text-base font-semibold px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="cta-outline text-base font-semibold px-8 py-4 inline-flex items-center justify-center gap-2"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Right Side Image - Simplified */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-24 sm:mt-20 lg:mt-0 lg:ml-8"
        >
          <div className="relative">
            <Image
              src="/boy.png"
              alt="FutureTech Solutions"
              width={2000}
              height={3000}
              priority
              className="relative z-10 w-auto h-auto scale-150 mx-auto"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl scale-110 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}