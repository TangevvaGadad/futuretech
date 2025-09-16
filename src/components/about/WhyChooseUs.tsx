"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-50 to-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="text-sm font-semibold text-purple-600 mb-2"
          >
            Why Choose FutureTech
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Empowering Communities with Cutting-Edge Technology <br /> and Sustainable Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10"
          >
            FutureTech is driven by the belief that technology transforms lives.  
            We focus on creating breakthrough solutions in Education, Healthcare, Energy, Telecom, and more, providing equal opportunities and real-world impact.
          </motion.p>

          {/* Feature Cards */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 rounded-2xl border border-purple-200/60 bg-pink-300/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-150 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-red-50/0 group-hover:from-purple-100/60 group-hover:via-pink-100/40 group-hover:to-red-100/60 transition-all duration-150" />
              <div className="relative z-10">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-100">
                  Innovative Solutions
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-100">
                  We develop AI, Blockchain, Cloud, and IoT solutions designed to solve real-world challenges in multiple industries.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 rounded-2xl border border-purple-200/60 bg-pink-300/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-150 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-red-50/0 group-hover:from-purple-100/60 group-hover:via-pink-100/40 group-hover:to-red-100/60 transition-all duration-150" />
              <div className="relative z-10">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-100">
                  Global Impact
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-100">
                  We empower underserved communities and refugees through education and technology, delivering opportunities for a better future.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="group relative p-6 rounded-2xl border border-purple-200/60 bg-pink-300/30 backdrop-blur-sm shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-150 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 via-pink-50/0 to-red-50/0 group-hover:from-purple-100/60 group-hover:via-pink-100/40 group-hover:to-red-100/60 transition-all duration-150" />
              <div className="relative z-10">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-purple-800 transition-colors duration-100">
                  Sustainable Growth
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-100">
                  We create scalable, cloud-native applications and enterprise solutions designed for long-term business success.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="flex flex-col lg:flex-row gap-8 items-center justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden shadow-lg"
          >
            <Image
              src="/business-meeting-thumbnail.png"
              alt="Collaborative Meeting"
              width={350}
              height={450}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="rounded-[2rem] overflow-hidden shadow-lg"
          >
            <Image
              src="/lap.png"
              alt="Innovative Tech Work"
              width={350}
              height={450}
              className="object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
