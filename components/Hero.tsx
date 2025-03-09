"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

export default function Hero() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "" },
  });

  // function onSubmit(values: any) {
  //   console.log(values);
  //   alert("Form submitted successfully!");
  // }

  async function onSubmit(values: any) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      alert("Network error, please try again.");
    }
  }
  


  return (
    <section 
      className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/people-disinfecting-biohazard-area.jpg')" }} // Replace with actual image
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div> {/* Dark Overlay */}
      

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12 relative z-10">
        {/* Left Side - Text */}
        <div className="text-white max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold">
            Say Goodbye to Pests, <span className="text-green-400">For Good!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Get expert pest control with safe, eco-friendly treatments.  
            Book your free inspection today!
          </p>
        </div>

        {/* Right Side - ShadCN Form */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Book a Free Inspection</h2>
          
          {/* ShadCN Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="example@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(123) 456-7890" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                Schedule Now
              </Button>
            </form>
          </Form>

          {/* Discount Text */}
          <p className="text-center text-sm text-green-700 font-semibold mt-4">
            🎉 10% OFF for First-Time Customers!
          </p>
        </div>
      </div>
    </section>
  );
}
