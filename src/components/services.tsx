"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cloud, 
  Brain, 
  RefreshCw, 
  Lightbulb, 
  Building, 
  Headphones, 
  Palette 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom web & mobile applications, enterprise solutions, and SaaS platforms built with cutting-edge technologies.",
      features: ["Web & Mobile Apps", "Enterprise Solutions", "SaaS & Cloud Apps"],
      gradient: "gradient-primary"
    },
    {
      icon: Cloud,
      title: "Cloud & IT Infrastructure",
      description: "Scalable cloud solutions, DevOps practices, and comprehensive IT infrastructure management.",
      features: ["Cloud Migration", "DevOps & Security", "Managed IT Services"],
      gradient: "gradient-secondary"
    },
    {
      icon: Brain,
      title: "AI, Data & Emerging Tech",
      description: "Leverage artificial intelligence, machine learning, and data analytics to drive innovation.",
      features: ["AI/ML & NLP", "Computer Vision", "Blockchain & IoT"],
      gradient: "gradient-accent"
    },
    {
      icon: RefreshCw,
      title: "Digital Transformation",
      description: "Transform your business processes with strategic IT consulting and automation solutions.",
      features: ["IT Consulting", "Process Automation", "Enterprise Architecture"],
      gradient: "gradient-primary"
    },
    {
      icon: Lightbulb,
      title: "Product Innovation",
      description: "From concept to market, we help you build innovative products that make a difference.",
      features: ["MVP & Prototyping", "API Development", "AR/VR Solutions"],
      gradient: "gradient-secondary"
    },
    {
      icon: Building,
      title: "Industry-specific Solutions",
      description: "Tailored solutions for FinTech, Healthcare, E-commerce, Education, and Smart Cities.",
      features: ["FinTech Solutions", "Healthcare Tech", "Smart Cities"],
      gradient: "gradient-accent"
    },
    {
      icon: Headphones,
      title: "Enterprise IT Support",
      description: "Comprehensive IT support services to keep your systems running smoothly and securely.",
      features: ["24/7 Helpdesk", "Remote Support", "QA & Testing"],
      gradient: "gradient-primary"
    },
    {
      icon: Palette,
      title: "UI/UX & Branding",
      description: "Beautiful, intuitive designs that engage users and strengthen your brand identity.",
      features: ["UI/UX Design", "Brand Identity", "Digital Marketing"],
      gradient: "gradient-secondary"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="py-20 bg-white">
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
              Our Services
            </Badge>
          </motion.div>
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive <span className="text-gradient">Technology Solutions</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            From software development to AI solutions, we provide end-to-end technology 
            services that drive innovation and growth.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
                     {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-gray-50">
                <div className={`w-14 h-14 ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Ideas?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                                 Let&apos;s discuss how our technology solutions can help your business 
                achieve its goals and make a positive impact.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

