"use client";

import React from "react";
import {
  Droplets,
  Clock4,
  ShieldCheck,
  Handshake,
} from "lucide-react";

const benefits = [
  {
    icon: <Droplets className="w-10 h-10 text-green-600" />,
    title: "Odourless",
    subtitle: "No strong chemical smell",
  },
  {
    icon: <Clock4 className="w-10 h-10 text-green-600" />,
    title: "Long Lasting",
    subtitle: "Protection that lasts for months",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
    title: "Safe on People & Environment",
    subtitle: "Eco-friendly and non-toxic solutions",
  },
  {
    icon: <Handshake className="w-10 h-10 text-green-600" />,
    title: "Hassle-Free",
    subtitle: "No disruptions to your routine",
  },
];

const Advantages = () => {
  return (
    <div className="py-12 bg-white px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
    Advantages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-5xl mx-auto justify-center">
        {benefits.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <h4 className="font-semibold text-lg mt-2">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
