"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Absolutely fantastic service! They got rid of all pests within a day.",
    name: "John Dangote",
    location: "Ikeja, Lagos",
  },
  {
    text: "Very professional and thorough. Highly recommend!",
    name: "Sarah Seun",
    location: "Bodija, Ibadan",
  },
  {
    text: "Quick and efficient. Haven't seen a single pest since!",
    name: "Cubana Brown",
    location: "Maitama, Abuja",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-gray-100 flex justify-center">
      <div className="max-w-4xl w-full">
        <h2
          className="text-center text-green-700
         text-3xl font-bold mb-6"
        >
          What Our Clients Say
        </h2>

        <Carousel>
          <CarouselContent
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease-in-out",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="flex justify-center">
                <Card className="w-full md:w-3/4 shadow-lg p-6">
                  <CardContent className="flex flex-col items-center text-center">
                    <p className="text-lg italic text-gray-700">
                      "{testimonial.text}"
                    </p>
                    <h4 className="mt-4 font-semibold">{testimonial.name}</h4>
                    <span className="text-sm text-gray-500">
                      {testimonial.location}
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={() =>
              setCurrentIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
          />
          <CarouselNext
            onClick={() =>
              setCurrentIndex((prev) => (prev + 1) % testimonials.length)
            }
          />
        </Carousel>
      </div>
    </section>
  );
}
