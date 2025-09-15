"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Lottie from "lottie-react"
import { useState } from "react"

// Import the animation JSON (place your file in /lotties folder)
import contactAnim from "../lotties/contact.json" assert { type: "json" }

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact/section", {
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
      setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section
      id="contact"
      className="py-20 bg-soft relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
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
            Get in <span className="text-gradient">Touch with Us</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have questions, ideas, or collaboration opportunities? Send us a
            message and we&apos;ll get back to you soon!
          </motion.p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Contact Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-3xl shadow-lg flex flex-col space-y-6"
          >
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
              >
                {error}
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
              >
                Message sent successfully! We&apos;ll get back to you soon.
              </motion.div>
            )}

            <motion.div variants={itemVariants}>
              <Label htmlFor="firstName">Firstname *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Your first name"
                className="mt-2"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Label htmlFor="lastName">Lastname *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="mt-2"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="mt-2"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="mt-2"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                className="mt-2"
                rows={5}
                required
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-4"
            >
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="btn-primary px-8 py-3 shadow-lg hover:shadow-2xl disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </motion.div>
          </motion.form>

          {/* Right Side - Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-56 h-56 md:w-72 md:h-72">
              <Lottie animationData={contactAnim} loop={true} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
