"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-soft overflow-hidden bubble-container flex items-center pt-12 lg:pt-0">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>
      
      <div className="container mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between px-6 lg:px-8 relative z-10 min-h-[70vh] pt-8 lg:pt-0">
 
        {/* Left Content */}
        <div className="max-w-2xl lg:max-w-3xl text-center lg:text-left flex flex-col justify-center h-full lg:ml-24">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full text-purple-700 text-base font-medium mb-6 w-full max-w-md"
          >
            <Sparkles className="w-5 h-5" />
            FutureTech • Transforming Ideas Into Reality
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-4"
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

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mt-12 lg:mt-0 lg:ml-8 flex items-center justify-center h-full"
        >
          <div className="relative max-h-[60vh] lg:max-h-[70vh]">
            <Image
              src="/boy.png"
              alt="FutureTech Solutions"
              width={2000}
              height={3000}
              priority
              className="relative z-10 w-auto h-auto max-h-[60vh] lg:max-h-[70vh] object-contain mx-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl scale-110 -z-10"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
