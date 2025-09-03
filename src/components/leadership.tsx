"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const Leadership = () => {
  const leadership = [
    {
      name: "Alex Chen",
      title: "Co-founder and CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Sarah Rodriguez",
      title: "Co-founder and CTO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Michael Thompson",
      title: "Chief Revenue Officer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Emily Watson",
      title: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      color: "from-orange-500 to-red-600"
    },
    {
      name: "David Kim",
      title: "Head of People",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      color: "from-teal-500 to-cyan-600"
    },
    {
      name: "Lisa Chang",
      title: "Head of Finance",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      color: "from-indigo-500 to-purple-600"
    },
    {
      name: "James Wilson",
      title: "Head of Product",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      color: "from-pink-500 to-rose-600"
    },
    {
      name: "Rachel Green",
      title: "Head of Engineering",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      color: "from-emerald-500 to-green-600"
    },
    {
      name: "Daniel Park",
      title: "Head of Design",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
      color: "from-blue-500 to-purple-600"
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
    <section id="leadership" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Our Leadership
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {leadership.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="p-6 h-full hover:shadow-2xl transition-all duration-500 border-0 bg-gray-800 relative overflow-hidden group">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-r ${member.color} rounded-full blur-3xl`} />
                </div>
                
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-gray-700 to-gray-600">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Member Info */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {member.title}
                    </p>
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <div className="flex justify-end">
                    <div className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer group-hover:scale-110">
                      <Linkedin className="w-4 h-4 text-white" />
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
