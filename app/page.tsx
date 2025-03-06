import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubHero from "@/components/SubHer";
import Services from "@/components/Services";
import ServiceEmphasis from "@/components/ServiceEmphasis";
import Testimonials from "@/components/Testimonials";
import Satisfaction from "@/components/Satisfaction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    

      <Navbar />
      <Hero/>
      <SubHero/>
      <Services/>
      <ServiceEmphasis/>
      <Testimonials/>
      <Satisfaction/>
      <Footer companyName={"Pest Control"}/>
      {/* Other sections here */}
      </div>
  
  );
}
