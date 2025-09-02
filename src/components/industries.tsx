"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Radio, 
  Zap, 
  Heart, 
  Monitor,
  TrendingUp
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Revolutionizing learning through innovative educational technology solutions that make quality education accessible to all.",
      features: ["Learning Management Systems", "Virtual Classrooms", "Student Analytics", "Mobile Learning Apps"],
      gradient: "gradient-primary",
      color: "text-blue-600"
    },
    {
      icon: Radio,
      title: "Telecom & Media",
      description: "Enabling seamless communication and media experiences with cutting-edge telecommunications and broadcasting solutions.",
      features: ["5G Network Solutions", "Streaming Platforms", "Content Management", "IoT Connectivity"],
      gradient: "gradient-secondary",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      title: "Energy & Sustainability",
      description: "Powering the future with sustainable energy solutions and smart grid technologies for a greener tomorrow.",
      features: ["Smart Grid Systems", "Renewable Energy", "Energy Analytics", "IoT Monitoring"],
      gradient: "gradient-accent",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Healthcare & Life Sciences",
      description: "Transforming healthcare delivery through digital health solutions, telemedicine, and medical technology innovations.",
      features: ["Telemedicine Platforms", "Health Records", "Medical Devices", "AI Diagnostics"],
      gradient: "gradient-primary",
      color: "text-red-600"
    },
    {
      icon: Monitor,
      title: "Information Technology",
      description: "Empowering businesses with comprehensive IT solutions, cloud infrastructure, and digital transformation services.",
      features: ["Cloud Solutions", "Cybersecurity", "Data Analytics", "System Integration"],
      gradient: "gradient-secondary",
      color: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Emerging Technologies",
      description: "Pioneering the future with AI, blockchain, IoT, and other emerging technologies that shape tomorrow's world.",
      features: ["Artificial Intelligence", "Blockchain Solutions", "IoT Platforms", "AR/VR Applications"],
      gradient: "gradient-accent",
      color: "text-orange-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
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
    <section id="industries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              Industries We Serve
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Transforming <span className="text-gradient">Diverse Industries</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We work across multiple industries, bringing innovative technology solutions 
            that drive growth, efficiency, and positive change.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
                     {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`w-full h-full ${industry.gradient} rounded-full blur-3xl`} />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 group-hover:${industry.color} transition-colors duration-300`}>
                    {industry.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="space-y-3">
                    {industry.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <div className={`w-2 h-2 ${industry.gradient} rounded-full`} />
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry <span className="text-gradient">Impact</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our solutions have transformed businesses across these industries
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "200+", label: "Education Projects" },
              { number: "150+", label: "Healthcare Solutions" },
              { number: "100+", label: "Energy Systems" },
              { number: "300+", label: "IT Implementations" }
                         ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-sm">
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

export default Industries;

