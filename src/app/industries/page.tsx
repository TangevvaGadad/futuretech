"use client"

import { motion } from "framer-motion"
import { GraduationCap, Radio, Zap, Heart, Monitor, Cpu, ArrowRight } from "lucide-react"

const industries = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Education & EdTech",
    description:
      "Revolutionizing learning through innovative educational technology solutions that make quality education accessible to all.",
    gradient: "from-pink-200 to-pink-300",
    stats: "500+ Educational Institutions",
    features: ["E-Learning Platforms", "Student Management Systems", "Virtual Classrooms", "Educational Analytics"],
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: "Telecom & Media",
    description:
      "Enabling seamless communication and media experiences with cutting-edge telecommunications and broadcasting solutions.",
    gradient: "from-indigo-200 to-indigo-300",
    stats: "200+ Media Companies",
    features: ["5G Infrastructure", "Streaming Solutions", "Content Management", "Network Optimization"],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Energy & Sustainability",
    description:
      "Powering the future with sustainable energy solutions and smart grid technologies for a greener tomorrow.",
    gradient: "from-yellow-200 to-yellow-300",
    stats: "150+ Energy Projects",
    features: ["Smart Grid Systems", "Renewable Energy", "Energy Analytics", "Carbon Footprint Tracking"],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Healthcare & Life Sciences",
    description:
      "Transforming healthcare delivery through digital health solutions, telemedicine, and medical technology innovations.",
    gradient: "from-green-200 to-green-300",
    stats: "300+ Healthcare Providers",
    features: ["Telemedicine Platforms", "Electronic Health Records", "Medical IoT", "Health Analytics"],
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Information Technology",
    description:
      "Empowering businesses with comprehensive IT solutions, cloud infrastructure, and digital transformation services.",
    gradient: "from-purple-200 to-purple-300",
    stats: "1000+ IT Projects",
    features: ["Cloud Migration", "DevOps Solutions", "Cybersecurity", "Digital Transformation"],
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Emerging Technologies",
    description:
      "Pioneering the future with AI, blockchain, IoT, and other emerging technologies that shape tomorrow's world.",
    gradient: "from-teal-200 to-teal-300",
    stats: "100+ Innovation Projects",
    features: ["Artificial Intelligence", "Blockchain Solutions", "IoT Ecosystems", "Quantum Computing"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Industries We{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 bg-clip-text text-transparent">
                Serve
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Transforming industries through innovative technology solutions and strategic partnerships that drive
              meaningful change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -15,
                  transition: { duration: 0.3 },
                }}
                className={`relative p-8 rounded-3xl bg-gradient-to-br ${industry.gradient} shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 rounded-full bg-white/20"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-white/10"></div>
                </div>

                <div className="relative z-10">
                  <motion.div
                    className="text-gray-700 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {industry.icon}
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{industry.title}</h3>

                  <p className="text-gray-700 mb-6 leading-relaxed">{industry.description}</p>

                  <div className="mb-6">
                    <span className="inline-block bg-white/50 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {industry.stats}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {industry.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 mr-2 text-gray-600" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-800 font-semibold group-hover:text-gray-900 transition-colors"
                  >
                    Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Impact Across Industries</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Delivering measurable results and driving innovation across diverse sectors worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Projects Completed" },
              { number: "50+", label: "Industries Served" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
