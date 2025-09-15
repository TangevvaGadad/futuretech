"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"

// Import your Lottie JSON files (you’ll need to download some free ones from lottiefiles.com)
import globalTechAnim from "../lotties/Global.json"
import innovationAnim from "../lotties/Bulb.json"
import communityAnim from "../lotties/community.json"
import sustainabilityAnim from "../lotties/sustain.json"

const About = () => {
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

  const services = [
    {
      title: "Global Technology Solutions",
      desc: "We deliver world-class technology solutions that empower communities. From software development to emerging technologies, we drive sustainable growth.",
      animation: globalTechAnim,
      bg: "bg-gradient-to-br from-pink-200 to-pink-300",
    },
    {
      title: "Innovation & Emerging Tech",
      desc: "We pioneer breakthrough solutions in AI, blockchain, IoT, and emerging technologies. Our innovations shape tomorrow's world and create sustainable futures.",
      animation: innovationAnim,
      bg: "bg-gradient-to-br from-indigo-200 to-indigo-300",
    },
    {
      title: "Community Empowerment",
      desc: "We create equal opportunities for refugees and underserved groups through education and technology. Our solutions uplift communities and drive positive change.",
      animation: communityAnim,
      bg: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    },
    {
      title: "Sustainable Development",
      desc: "We build sustainable solutions that shape a brighter tomorrow. Our technology-driven approach ensures long-term impact and environmental responsibility.",
      animation: sustainabilityAnim,
      bg: "bg-gradient-to-br from-green-200 to-green-300",
    },
  ]

  return (
    <section id="about" className="py-20 bg-soft relative overflow-hidden">
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
            Our Mission to <span className="text-gradient">Empower Communities Worldwide</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are innovators, creators, and problem-solvers who transform bold ideas into technologies that solve real
            problems, create opportunities, and deliver hope to communities worldwide.
          </motion.p>
        </motion.div>

        {/* Services Grid with Lottie Animations */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5, transition: { duration: 0.01 } }}
              className={`${service.bg} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              {/* Lottie Animation */}
              <div className="w-28 h-28 mx-auto mb-6">
                <Lottie animationData={service.animation} loop={true} />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed text-center">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About