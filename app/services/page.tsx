

import { Metadata } from "next";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

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
  title: "Services - Ever-safe environmental services ",
  description:
    "Services Number 1 Pest control with Ever-safe environmental services",
  generator: "",
  applicationName: "Ever-safe environmental services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ever-safe environmental services",
    "Pest Contol Services",
    "Services",
    "Termite Pest control service",
    "cockroach pest control service",
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

export default function Services() {
  // const services = [
  //   {
  //     title: "Residential Pest Control",
  //     image: "/residential-pest.jpg", // Replace with actual image path
  //     description: "Protect your home from pests with our safe and effective solutions.",
  //   },
  //   {
  //     title: "Commercial Pest Control",
  //     image: "/commercial-pest.jpg", // Replace with actual image path
  //     description: "Ensure a pest-free environment for your business with our professional service.",
  //   },

  // ];

  return (
    <></>
    //  <section className="py-16 px-6 bg-green-700 text-center">
    //     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
    //       Our Pest Control Services
    //     </h2>

    //     {/* Cards Container */}
    //     <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    //       {services.map((service, index) => (
    //         <Card key={index} className="shadow-lg border rounded-lg">
    //           <CardHeader>
    //             <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
    //           </CardHeader>
    //           <CardContent className="flex flex-col items-center">
    //             <Image
    //               src={service.image}
    //               alt={service.title}
    //               width={300}
    //               height={200}
    //               className="rounded-md"
    //             />
    //             <p className="text-gray-600 mt-4 text-sm">{service.description}</p>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>
    //   </section>
  );
}
