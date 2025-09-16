"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutContent() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-soft backdrop-blur-sm">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 items-center gap-12">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/business-meeting-thumbnail.png"
            alt="Consulting professional"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </motion.div>

        {/* Center Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            IT & Consulting Solutions for All Industries
          </h2>
          <p className="text-gray-600 leading-relaxed">
          FutureTech specializes in empowering businesses and communities with innovative technology solutions.  
  From developing enterprise software and cloud-native applications to enabling AI-driven automation and sustainable energy solutions,  
  we help you streamline operations, boost digital presence, and create real-world impact in a rapidly evolving tech landscape.
          </p>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/lap.png"
            alt="Architect working on laptop"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
