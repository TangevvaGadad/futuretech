"use client"

import { motion } from "framer-motion"
import { GraduationCap, Radio, Zap, Heart, Monitor, Cpu, ArrowRight, Star, Users, TrendingUp } from "lucide-react"
import type { Variants } from "framer-motion"
import Navigation from "@/components/navigation"
import Image from "next/image"

const industries = [
  {
    icon: <GraduationCap className="w-12 h-12" />,
    title: "Education & EdTech",
    description:
      "Revolutionizing learning through innovative educational technology solutions that make quality education accessible to all.",
    gradient: "from-purple-100 to-pink-100",
    bgGradient: "from-purple-50 to-pink-50",
    stats: "500+ Educational Institutions",
    features: ["E-Learning Platforms", "Student Management Systems", "Virtual Classrooms", "Educational Analytics"],
    image: "/services.png",
    color: "purple",
  },
  {
    icon: <Radio className="w-12 h-12" />,
    title: "Telecom & Media",
    description:
      "Enabling seamless communication and media experiences with cutting-edge telecommunications and broadcasting solutions.",
    gradient: "from-pink-100 to-red-100",
    bgGradient: "from-pink-50 to-red-50",
    stats: "200+ Media Companies",
    features: ["5G Infrastructure", "Streaming Solutions", "Content Management", "Network Optimization"],
    image: "/business-meeting-thumbnail.png",
    color: "pink",
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Energy & Sustainability",
    description:
      "Powering the future with sustainable energy solutions and smart grid technologies for a greener tomorrow.",
    gradient: "from-purple-200 to-pink-200",
    bgGradient: "from-purple-100 to-pink-100",
    stats: "150+ Energy Projects",
    features: ["Smart Grid Systems", "Renewable Energy", "Energy Analytics", "Carbon Footprint Tracking"],
    image: "/lap.png",
    color: "purple",
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Healthcare & Life Sciences",
    description:
      "Transforming healthcare delivery through digital health solutions, telemedicine, and medical technology innovations.",
    gradient: "from-pink-200 to-red-200",
    bgGradient: "from-pink-100 to-red-100",
    stats: "300+ Healthcare Providers",
    features: ["Telemedicine Platforms", "Electronic Health Records", "Medical IoT", "Health Analytics"],
    image: "/girlwithlaptop.png",
    color: "pink",
  },
  {
    icon: <Monitor className="w-12 h-12" />,
    title: "Information Technology",
    description:
      "Empowering businesses with comprehensive IT solutions, cloud infrastructure, and digital transformation services.",
    gradient: "from-purple-300 to-pink-300",
    bgGradient: "from-purple-200 to-pink-200",
    stats: "1000+ IT Projects",
    features: ["Cloud Migration", "DevOps Solutions", "Cybersecurity", "Digital Transformation"],
    image: "/boy.png",
    color: "purple",
  },
  {
    icon: <Cpu className="w-12 h-12" />,
    title: "Emerging Technologies",
    description:
      "Pioneering the future with AI, blockchain, IoT, and other emerging technologies that shape tomorrow's world.",
    gradient: "from-pink-300 to-red-300",
    bgGradient: "from-pink-200 to-red-200",
    stats: "100+ Innovation Projects",
    features: ["Artificial Intelligence", "Blockchain Solutions", "IoT Ecosystems", "Quantum Computing"],
    image: "/boy1.png",
    color: "pink",
  },
]


const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}


export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-soft bubble-container">
      {/* Beautiful Bubble Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      {/* Hero Section */}
      <Navigation />
      <section className="pt-32 pb-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Industries We{" "}
              <span className="text-gradient">
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

      {/* Industries Showcase */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                variants={itemVariants}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Content Side */}
                <motion.div 
                  className="flex-1 space-y-8"
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-4">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg`}
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <div className="text-white">
                        {industry.icon}
                      </div>
                    </motion.div>
                    
                    <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                      {industry.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-semibold text-gray-800">{industry.stats}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-800">Expert Team</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="font-semibold text-gray-800">Proven Results</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {industry.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm hover:bg-white/80 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r ${industry.gradient} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>

                {/* Image Side */}
                <motion.div 
                  className="flex-1 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${industry.bgGradient} rounded-3xl blur-3xl opacity-30`}
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                      <div className="aspect-square relative overflow-hidden rounded-2xl">
                        <Image
                          src={industry.image}
                          alt={industry.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${industry.gradient} opacity-20`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 lg:px-8 gradient-primary relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Our Impact Across Industries</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Delivering measurable results and driving innovation across diverse sectors worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2000+", label: "Projects Completed", icon: <Star className="w-8 h-8" /> },
              { number: "50+", label: "Industries Served", icon: <Users className="w-8 h-8" /> },
              { number: "98%", label: "Client Satisfaction", icon: <TrendingUp className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Zap className="w-8 h-8" /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/30 transition-all duration-300">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-purple-100 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
