"use client";

import React from "react";
import { FlaskConical, UserCog, Users, BadgeCheck, Smile } from "lucide-react";

const features = [
  {
    icon: <FlaskConical className="w-10 h-10 text-green-600" />,
    title: "Chemicals",
    subtitle: "Odorless & WHO approved",
  },
  {
    icon: <UserCog className="w-10 h-10 text-green-600" />,
    title: "Technicians",
    subtitle: "Certified & Trained by ENTOMOLOGIST",
  },
  {
    icon: <Users className="w-10 h-10 text-green-600" />,
    title: "Team",
    subtitle: "Expert & Well Trained",
  },
  {
    icon: <BadgeCheck className="w-10 h-10 text-green-600" />,
    title: "Experience",
    subtitle: "More than 20 Years",
  },
  {
    icon: <Smile className="w-10 h-10 text-green-600" />,
    title: "Happy Customers",
    subtitle: "More than 5000+",
  },
];

const WhyUs = () => {
  return (
    <div className="py-12 bg-white px-4 md:px-8">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
        Why Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto justify-center">
        {features.map((item, idx) => (
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

export default WhyUs;
