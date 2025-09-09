import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import Leadership from "@/components/leadership";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import OurWork from "@/components/ourwork";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <br />
      <br />
      <Hero />
      <About />
      <Services />
      <Industries />
      <OurWork />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}