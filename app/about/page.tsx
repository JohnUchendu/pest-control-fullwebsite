import React from 'react'

import { Metadata } from 'next'

import About from '@/components/About'
import Advantages from '@/components/Advantages'
import ClientLogos from '@/components/Clients'
import Testimonials from '@/components/Testimonials'


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
  title: "About - Ever-safe environmental services ",
  description: "About Number 1 Pest control with Ever-safe environmental services",
  generator: "",
  applicationName: "Ever-safe environmental services",
  referrer: "origin-when-cross-origin",
  keywords: ["Ever-safe environmental services", "Pest Contol Services", "About"],
  authors: [{ name: "John" }],
  creator: "John Uchendu",
  publisher: "John Uchendu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};


const page = () => {
  return (
    <div>
      <About />
      <Advantages/>
      <ClientLogos/>
      <Testimonials/>
    </div>
  )
}

export default page