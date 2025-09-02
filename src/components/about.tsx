"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              About FutureTech
            </span>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Driven by the Belief That{" "}
            <span className="text-gradient">Technology Transforms Lives</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We are innovators, creators, and problem-solvers who aim to change the world 
            and uplift communities through breakthrough solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Vision */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower communities worldwide with world-class technology, create equal 
                opportunities for refugees and underserved groups through education, and build 
                sustainable solutions that shape a brighter tomorrow.
              </p>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To transform bold ideas into technologies that solve real problems, create 
                opportunities, and deliver hope to communities worldwide through innovative 
                and sustainable solutions.
              </p>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, integrity, and impact drive everything we do. We believe in 
                creating technology that serves humanity and builds bridges between 
                communities across the globe.
              </p>
            </Card>
          </motion.div>
        </motion.div>

        {/* Impact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Making a <span className="text-gradient">Global Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solutions reach communities worldwide, creating lasting positive change
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, number: "1M+", label: "Lives Impacted" },
              { icon: Target, number: "500+", label: "Projects Completed" },
              { icon: Heart, number: "50+", label: "Countries Served" },
              { icon: Eye, number: "99%", label: "Success Rate" }
                         ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

