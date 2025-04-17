'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsappWidget() {
  const phoneNumber = '2348034941001'; // Replace with your business WhatsApp number (international format, no '+' or '-')

  return (
    <a
      href={`https://wa.me/${+2348034941001}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition-all duration-300"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
