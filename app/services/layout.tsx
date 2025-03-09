import Link from "next/link";
import { ReactNode } from "react";

// app/services/layout.tsx
export default function ServicesLayout({ children }: { children: ReactNode }) {
  return (
    <section className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center flex-col min-h-screen">
        
      <h2 className="text-2xl font-bold text-green-700 mb-4">Our Pest Control Services</h2>
      <p className="text-gray-700 mb-4">
        We provide expert pest control solutions to ensure your home and business remain safe and pest-free.
      </p>
      <nav className="mb-6">
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-green-700 font-semibold">
          <li><Link href="/services/ant" className="hover:underline">Ant Control</Link></li>
          <li><Link href="/services/cockroach" className="hover:underline">Cockroach Control</Link></li>
          <li><Link href="/services/termite" className="hover:underline">Termite Control</Link></li>
          <li><Link href="/services/rat" className="hover:underline">Rat Control</Link></li>
        </ul>
      </nav>
      <div>{children}</div>
    </section>
  );
}
