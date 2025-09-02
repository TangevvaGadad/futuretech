"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import TinyGif from "@/components/ui/tiny-gif";
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
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower communities worldwide with world-class technology, create equal 
                  opportunities for refugees and underserved groups through education, and build 
                  sustainable solutions that shape a brighter tomorrow.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Mission */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-purple-50 to-pink-100 relative overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To transform bold ideas into technologies that solve real problems, create 
                  opportunities, and deliver hope to communities worldwide through innovative 
                  and sustainable solutions.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Values */}
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden group">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-3xl" />
              </div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Our Values</h3>
                <p className="text-gray-600 leading-relaxed">
                  Innovation, integrity, and impact drive everything we do. We believe in 
                  creating technology that serves humanity and builds bridges between 
                  communities across the globe.
                </p>
              </div>
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
              { icon: Users, number: "1M+", label: "Lives Impacted", color: "from-blue-500 to-indigo-600", bgColor: "from-blue-50 to-indigo-100" },
              { icon: Target, number: "500+", label: "Projects Completed", color: "from-purple-500 to-pink-600", bgColor: "from-purple-50 to-pink-100" },
              { icon: Heart, number: "50+", label: "Countries Served", color: "from-green-500 to-emerald-600", bgColor: "from-green-50 to-emerald-100" },
              { icon: Eye, number: "99%", label: "Success Rate", color: "from-orange-500 to-red-600", bgColor: "from-orange-50 to-red-100" }
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden group"
                style={{ background: `linear-gradient(135deg, ${stat.bgColor.split(' ')[1]}, ${stat.bgColor.split(' ')[3]})` }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-r ${stat.color} rounded-full blur-2xl`} />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
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

