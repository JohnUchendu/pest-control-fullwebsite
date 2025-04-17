import { Metadata } from "next";

import Hero from "@/components/Hero";

import Services from "@/components/Services";
import ServiceEmphasis from "@/components/ServiceEmphasis";
import Testimonials from "@/components/Testimonials";

// import TrustBadges from "@/components/TrustBadges";
import About from "@/components/About";
import AboutMore from "@/components/AboutMore";
import OurServices from "@/components/Services";
import Advantages from "@/components/Advantages";
import ClientLogos from "@/components/Clients";
import ServiceAreas from "@/components/ServiceAreas";
import Faq from "@/components/Faq";
import SubHero from "@/components/SubHer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Ever-safe environmental services",
  description: "Number 1 Pest control with Ever-safe environmental services",
  generator: "",
  applicationName: "Ever-safe environmental services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ever-safe environmental services",
    "Pest Contol Services",
    "Termite pest control service",
    "rat pest control service",
    "ants pest control service",
    "cockroach pest control service",
    "termites extermination",
    "rodents extermination",
    "ants extermination",
    "bed bugs pest control service",
    "bed bugs home service",
    "bed bugs boarding school"
  ],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <SubHero />
      <AboutMore />
      <OurServices />
      <ServiceEmphasis />
      <Advantages />
      <ClientLogos />
      <Testimonials />
      <ServiceAreas />
      <Faq />
      {/* Other sections here */}
    </div>
  );
};

export default Home;
