"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"
import Lottie from "lottie-react"

// Lottie JSON animations
import softwareDevAnim from "../lotties/software.json"
import cloudDevOpsAnim from "../lotties/cloud.json"
import aiMLAnim from "../lotties/ai.json"
import digitalTransAnim from "../lotties/digital.json"
import productInnovAnim from "../lotties/product.json"
import industrySolutionsAnim from "../lotties/industry.json"
import itSupportAnim from "../lotties/it.json"
import designBrandingAnim from "../lotties/design.json"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } },
}

const Services = () => {
  const services = [
    { animation: softwareDevAnim, title: "Software Development", brief: "Custom web & mobile applications, enterprise solutions" },
    { animation: cloudDevOpsAnim, title: "Cloud & DevOps", brief: "Scalable infrastructure, security & deployment automation" },
    { animation: aiMLAnim, title: "AI & Machine Learning", brief: "Intelligent automation, data analytics & predictive models" },
    { animation: digitalTransAnim, title: "Digital Transformation", brief: "Process automation, IT consulting & modernization" },
    { animation: productInnovAnim, title: "Product Innovation", brief: "MVP development, API integration & rapid prototyping" },
    { animation: industrySolutionsAnim, title: "Industry Solutions", brief: "FinTech, Healthcare, E-commerce & Smart Cities" },
    { animation: itSupportAnim, title: "IT Support", brief: "24/7 helpdesk, maintenance & technical assistance" },
    { animation: designBrandingAnim, title: "Design & Branding", brief: "UI/UX design, brand identity & digital marketing" },
  ]

  return (
    <section 
    id="services"
    className="py-16 bg-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex-1"
        >
          <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-gradient">Services</span>
          </motion.h2>

          

          <div className="space-y-4">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-all duration-100 group"
              >
                <div className="flex-shrink-0 w-14 h-14">
                  <Lottie animationData={service.animation} loop={true} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-tight">{service.brief}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Transparent PNG Illustration Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="rounded-lg shadow-lg overflow-hidden w-full h-full">
            <Image
              src="/services.png"
              alt="Services Illustration"
              width={1000}
              height={1000}
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
