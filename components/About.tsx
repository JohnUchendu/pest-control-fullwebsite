import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 p-12 px-4 md:px-10 rounded-lg shadow-md max-w-6xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <Image
            src="/eversafeowner.jpg" // <-- replace with your actual image path
            alt="Our Staff and Owner"
            width={500}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-green-700 mb-2">About Us</h2>
          <h3 className="text-lg font-semibold text-gray-600 mb-4">
            Safe, Reliable, and Professional Pest Control
          </h3>
          <p className="text-gray-700 mb-4">
            Welcome to Ever -safe environmental services, your trusted partner in eliminating pests
            and ensuring a safe, healthy environment for your home and business.
            With years of experience, we provide eco-friendly, effective pest
            control solutions.
          </p>
          <p className="text-gray-700 mb-4">
            Our certified team uses advanced, safe techniques to remove
            termites, ants, rats, roaches, and more—quickly and professionally.
          </p>
          <p className="text-gray-700 mb-6">
            Customer satisfaction is our priority. We’re known for our
            transparency, reliability, and dedication to keeping your space
            pest-free.
          </p>
          <button className="bg-yellow-300 border-2 text-black px-6 py-2 rounded  hover:bg-yellow-200 transition">
            Claim free inspection
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
