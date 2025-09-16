"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

// Services data
const services = [
  {
    title: "Software Development",
    details: [
      "Web & mobile apps (iOS/Android)",
      "Enterprise solutions (ERP, CRM, HRMS)",
      "SaaS & cloud-native applications",
    ],
  },
  {
    title: "Cloud & IT Infrastructure",
    details: ["Cloud migration & DevOps", "Cybersecurity & backup solutions", "Managed IT services"],
  },
  {
    title: "AI, Data & Emerging Tech",
    details: ["AI/ML, NLP (chatbots, voice AI)", "Computer Vision & Data Analytics", "Blockchain, IoT & Big Data"],
  },
  {
    title: "Digital Transformation",
    details: ["IT consulting & strategy", "Process automation (RPA)", "Enterprise architecture"],
  },
  {
    title: "Product Innovation",
    details: ["MVP & prototyping", "API development & integration", "AR/VR & Metaverse solutions"],
  },
  {
    title: "Industry-specific Solutions",
    details: ["FinTech, Healthcare, E-commerce, Education", "Government & Smart Cities"],
  },
  {
    title: "Enterprise IT Support",
    details: ["Helpdesk & remote support", "Maintenance & upgrades", "QA & testing"],
  },
  {
    title: "UI/UX & Branding",
    details: ["UI/UX design for web & mobile", "Branding & digital identity"],
  },
]

// Navigation items
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
]

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-16 bg-gradient-to-r from-gray-100/95 via-gray-50/90 to-gray-100/95 backdrop-blur-md z-40" />

      <nav className="w-full fixed top-0 left-0 z-50 bg-gradient-to-r from-gray-50/95 via-white/90 to-gray-50/95 backdrop-blur-xl border-b border-gray-200/40 shadow-lg shadow-gray-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <Link href="/" className="group flex items-center">
            <div className="h-10 flex items-center justify-center">
              <Image
                src="/loco/logo2.png"
                alt="FutureTech Logo"
                width={200}
                height={48}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => {
                    setServicesOpen(false)
                    setActiveService(null)
                  }}
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    className="flex items-center text-gray-700 font-medium hover:text-transparent hover:text-gradient transition-all duration-100"
                  >
                    {item.name}
                    <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute left-0 mt-4 w-[450px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-3xl border border-purple-200/30 p-8 z-50 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-red-50/50 rounded-3xl" />

                        <div className="relative z-10">
                          <h3 className="text-xl font-bold mb-6 text-gradient">
                            Our Services
                          </h3>
                          <div className="grid grid-cols-1 gap-3">
                            {services.map((service, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="group"
                              >
                                <button
                                  onClick={() => setActiveService(activeService === index ? null : index)}
                                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50 transition-all duration-100 group-hover:shadow-md"
                                >
                                  <div className="flex items-center">
                                    <span className="text-gray-700 font-medium group-hover:text-gray-900">
                                      {service.title}
                                    </span>
                                  </div>
                                  <motion.div
                                    animate={{ rotate: activeService === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-purple-600" />
                                  </motion.div>
                                </button>

                                <AnimatePresence>
                                  {activeService === index && (
                                    <motion.ul
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="mt-2 pl-6 space-y-2 text-sm text-gray-600 bg-gradient-to-r from-purple-50/30 to-pink-50/30 rounded-lg p-3"
                                    >
                                      {service.details.map((detail, i) => (
                                        <motion.li
                                          key={i}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: i * 0.1 }}
                                          className="flex items-center gap-2 hover:text-gray-800 transition-colors duration-100"
                                        >
                                          <ArrowRight className="w-3 h-3 text-purple-500" />
                                          {detail}
                                        </motion.li>
                                      ))}
                                    </motion.ul>
                                  )}
                                </AnimatePresence>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={`relative transition-all duration-100 font-medium group ${
                      pathname === item.href
                        ? 'text-transparent text-gradient'
                        : 'text-gray-700 hover:text-transparent hover:text-gradient'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 gradient-primary transition-all duration-100 ${
                      pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </Link>
                </motion.div>
              ),
            )}

          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 text-gray-700 hover:from-purple-200 hover:to-pink-200 transition-all duration-100"
          >
            <motion.div animate={{ rotate: mobileOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden border-t border-purple-200/30"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-red-50/30" />

              <div className="relative z-10 flex flex-col space-y-4 p-6">
                {navItems.map((item, index) =>
                  item.dropdown ? (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-gray-700 font-medium p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-100/50 hover:to-blue-200/50 transition-all duration-100"
                      >
                        {item.name}
                        <motion.div animate={{ rotate: servicesOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 pl-4 space-y-3 bg-gradient-to-r from-blue-50/50 to-blue-100/50 rounded-lg p-4"
                          >
                            {services.map((service, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="space-y-2"
                              >
                                <div className="flex items-center">
                                  <p className="font-medium text-gray-800">{service.title}</p>
                                </div>
                                <ul className="pl-6 space-y-1 text-sm text-gray-600">
                                  {service.details.map((detail, j) => (
                                    <li key={j} className="flex items-center gap-2">
                                      <ArrowRight className="w-3 h-3 text-blue-500" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block font-medium p-3 rounded-lg transition-all duration-100 ${
                          pathname === item.href
                            ? 'text-transparent text-gradient bg-gradient-to-r from-purple-100/50 to-pink-100/50'
                            : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-100/50 hover:to-pink-100/50 hover:text-gray-900'
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ),
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
