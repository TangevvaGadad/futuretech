import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Leadership from "@/components/leadership";
import Footer from "@/components/footer";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Industries />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}