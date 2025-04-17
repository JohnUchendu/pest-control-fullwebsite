"use client";

import Link from "next/link"

import { Button } from "@/components/ui/button";

export default function SubHero() {
  return (
    <section className="py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Safe and Reliable Pest Control
        </h2>
        <p className="mt-4 text-gray-600 text-lg">
          Our expert team provides eco-friendly and effective pest control solutions. 
          Protect your home and business with our trusted services.
        </p>
        <Button className="mt-6 bg-yellow-300 hover:bg-yellow-500">
          <Link href="/contact">
          Claim your free inspection
          </Link>
        </Button>
      </div>
    </section>
  );
}
