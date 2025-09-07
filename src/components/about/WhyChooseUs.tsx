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
            Why Choose Us
          </motion.p>
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Tailored Solutions, Proven Results,
            <br /> And Exceptional Service
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 mb-10"
          >
            At Gaadavi Consulting we understand that you have many options when it comes 
            to Client Acquisition Services. So why should you choose us? Here are a few reasons.
          </motion.p>

          {/* Feature Cards */}
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Proven Result
              </h3>
              <p className="text-gray-600">
                We have a track record of delivering tangible results for our clients. 
                From increasing website traffic and improving search.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Customized Solutions
              </h3>
              <p className="text-gray-600">
                We believe that one size does not fit all when it comes to digital marketing. 
                That’s why we take the time to understand your IT.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Dedicated Support
              </h3>
              <p className="text-gray-600">
                Your success is our top priority. That’s why we provide dedicated support 
                and guidance every step of the way.
              </p>
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
              src="/business-meeting-thumbnail.png" // ✅ replace with exported PNG
              alt="Consulting professional"
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
              src="/lap.png" // ✅ replace with exported PNG
              alt="Professional working"
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
