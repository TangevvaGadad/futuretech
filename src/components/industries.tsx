"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"

// Import your Lottie JSONs (download from lottiefiles.com and save in /lotties folder)
import educationAnim from "../lotties/education.json"
import telecomAnim from "../lotties/telecom.json"
import energyAnim from "../lotties/energy.json"
import healthcareAnim from "../lotties/healthcare.json"
import itAnim from "../lotties/it.json"
import emergingAnim from "../lotties/emerging.json"

const Industries = () => {
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

  const industries = [
    {
      title: "Education & EdTech",
      desc: "Revolutionizing learning through innovative educational technology solutions that make quality education accessible to all.",
      anim: educationAnim,
      bg: "bg-gradient-to-br from-pink-200 to-pink-300",
    },
    {
      title: "Telecom & Media",
      desc: "Enabling seamless communication and media experiences with cutting-edge telecommunications and broadcasting solutions.",
      anim: telecomAnim,
      bg: "bg-gradient-to-br from-indigo-200 to-indigo-300",
    },
    {
      title: "Energy & Sustainability",
      desc: "Powering the future with sustainable energy solutions and smart grid technologies for a greener tomorrow.",
      anim: energyAnim,
      bg: "bg-gradient-to-br from-green-200 to-green-300",
    },
    {
      title: "Healthcare & Life Sciences",
      desc: "Transforming healthcare delivery through digital health solutions, telemedicine, and medical technology innovations.",
      anim: healthcareAnim,
      bg: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    },
    {
      title: "Information Technology",
      desc: "Empowering businesses with comprehensive IT solutions, cloud infrastructure, and digital transformation services.",
      anim: itAnim,
      bg: "bg-gradient-to-br from-purple-200 to-purple-300",
    },
    {
      title: "Emerging Technologies",
      desc: "Pioneering the future with AI, blockchain, IoT, and other emerging technologies that shape tomorrow's world.",
      anim: emergingAnim,
      bg: "bg-gradient-to-br from-teal-200 to-teal-300",
    },
  ]

  return (
    <section id="industries" className="py-20 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Empowering <span className="text-gradient">Global Industries</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work across multiple industries worldwide, bringing innovative technology solutions that drive growth,
            efficiency, and create equal opportunities for communities.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${industry.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center`}
            >
              {/* Centered Lottie */}
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                <Lottie animationData={industry.anim} loop={true} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
              <p className="text-gray-700 leading-relaxed mb-4">{industry.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Industries
