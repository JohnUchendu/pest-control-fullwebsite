import { Metadata } from "next";

import ClientLogos from "@/components/Clients";
import Hero from "@/components/Hero";
import ServiceAreas from "@/components/ServiceAreas";
import Testimonials from "@/components/Testimonials";
import React from "react";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "en-GB": "/en-GB",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  title: "Page not found - Ever-safe environmental services ",
  description:
    "page not found for Number 1 Pest control with Ever-safe environmental services",
  generator: "",
  applicationName: "Ever-safe environmental services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ever-safe environmental services",
    "Pest Contol Services",
    "termite pest control",
    "rodents pest control",
  ],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-40 bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-red-600 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Pests cleared all over this page! Extermination process avtivated{" "}
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          It seems like you've been sent to a missing page.
        </p>

        {/* Image or Icon */}
        <img
          src="/court-gavel.png" // Use a gavel or any judicial-themed image
          alt="exterminated pests"
          className="w-40 h-40 mb-6"
        />

        <div className="bg-white shadow-md p-6 rounded-lg max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Pest Humor to Lighten the missing page
          </h3>
          <ul className=" pl-6 space-y-4">
            <li>
              "Why did the termite go to the party, because it was woody?"
            </li>
          </ul>
        </div>

        <div className="mt-6">
          <a
            href="/"
            className="text-blue-600 hover:text-blue-800 text-lg font-semibold"
          >
            Return to Home Page
          </a>
        </div>
        <Hero />
      </div>

      <ClientLogos />
      <ServiceAreas />
      <Testimonials />
    </div>
  );
};

export default Custom404;
