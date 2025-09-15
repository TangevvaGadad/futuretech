"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Star, Users, Zap, CheckCircle } from "lucide-react"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const contactInfo = [
  {
    icon: <Mail className="w-8 h-8" />,
    title: "Email Us",
    details: "hello@futuretech.com",
    subtitle: "We&apos;ll respond within 24 hours",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    textColor: "text-gray-800",
  },
  {
    icon: <Phone className="w-8 h-8" />,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    subtitle: "Mon-Fri 9AM-6PM EST",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-600",
    textColor: "text-gray-800",
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: "Visit Us",
    details: "123 Business Ave, Suite 100",
    subtitle: "New York, NY 10001",
    bgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
    textColor: "text-gray-800",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Business Hours",
    details: "Monday - Friday",
    subtitle: "9:00 AM - 6:00 PM EST",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    textColor: "text-gray-800",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/contact/page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to submit form")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", company: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      console.error("Error submitting form:", err)
      // You can add error state handling here if needed
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-soft bubble-container">
      {/* Beautiful Bubble Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      {/* Hero Section */}
      <Navigation />
      <section className="pt-32 pb-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{duration: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full">
                <span className="text-purple-700 font-semibold">Let&apos;s Connect</span>
              </div>
            </motion.div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Get In{" "}
              <span className="text-gradient">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Ready to transform your business? Let&apos;s discuss how we can help you achieve your goals and drive
              sustainable growth.
            </p>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12"
            >
              {[
                { icon: <Users className="w-6 h-6" />, text: "Happy Clients", color: "text-blue-600" },
                { icon: <Star className="w-6 h-6" />, text: "98% Satisfaction", color: "text-yellow-600" },
                { icon: <Zap className="w-6 h-6" />, text: "24/7 Support", color: "text-green-600" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
                >
                  <div className={stat.color}>{stat.icon}</div>
                  <span className="font-semibold text-gray-700">{stat.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative h-full"
              >
                <div className={`relative p-8 rounded-2xl ${info.bgColor} shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full flex flex-col`}>
                  <div className="flex-1 flex flex-col justify-center">
                    <motion.div 
                      className={`${info.iconColor} mb-6 flex justify-center`}
                      whileHover={{ 
                        scale: 1.1, 
                        transition: { duration: 0.3 }
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <h3 className={`text-xl font-bold ${info.textColor} mb-3`}>{info.title}</h3>
                    <p className={`${info.textColor} font-semibold mb-2 text-lg`}>{info.details}</p>
                    <p className={`${info.textColor} opacity-80 text-sm`}>{info.subtitle}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-purple-200/30">
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Send us a Message</h2>
                </div>
                <p className="text-gray-600">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="Your full name"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                          placeholder="your@email.com"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
                        placeholder="Your company name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-purple-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none bg-white/80 backdrop-blur-sm"
                        placeholder="Tell us about your project or how we can help..."
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-primary py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                    <p className="text-gray-600">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-red-100/50 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-pink-200/30">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Find Our Office</h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Visit us at our headquarters in the heart of New York City.
                </p>
                <motion.div 
                  className="flex items-center text-gray-700 bg-gradient-to-r from-pink-50 to-red-50 p-4 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-5 h-5 mr-2 text-pink-600" />
                  <span className="font-semibold">123 Business Ave, Suite 100, New York, NY 10001</span>
                </motion.div>
              </motion.div>

              {/* Google Maps Embed */}
              <motion.div 
                className="rounded-2xl overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.02 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878459418!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1635959542834!5m2!1sen!2sus"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FutureTech Office Location"
                />
              </motion.div>

              {/* Quick Contact Options */}
              <motion.div 
                className="mt-6 grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Live Chat
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
