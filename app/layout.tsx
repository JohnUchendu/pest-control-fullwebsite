// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TopNavbar from "@/components/TopNavbar";
import Footer from "@/components/Footer";
import WhatsappWidget from "@/components/WhatsappWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "Pest Control",
//   description: "Quick Eradication in 24hrs",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WhatsappWidget/>
        <TopNavbar/>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
