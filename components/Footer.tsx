import React from "react";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
        {/* Logo & Quick Links */}
        <div>
          <div className="mb-4">
            <Image src="/eversafelogo.PNG" alt="Ever -safe environmental services" width={150} height={40} />
          </div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact Us
              </a>
            </li>
            {/* <li>
              <a href="/blog" className="hover:text-white">
                Blog
              </a>
            </li> */}
          </ul>
        </div>

        {/* Residential Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Residential Services</h4>
          <ul className="space-y-2">
            <li>Termite Control</li>
            <li>Ant Extermination</li>
            <li>Rodent Removal</li>
            <li>Bed Bug Treatment</li>
            <li>General Pest Control</li>
          </ul>
        </div>

        {/* Commercial Services */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Commercial Services</h4>
          <ul className="space-y-2">
            <li>Office Pest Control</li>
            <li>Warehouse Treatment</li>
            <li>Restaurant Protection</li>
            <li>Hotel Disinfection</li>
            <li>Retail Store Services</li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Facebook width={20} height={20} />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Instagram width={20} height={20} />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Twitter width={20} height={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 py-6 divide-y md:divide-y-0 md:divide-x divide-gray-700 gap-4 md:gap-0">
        {/* Phone */}
        <div className="flex items-center gap-2 px-4">
          <Phone size={18} />
          <span>+2348034941001</span>
        </div>
        {/* Email */}
        <div className="flex items-center gap-2 px-4">
          <Mail size={18} />
          <span>info@Ever-safeenvironmentalservices.com</span>
        </div>
        {/* Address */}
        <div className="flex items-center gap-2 px-4">
          <MapPin size={18} />
          <span>Honeymoon plaza, 14 Rumuola Rd, Port Harcourt 500102, Rivers, Nigeria</span>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 pb-6">
        &copy; {new Date().getFullYear()} Ever-safe environmental services All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
