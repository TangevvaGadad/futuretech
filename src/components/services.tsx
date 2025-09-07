"use client"

import { motion } from "framer-motion"
import Lottie from "lottie-react"

// Import your Lottie JSONs
import softwareAnim from "../lotties/software.json"
import cloudAnim from "../lotties/cloud.json"
import aiAnim from "../lotties/ai.json"
import digitalAnim from "../lotties/digital.json"
import productAnim from "../lotties/product.json"
import industryAnim from "../lotties/industry.json"
import supportAnim from "../lotties/support.json"
import designAnim from "../lotties/design.json"

const Services = () => {
  const services = [
    {
      anim: softwareAnim,
      title: "Software Development",
      description:
        "Custom web & mobile applications (iOS/Android), enterprise solutions (ERP, CRM, HRMS), and SaaS platforms built with cutting-edge technologies.",
      features: ["Web & Mobile Apps", "Enterprise Solutions", "SaaS & Cloud Apps"],
      bg: "bg-gradient-to-br from-pink-200 to-pink-300",
    },
    {
      anim: cloudAnim,
      title: "Cloud & IT Infrastructure",
      description:
        "Scalable cloud solutions, DevOps practices, cybersecurity, backup solutions, and comprehensive IT infrastructure management.",
      features: ["Cloud Migration", "DevOps & Security", "Managed IT Services"],
      bg: "bg-gradient-to-br from-indigo-200 to-indigo-300",
    },
    {
      anim: aiAnim,
      title: "AI, Data & Emerging Tech",
      description:
        "Leverage artificial intelligence, machine learning, NLP (chatbots, voice AI), computer vision, and data analytics to drive innovation.",
      features: ["AI/ML & NLP", "Computer Vision", "Blockchain & IoT"],
      bg: "bg-gradient-to-br from-yellow-200 to-yellow-300",
    },
    {
      anim: digitalAnim,
      title: "Digital Transformation",
      description:
        "Transform your business processes with strategic IT consulting, process automation (RPA), and enterprise architecture solutions.",
      features: ["IT Consulting", "Process Automation", "Enterprise Architecture"],
      bg: "bg-gradient-to-br from-green-200 to-green-300",
    },
    {
      anim: productAnim,
      title: "Product Innovation",
      description:
        "From concept to market, we help you build innovative products including MVP & prototyping, API development, and AR/VR & Metaverse solutions.",
      features: ["MVP & Prototyping", "API Development", "AR/VR Solutions"],
      bg: "bg-gradient-to-br from-purple-200 to-purple-300",
    },
    {
      anim: industryAnim,
      title: "Industry-specific Solutions",
      description:
        "Tailored solutions for FinTech, Healthcare, E-commerce, Education, Government, and Smart Cities with industry expertise.",
      features: ["FinTech Solutions", "Healthcare Tech", "Smart Cities"],
      bg: "bg-gradient-to-br from-orange-200 to-orange-300",
    },
    {
      anim: supportAnim,
      title: "Enterprise IT Support",
      description:
        "Comprehensive IT support services including 24/7 helpdesk, remote support, maintenance, upgrades, and QA & testing.",
      features: ["24/7 Helpdesk", "Remote Support", "QA & Testing"],
      bg: "bg-gradient-to-br from-teal-200 to-teal-300",
    },
    {
      anim: designAnim,
      title: "UI/UX & Branding",
      description:
        "Beautiful, intuitive designs for web & mobile applications, comprehensive branding, and digital identity solutions.",
      features: ["UI/UX Design", "Brand Identity", "Digital Marketing"],
      bg: "bg-gradient-to-br from-rose-200 to-rose-300",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  }

  return (
    <section id="services" className="py-20 bg-soft">
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
            World-Class <span className="text-gradient">Technology Services</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-3xl mx-auto">
            From software development to emerging technologies, we provide comprehensive solutions that empower
            communities and drive sustainable growth worldwide.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${service.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center`}
            >
              {/* Centered Lottie */}
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-white/30 rounded-full p-3">
                <Lottie animationData={service.anim} loop={true} />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-sm mb-4 text-gray-700">{service.description}</p>
              <ul className="space-y-2 text-left inline-block">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
