"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight, Menu, X } from "lucide-react";

// Services data (accordion style)
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
    details: [
      "Cloud migration & DevOps",
      "Cybersecurity & backup solutions",
      "Managed IT services",
    ],
  },
  {
    title: "AI, Data & Emerging Tech",
    details: [
      "AI/ML, NLP (chatbots, voice AI)",
      "Computer Vision & Data Analytics",
      "Blockchain, IoT & Big Data",
    ],
  },
  {
    title: "Digital Transformation",
    details: [
      "IT consulting & strategy",
      "Process automation (RPA)",
      "Enterprise architecture",
    ],
  },
  {
    title: "Product Innovation",
    details: [
      "MVP & prototyping",
      "API development & integration",
      "AR/VR & Metaverse solutions",
    ],
  },
  {
    title: "Industry-specific Solutions",
    details: [
      "FinTech, Healthcare, E-commerce, Education",
      "Government & Smart Cities",
    ],
  },
  {
    title: "Enterprise IT Support",
    details: [
      "Helpdesk & remote support",
      "Maintenance & upgrades",
      "QA & testing",
    ],
  },
  {
    title: "UI/UX & Branding",
    details: [
      "UI/UX design for web & mobile",
      "Branding & digital identity",
    ],
  },
];

// Navigation items (About moved to last)
const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", dropdown: true },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

export default function Navigation() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-primary">
          CareerCoach
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.dropdown ? (
              // Services Dropdown
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => {
                  setServicesOpen(false);
                  setActiveService(null);
                }}
              >
                <button className="flex items-center text-gray-700 font-medium hover:text-primary transition-colors duration-200">
                  {item.name} <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-4 w-[400px] bg-white shadow-2xl rounded-2xl border border-gray-200 p-6 z-50"
                    >
                      <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                      <ul className="space-y-4">
                        {services.map((service, index) => (
                          <li key={index}>
                            <button
                              onClick={() =>
                                setActiveService(
                                  activeService === index ? null : index
                                )
                              }
                              className="w-full flex items-center justify-between text-gray-700 font-medium hover:text-primary transition-colors"
                            >
                              {service.title}
                              <ChevronDown
                                className={`ml-2 w-4 h-4 transition-transform ${
                                  activeService === index ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {activeService === index && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="mt-2 pl-4 space-y-2 text-sm text-gray-600"
                                >
                                  {service.details.map((detail, i) => (
                                    <li
                                      key={i}
                                      className="flex items-center gap-2"
                                    >
                                      <ArrowRight className="w-4 h-4 text-gray-500" />
                                      {detail}
                                    </li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="relative text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            )
          )}

          <Button className="gradient-primary hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="flex flex-col space-y-4 p-6">
              {navItems.map((item) =>
                item.dropdown ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-gray-700 font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.ul
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="mt-2 pl-4 space-y-2 text-gray-600"
                        >
                          {services.map((service, i) => (
                            <li key={i}>
                              <p className="font-medium">{service.title}</p>
                              <ul className="pl-4 mt-1 space-y-1 text-sm">
                                {service.details.map((detail, j) => (
                                  <li key={j} className="flex items-center gap-2">
                                    <ArrowRight className="w-4 h-4 text-gray-500" />
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 font-medium hover:text-primary"
                  >
                    {item.name}
                  </a>
                )
              )}

              <Button className="gradient-primary w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
