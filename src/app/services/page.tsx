"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, Users, Lightbulb, Shield, Rocket } from "lucide-react"

const services = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Client Acquisition Services",
    description:
      "We offer result-driven Client Acquisition Services to boost your online presence. From IT to social media, we help you grow your brand and reach the right audience.",
    gradient: "from-pink-200 to-pink-300",
    features: ["SEO Optimization", "Social Media Marketing", "Lead Generation", "Brand Development"],
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "IT Solutions",
    description:
      "We deliver innovative IT solutions tailored to meet your business needs. From software development to tech support, we ensure seamless digital transformation.",
    gradient: "from-indigo-200 to-indigo-300",
    features: ["Software Development", "Cloud Solutions", "Tech Support", "Digital Infrastructure"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Business Services",
    description:
      "We offer comprehensive business services to streamline your operations and drive growth. From strategy to execution, we support your success every step of the way.",
    gradient: "from-yellow-200 to-yellow-300",
    features: ["Business Strategy", "Process Optimization", "Market Analysis", "Growth Planning"],
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Consulting Services",
    description:
      "We provide expert consulting services to help you make informed, strategic decisions. Our tailored solutions drive efficiency, growth, and long-term success.",
    gradient: "from-green-200 to-green-300",
    features: ["Strategic Planning", "Digital Transformation", "Performance Optimization", "Innovation Strategy"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security Solutions",
    description:
      "Protect your business with our comprehensive security solutions. From cybersecurity to data protection, we ensure your digital assets are safe.",
    gradient: "from-purple-200 to-purple-300",
    features: ["Cybersecurity", "Data Protection", "Risk Assessment", "Compliance Management"],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Innovation Labs",
    description:
      "Explore cutting-edge technologies with our innovation labs. We help you stay ahead of the curve with emerging tech solutions.",
    gradient: "from-teal-200 to-teal-300",
    features: ["AI & Machine Learning", "Blockchain Solutions", "IoT Integration", "Emerging Technologies"],
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
    transition: { duration: 0.6 },
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive solutions designed to transform your business and drive sustainable growth through
              innovation and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className={`p-8 rounded-3xl bg-gradient-to-br ${service.gradient} shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer`}
              >
                <div className="text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <ArrowRight className="w-4 h-4 mr-2 text-gray-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-gray-800 font-semibold group-hover:text-gray-900 transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our services can help you achieve your goals and drive sustainable growth.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
