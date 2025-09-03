"use client";

import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Brain,
  RefreshCw,
  Lightbulb,
  Building,
  Headphones,
  Palette,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description:
        "Custom web & mobile applications, enterprise solutions, and SaaS platforms built with cutting-edge technologies.",
      features: ["Web & Mobile Apps", "Enterprise Solutions", "SaaS & Cloud Apps"],
      bg: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure",
      description:
        "Scalable cloud solutions, DevOps practices, and comprehensive IT infrastructure management.",
      features: ["Cloud Migration", "DevOps & Security", "Managed IT Services"],
      bg: "bg-indigo-100",
      iconBg: "bg-indigo-500",
    },
    {
      icon: Brain,
      title: "AI, Data & Emerging Tech",
      description:
        "Leverage artificial intelligence, machine learning, and data analytics to drive innovation.",
      features: ["AI/ML & NLP", "Computer Vision", "Blockchain & IoT"],
      bg: "bg-yellow-100",
      iconBg: "bg-yellow-500",
    },
    {
      icon: RefreshCw,
      title: "Digital Transformation",
      description:
        "Transform your business processes with strategic IT consulting and automation solutions.",
      features: ["IT Consulting", "Process Automation", "Enterprise Architecture"],
      bg: "bg-green-100",
      iconBg: "bg-green-500",
    },
    {
      icon: Lightbulb,
      title: "Product Innovation",
      description:
        "From concept to market, we help you build innovative products that make a difference.",
      features: ["MVP & Prototyping", "API Development", "AR/VR Solutions"],
      bg: "bg-purple-100",
      iconBg: "bg-purple-500",
    },
    {
      icon: Building,
      title: "Industry-specific Solutions",
      description:
        "Tailored solutions for FinTech, Healthcare, E-commerce, Education, and Smart Cities.",
      features: ["FinTech Solutions", "Healthcare Tech", "Smart Cities"],
      bg: "bg-orange-100",
      iconBg: "bg-orange-500",
    },
    {
      icon: Headphones,
      title: "Enterprise IT Support",
      description:
        "Comprehensive IT support services to keep your systems running smoothly and securely.",
      features: ["24/7 Helpdesk", "Remote Support", "QA & Testing"],
      bg: "bg-teal-100",
      iconBg: "bg-teal-500",
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      description:
        "Beautiful, intuitive designs that engage users and strengthen your brand identity.",
      features: ["UI/UX Design", "Brand Identity", "Digital Marketing"],
      bg: "bg-red-100",
      iconBg: "bg-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section id="services" className="py-20 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive{" "}
            <span className="text-gradient">Technology Solutions</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            From software development to AI solutions, we provide end-to-end
            technology services that drive innovation and growth.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${service.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div
                className={`${service.iconBg} w-16 h-16 flex items-center justify-center rounded-xl mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-center text-gray-600 text-sm"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
