// // "use client";

// // import { Phone } from "lucide-react";

// // export default function Navbar() {
// //   return (
// //     <nav className="bg-white shadow-md p-4">
// //       <div className="container mx-auto flex items-center justify-between">
// //         {/* Logo */}
// //         <h1 className="text-2xl font-bold text-green-700">Pest Control</h1>

// //         {/* Call Button */}
// //         <div className="flex items-center space-x-2 text-green-700 font-semibold">
// //           <Phone size={20} />
// //           <span>Call: (123) 456-7890</span>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { Phone, Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [servicesOpen, setServicesOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-md p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <Link href='/'>
//         <h1 className="text-2xl font-bold text-green-700 cursor ">Pest Control</h1>
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 text-green-700 font-semibold">
//           <li>
//             <Link href="/" className="hover:text-green-500">Home</Link>
//           </li>

//           <li>
//             <Link href="/about" className="hover:text-green-500">About</Link>
//           </li>

//           <li>
//             <Link href="/services" className="hover:text-green-500">Services</Link>
//           </li>
//           <li>
//             <Link href="/contact" className="hover:text-green-500">Contact</Link>
//           </li>
//         </ul>

//         {/* Mobile Menu Button */}
//         <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-2 bg-green-100 p-4 space-y-2 text-center text-green-700 font-semibold">
//           <li><Link href="/" className="block p-2 hover:bg-green-200">Home</Link></li>
//           <li className="cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
//             <span className="flex justify-center items-center hover:text-green-500">
//               Services <ChevronDown size={16} className="ml-1" />
//             </span>
//             {servicesOpen && (
//               <ul className="mt-2 bg-green-200 p-2 rounded-md">
//                 <li><Link href="/services/termite" className="block p-2 hover:bg-green-300">Termite Control</Link></li>
//                 <li><Link href="/services/ant" className="block p-2 hover:bg-green-300">Ant Control</Link></li>
//                 <li><Link href="/services/rats" className="block p-2 hover:bg-green-300">Rat Control</Link></li>
//                 <li><Link href="/services/roaches" className="block p-2 hover:bg-green-300">Roach Control</Link></li>
//               </ul>
//             )}
//           </li>
//           <li><Link href="/about" className="block p-2 hover:bg-green-200">About</Link></li>
//           <li><Link href="/contact" className="block p-2 hover:bg-green-200">Contact</Link></li>
//         </ul>
//       )}
//     </nav>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (

  
    <nav className="bg-white shadow-md ">
      <div className=" text-lg max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Mobile Phone Number */}
        <div className="md:hidden text-md text-green-800 font-semibold">
          <a href="tel:+234803494-1001">📞 +234 (803) 494-1001</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          <NavItems />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <NavItems isMobile />
        </div>
      )}
    </nav>
  );
}

function NavItems({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <ul
      className={`flex flex-col md:flex-row  ${
        isMobile ? "gap-3" : "gap-6"
      } font-medium text-gray-800 text-sm md:items-center md:justify-center w-full`}
    >
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>

      {/* Residential Dropdown */}
      <Dropdown
        title="Residential"
        items={[
          { label: "Home Pest Control", href: "/residential/home" },
          { label: "Rodent Treatment", href: "/residential/rodent" },
          { label: "Termite Services", href: "/residential/termite" },
        ]}
        isMobile={isMobile}
      />

      {/* Commercial Dropdown */}
      <Dropdown
        title="Commercial"
        items={[
          { label: "Office Disinfection", href: "/commercial/office" },
          { label: "Restaurant Pest Control", href: "/commercial/restaurant" },
          { label: "Warehouse Services", href: "/commercial/warehouse" },
        ]}
        isMobile={isMobile}
        />

      {/* <li>
        <Link href="/blog">Blog</Link>
      </li> */}
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}

function Dropdown({
  title,
  items,
  isMobile = false,
}: {
  title: string;
  items: { label: string; href: string }[];
  isMobile?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={`relative ${isMobile ? "" : "group"} cursor-pointer`}
      onMouseEnter={() => !isMobile && setOpen(true)}
      onMouseLeave={() => !isMobile && setOpen(false)}
    >
      <span
        onClick={() => isMobile && setOpen((prev) => !prev)}
        className="flex items-center gap-1"
      >
        {title} ▾
      </span>

      <ul
        className={`${
          open ? "block" : "hidden"
        } absolute md:absolute bg-white border rounded-md shadow-md mt-1 md:min-w-[180px] z-50 ${
          isMobile ? "ml-4 mt-2 relative border-none shadow-none" : ""
        }`}
      >
        {items.map((item) => (
          <li key={item.href} className="hover:bg-gray-100 px-4 py-2">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </li>

  );
}
