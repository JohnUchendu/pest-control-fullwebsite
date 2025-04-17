import React from "react";

import { Metadata } from "next";

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
  title: "Ant pest control Lagos",
  description:
    "Ant pest control Lagos with Ever-safe environmental services",
  generator: "",
  applicationName: "Ever-safe environmental services",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Ever-safe environmental services",
    "Pest Contol Services",
    "Ant pest control lagos",
    "ant pest control",
    "ant extermination in lagos state"
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

const page = () => {
  return <div>ant pest control lagos</div>;
};

export default page;
