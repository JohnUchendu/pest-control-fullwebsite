// "use client";

// import { Phone } from "lucide-react";

// export default function Navbar() {
//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <h1 className="text-2xl font-bold text-green-700">Pest Control</h1>

//         {/* Call Button */}
//         <div className="flex items-center space-x-2 text-green-700 font-semibold">
//           <Phone size={20} />
//           <span>Call: (123) 456-7890</span>
//         </div>
//       </div>
//     </nav>
//   );
// }


"use client";

import { useState } from "react";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">Pest Control</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-green-700 font-semibold">
          <li>
            <Link href="/" className="hover:text-green-500">Home</Link>
          </li>
          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <span className="flex items-center hover:text-green-500">
              Services <ChevronDown size={16} className="ml-1" />
            </span>
            {servicesOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-40">
                <li><Link href="/services/termite" className="block p-2 hover:bg-gray-200">Termite Control</Link></li>
                <li><Link href="/services/ant" className="block p-2 hover:bg-gray-200">Ant Control</Link></li>
                <li><Link href="/services/rat" className="block p-2 hover:bg-gray-200">Rat Control</Link></li>
                <li><Link href="/services/cockroach" className="block p-2 hover:bg-gray-200">Roach Control</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/about" className="hover:text-green-500">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-green-500">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-2 bg-green-100 p-4 space-y-2 text-center text-green-700 font-semibold">
          <li><Link href="/" className="block p-2 hover:bg-green-200">Home</Link></li>
          <li className="cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
            <span className="flex justify-center items-center hover:text-green-500">
              Services <ChevronDown size={16} className="ml-1" />
            </span>
            {servicesOpen && (
              <ul className="mt-2 bg-green-200 p-2 rounded-md">
                <li><Link href="/services/termite" className="block p-2 hover:bg-green-300">Termite Control</Link></li>
                <li><Link href="/services/ant" className="block p-2 hover:bg-green-300">Ant Control</Link></li>
                <li><Link href="/services/rats" className="block p-2 hover:bg-green-300">Rat Control</Link></li>
                <li><Link href="/services/roaches" className="block p-2 hover:bg-green-300">Roach Control</Link></li>
              </ul>
            )}
          </li>
          <li><Link href="/about" className="block p-2 hover:bg-green-200">About</Link></li>
          <li><Link href="/contact" className="block p-2 hover:bg-green-200">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
}
