"use client";

import { motion } from "framer-motion";
import { Smartphone, Users, BookOpen, Calendar, MessageCircle, TrendingUp, Shield, Clock } from "lucide-react";
import Image from "next/image";

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

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real-time Communication",
      description: "Seamless connection between parents and school staff"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Tracking",
      description: "Monitor student performance and progress"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Attendance Management",
      description: "Track school in/out timings and attendance"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Parent-Teacher Interaction",
      description: "Facilitate meetings and important discussions"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Activity Monitoring",
      description: "Track extracurricular activities and sports"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Safe platform for sensitive student information"
    }
  ];

  return (
    <section
      id="our-work"
      className="pt-8 pb-12 bg-soft relative overflow-hidden bubble-container"
    >
      {/* Beautiful Bubble Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
        {/* Additional floating elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-20 w-60 h-60 bg-gradient-to-br from-pink-200 to-red-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-25 animate-pulse-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
            Our <span className="text-gradient">Featured Work</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: App Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* App Showcase Container */}
            <div className="relative">
              {/* Main App Card */}
              <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-purple-200/30">
                {/* App Header */}
                <div className="text-center mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    <Smartphone className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Jaja App</h3>
                  <p className="text-gray-600">School Management Solution</p>
                </div>

                {/* App Image */}
                <div className="relative mb-8">
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6">
                    <Image
                      src="/jaja.png"
                      alt="Jaja App Screenshot"
                      width={300}
                      height={400}
                      className="rounded-xl shadow-lg mx-auto"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Clock className="w-4 h-4 text-white" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      y: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Right Side: App Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* App Title & Description */}
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6"
              >
                <Smartphone className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-800">Mobile Application</span>
              </motion.div>
              
              <motion.h3
                variants={itemVariants}
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
              >
                Jaja App
              </motion.h3>
              
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 leading-relaxed mb-8"
              >
                This is an intuitive and user-friendly app designed for school staff and parents to easily stay connected and manage student information. The app helps track attendance, academic performance, extracurricular activities, sports participation, and more. It also allows monitoring of meetings, parent-teacher interactions, school in and out timings, remarks, and other important details. With Jaja App, schools can streamline communication and provide real-time updates, ensuring that parents and staff are always informed and involved in the student&apos;s progress.
              </motion.p>
            </div>

            {/* Features Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group p-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-200/50 hover:border-purple-300/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
