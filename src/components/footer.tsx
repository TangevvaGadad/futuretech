"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github
} from "lucide-react";
import TinyGif from "@/components/ui/tiny-gif";

const Footer = () => {
  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "News", href: "#news" }
    ],
    services: [
      { name: "Software Development", href: "#services" },
      { name: "Cloud Solutions", href: "#services" },
      { name: "AI & Data", href: "#services" },
      { name: "Digital Transformation", href: "#services" }
    ],
    industries: [
      { name: "Education", href: "#industries" },
      { name: "Healthcare", href: "#industries" },
      { name: "Energy", href: "#industries" },
      { name: "Telecom", href: "#industries" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "Documentation", href: "#docs" },
      { name: "Support Center", href: "#support" },
      { name: "Privacy Policy", href: "#privacy" }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <span className="text-2xl font-bold">FutureTech</span>
                </div>
                <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                  Empowering communities worldwide with world-class technology, creating equal 
                  opportunities through education, and building sustainable solutions that shape a brighter tomorrow.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-5 h-5" />
                    <span>contact@futuretech.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-5 h-5" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-5 h-5" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h4 className="text-lg font-semibold mb-4 capitalize text-white">
                  {category}
                </h4>
                <ul className="space-y-3 flex-1">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © 2024 FutureTech. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-6"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Decorative tiny GIF in the corner */}
        <div className="absolute right-4 bottom-4 opacity-80 hover:opacity-100 transition-opacity">
          <TinyGif src="/bird.gif" alt="decorative" className="animate-float" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

