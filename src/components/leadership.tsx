"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const Leadership = () => {
  const leadership = [
    {
      name: "Jaden Stewart",
      title: "Founder and CEO",
      image: "/pictures/jadenm.jpg",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sanjay R Olekar",
      title: "Co-founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-600 to-blue-700",
    },
    {
      name: "Hanadi",
      title: "Chairman",
      image: "/pictures/hanadi-chairman.jpg",
      color: "from-blue-700 to-blue-800",
    },
    {
      name: "Misbah Uddin",
      title: "Managing Director",
      image: "/pictures/Misbah Uddin-Managing directorm.jpg",
      color: "from-blue-800 to-blue-900",
    },
    {
      name: "Prasanna Kumar MR",
      title: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-400 to-blue-500",
    },
    {
      name: "Samah",
      title: "Chief Operating Officer",
      image: "/pictures/samah-coom.jpg",
      color: "from-blue-300 to-blue-400",
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="leadership" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Global Leadership Team
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {leadership.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-150 border-0 bg-gray-800 relative overflow-hidden group-hover:bg-gray-750">
                {/* Background Gradient Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity duration-150">
                  <div
                    className={`w-full h-full bg-gradient-to-r ${member.color} rounded-full blur-3xl`}
                  />
                </div>

                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="w-full aspect-square mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-600 relative border border-gray-600 group-hover:border-gray-500 transition-colors duration-100 flex items-center justify-center">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={256}
                      height={256}
                      className="object-contain group-hover:scale-105 transition-transform duration-100"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-base">{member.title}</p>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex justify-end">
                    <div className="w-9 h-9 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-all duration-100 cursor-pointer group-hover:scale-110">
                      <Linkedin className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
