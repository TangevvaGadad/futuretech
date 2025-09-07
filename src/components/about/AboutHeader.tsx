"use client"

import { motion } from "framer-motion"

export default function AboutHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
        <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
          About Us
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Learn more about our journey, vision, and commitment to building innovative,
        sustainable solutions for the future.
      </p>
    </motion.div>
  )
}
