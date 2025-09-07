"use client"

import Navigation from "@/components/navigation";
import AboutHeader from "@/components/about/AboutHeader"
import AboutContent from "@/components/about/AboutContent"
import WhyChooseUs from "@/components/about/WhyChooseUs"
import Skills from "@/components/about/Skills"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navigation />
      <br />
      <br />
    <br />
      <AboutHeader />
      <AboutContent />
      <WhyChooseUs />
      <Skills />
      <Footer />
    </div>
  )
}
