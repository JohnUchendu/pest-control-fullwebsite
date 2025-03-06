"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ServiceEmphasis() {
  return (
    <section className="py-16 px-6  flex justify-center ">
      <div className="max-w-3xl w-full flex flex-col md:flex-row items-center  mx-auto px-6">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/pest-control-service.jpg" // Replace with actual image path
            alt="Professional Pest Control"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Right: One Card (No Border, No Gap) */}
        <div className="w-full md:w-1/2">
          <Card className="shadow-none border-none rounded-none">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600 font-semibold">
                Reliable & Effective Pest Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our expert team provides fast, safe, and long-lasting pest control solutions 
                to keep your home or business protected.
              </p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700">
                Get a Free Quote
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
