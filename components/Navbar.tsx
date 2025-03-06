"use client";

import { Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-700">Pest Control</h1>

        {/* Call Button */}
        <div className="flex items-center space-x-2 text-green-700 font-semibold">
          <Phone size={20} />
          <span>Call: (123) 456-7890</span>
        </div>
      </div>
    </nav>
  );
}
