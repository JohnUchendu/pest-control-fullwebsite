"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "/hero/happyfamily.jpg",
    title: "Residential Pest Control",
    description: "Providing strategic Pest Control solutions tailored to your needs.",
    buttonText: "Claim free inspection",
    link: "/contact", // Add your consultation page link here
  },
  {
    image: "/hero/eversafe3.jpg",
    title: "Commercial Pest Control",
    description:
      "Committed to protecting your offices, hotels and schools with diligence and integrity.",
    buttonText: "Call now",
    link: "/contact", // Add your services page link here
  },
  {
    image: "/hero/people-disinfecting-biohazard-area.jpg",
    title: "Your Pest Control Partner",
    description:
      "Guiding you through frustrating pest matters with confidence and expertise.",
    buttonText: "Start eradicating pest",
    link: "/contact", // Add your contact page link here
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 15000); // 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel className="w-full h-[500px] relative">
      <CarouselContent>
        <AnimatePresence mode="wait">
          {slides.map((slide, index) =>
            index === currentIndex ? (
              <CarouselItem key={index} className="relative w-full h-[500px]">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div
                  className="absolute inset-0 bg-black/50 flex items-center px-10 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="max-w-lg">
                    <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                    <p className="text-lg mb-6">{slide.description}</p>
                    <Link href={slide.link} passHref>
                      <Button className="bg-yellow-300 border-2 text-black hover:bg-yellow-200">
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </CarouselItem>
            ) : null
          )}
        </AnimatePresence>
      </CarouselContent>
    </Carousel>
  );
}
