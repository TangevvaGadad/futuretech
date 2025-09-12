"use client";

import Navigation from "@/components/navigation";
import AboutHeader from "@/components/about/AboutHeader";
import AboutContent from "@/components/about/AboutContent";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-soft">
      
      {/* Bubble Animations */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>
      </div>

      {/* Navbar */}
      <Navigation />

      {/* Page Content */}
      <main className="relative z-10">
        {/* About Header Section */}
        <section className="pt-24 pb-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AboutHeader />
          </div>
        </section>

        {/* About Content Section */}
          <AboutContent />


            <WhyChooseUs />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
