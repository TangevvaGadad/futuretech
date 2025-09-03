"use client";

import { motion } from "framer-motion";
import { Search, Monitor, Briefcase, LayoutDashboard } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const services = [
    {
      title: "Global Technology Solutions",
      desc: "We deliver world-class technology solutions that empower communities worldwide. From software development to emerging technologies, we create opportunities and drive sustainable growth.",
      icon: Search,
      bg: "bg-pink-100",
      iconBg: "bg-pink-500",
    },
    {
      title: "Innovation & Emerging Tech",
      desc: "We pioneer breakthrough solutions in AI, blockchain, IoT, and emerging technologies. Our innovations shape tomorrow's world and create sustainable futures.",
      icon: Monitor,
      bg: "bg-indigo-100",
      iconBg: "bg-indigo-500",
    },
    {
      title: "Community Empowerment",
      desc: "We create equal opportunities for refugees and underserved groups through education and technology. Our solutions uplift communities and drive positive change.",
      icon: Briefcase,
      bg: "bg-yellow-100",
      iconBg: "bg-yellow-500",
    },
    {
      title: "Sustainable Development",
      desc: "We build sustainable solutions that shape a brighter tomorrow. Our technology-driven approach ensures long-term impact and environmental responsibility.",
      icon: LayoutDashboard,
      bg: "bg-green-100",
      iconBg: "bg-green-500",
    },
  ];

  return (
    <section id="about" className="py-20 bg-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Mission to{" "}
            <span className="text-gradient">Empower Communities Worldwide</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            We are innovators, creators, and problem-solvers who transform bold ideas into technologies that solve real problems, create opportunities, and deliver hope to communities worldwide.
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
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${service.bg} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500`}
            >
              <div
                className={`${service.iconBg} w-16 h-16 flex items-center justify-center rounded-xl mb-6`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
