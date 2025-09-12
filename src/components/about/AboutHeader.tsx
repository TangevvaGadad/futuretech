"use client"

import { motion } from "framer-motion"

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <motion.h2 
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-gradient">
          About Us
        </span>
      </motion.h2>
      <motion.p 
        className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Learn more about our journey, vision, and commitment to building innovative,
        sustainable solutions for the future.
      </motion.p>
      
      {/* Decorative Elements */}
      <motion.div
        className="flex justify-center mt-8"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"></div>
      </motion.div>
    </motion.div>
  )
}
