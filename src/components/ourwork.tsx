"use client";

import { motion } from "framer-motion";
import Lottie from "lottie-react";

// Import your Lottie JSON (place in /lotties)
import workAnim from "../lotties/ourwork.json" assert { type: "json" };

const OurWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="our-work"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-start"
        >
          <div className="w-48 h-48 md:w-60 md:h-60">
            <Lottie animationData={workAnim} loop={true} />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="space-y-10"
        >
          {/* Section Header */}
          <div className="lg:text-left">
            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
            >
              Our <span className="text-gradient">Work</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 max-w-2xl"
            >
              We craft impactful digital experiences that blend{" "}
              <span className="font-semibold text-purple-600">creativity</span>{" "}
              and{" "}
              <span className="font-semibold text-pink-600">technology</span>.
              Here are some highlights of what we’ve built.
            </motion.p>
          </div>

          {/* Showcase Highlights (No Cards, just minimal modern blocks) */}
          <motion.ul
            variants={containerVariants}
            className="space-y-6 border-l-2 border-purple-300 pl-6"
          >
            {[
              {
                title: "Web Platforms",
                desc: "Scalable and user-friendly websites with seamless UI/UX.",
              },
              {
                title: "AI Solutions",
                desc: "Smart applications powered by machine learning and NLP.",
              },
              {
                title: "IoT & Automation",
                desc: "Connected systems that bring real-world efficiency.",
              },
              {
                title: "Sustainable Tech",
                desc: "Solutions designed for long-term social impact.",
              },
            ].map((project, i) => (
              <motion.li key={i} variants={itemVariants}>
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  {project.title}
                </h3>
                <p className="text-gray-600 ml-5">{project.desc}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
