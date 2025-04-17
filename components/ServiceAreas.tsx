// "use client";

// import React from "react";

// const serviceAreas = [
//   {
//     category: "Ant Control Services",
//     services: [
//       "Ant Control Control in Lagos",
//       "Ant Control Control in Abuja",
//       "Ant Control Control in Port Harcourt",
//     ],
//   },
//   {
//     category: "Cockroach Pest Control Services",
//     services: [
//       "Cockroach Pest Control in Lagos",
//       "Cockroach Pest Control in Abuja",
//       "Cockroach Pest Control in Port Harcourt",
//     ],
//   },
//   {
//     category: "Termite Pest Control Services",
//     services: [
//       "Termite Pest Control in Lagos",
//       "Termite Pest Control in Abuja",
//       "Termite Pest Control in Port Harcourt",
//     ],
//   },
//   {
//     category: "Rat Control Services",
//     services: [
//       "Rat Pest Control Service in Lagos",
//       "Rat Pest Control Service in Abuja",
//       "Rat Pest Control Service in Port Harcourt",
//     ],
//   },
//   {
//     category: "Mosquito Control Services",
//     services: [
//       "Cockroaches Control in Lagos",
//       "Cockroaches Control in Abuja",
//       "Cockroaches Control in Port Harcourt",
//     ],
//   },

  
 
  
// ];

// const ServiceAreas = () => {
//   return (
//     <div className="py-12 px-4 md:px-10 bg-gray-50">
//       <h2 className="text-3xl font-bold text-center text-green-700 mb-8">
//         Select Your States for Pest Control Services
//       </h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {serviceAreas.map((area, idx) => (
//           <div key={idx} className="bg-white rounded shadow p-4">
//             <h3 className="text-lg font-semibold text-green-600 mb-2">
//               {area.category}
//             </h3>
//             <ul className="text-sm text-gray-700 space-y-1">
//               {area.services.map((service, i) => (
//                 <li key={i} className="hover:underline cursor-pointer">
//                   {service}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceAreas;



import React from "react";
import Link from "next/link";

const services = [
  {
    title: "Ant Pest Control",
    locations: ["Lagos", "Abuja", "Port-Harcourt"],
  },
  {
    title: "Cockroach Pest Control",
    locations: ["Lagos", "Abuja", "Port-Harcourt"],
  },
  // {
  //   title: "Mosquito Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Rats Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Termite Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Termite Treatment by Reticulation Method",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Warehouse Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Hospital Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Rat Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Society Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Bed Bug Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Office Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Termites Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Mosquito Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
  // {
  //   title: "Manufacturing Unit Pest Control",
  //   locations: ["Delhi", "Noida", "Greater Noida"],
  // },
];

const ServiceAreas = () => {
  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-2xl text-green-700 md:text-3xl font-bold text-center mb-8">
        Select Your States for Pest Control Services
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">
              {service.title} Services in Popular States
            </h3>
            <ul className="list-disc pl-5 space-y-1">
              {service.locations.map((location, i) => (
                <li key={i}>
                  <Link
                    href={`/services/${service.title
                      .toLowerCase()
                      .replace(/\s+/g, '-')}-${location
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:underline"
                  >
                    {`${service.title} in ${location}`}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceAreas;
