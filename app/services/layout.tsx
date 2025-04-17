import Advantages from "@/components/Advantages";
import ClientLogos from "@/components/Clients";
import ServiceAreas from "@/components/ServiceAreas";
import OurServices from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Link from "next/link";
import { ReactNode } from "react";    

// app/services/layout.tsx
export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative w-full bg-cover bg-center flex items-center justify-center flex-col ">
      <div>
        {children}
        <OurServices/>
        <Advantages/>
        <ServiceAreas />
        <ClientLogos />
        <Testimonials />
      </div>
    </section>
  );
}
