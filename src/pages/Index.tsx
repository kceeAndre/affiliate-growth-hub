import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Results from "@/components/Results";
import About from "@/components/About";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Results />
      <About />
      <Blog />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
