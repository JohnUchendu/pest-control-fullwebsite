import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Contact Us</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <Phone size={20} className="text-green-700" />
          <Link href="tel:+1234567890" className="text-blue-600 hover:underline">(123) 456-7890</Link>
        </li>
        <li className="flex items-center space-x-2">
          <Mail size={20} className="text-green-700" />
          <Link href="mailto:info@pestcontrol.com" className="text-blue-600 hover:underline">info@pestcontrol.com</Link>
        </li>
        <li className="flex items-center space-x-2">
          <MapPin size={20} className="text-green-700" />
          <span>123 Pest Street, Bugsville, USA</span>
        </li>
        <li className="flex items-center space-x-2">
          <Facebook size={20} className="text-green-700" />
          <Link href="https://facebook.com/pestcontrol" target="_blank" className="text-blue-600 hover:underline">Facebook</Link>
        </li>
        <li className="flex items-center space-x-2">
          <Instagram size={20} className="text-green-700" />
          <Link href="https://instagram.com/pestcontrol" target="_blank" className="text-blue-600 hover:underline">Instagram</Link>
        </li>
        <li className="flex items-center space-x-2">
          <MessageCircle size={20} className="text-green-700" />
          <Link href="https://wa.me/1234567890" target="_blank" className="text-blue-600 hover:underline">WhatsApp</Link>
        </li>
      </ul>
    </div>
  );
}
