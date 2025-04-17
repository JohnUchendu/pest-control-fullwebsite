import React from "react";
import Link from "next/link";

const AboutMore = () => {
  return (
    <section className="bg-slate-100 text-gray-800 py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold text-green-700 mb-4">
            Goodbye to Pests with Ever -safe environmental services
          </h1>
          <h2 className="text-lg font-semibold mb-4">
            Proven Pest Management Solutions
          </h2>
          <p className="mb-4">
            Are pests overrunning your home or office? Ever -safe environmental
            services offers effective, environment-friendly, and cost-effective
            pest control solutions. Our integrated pest management system
            targets pests at all stages, offering long-term protection for your
            space.
          </p>
          <p className="mb-4">
            Whether it's ants in your kitchen, termites in your furniture, or
            mosquitoes disturbing your nights — we’ve got the perfect solution.
            Our certified professionals use safe, non-toxic methods that work.
          </p>

          <Link href={"/contact"}>
            <button className="bg-yellow-300 border-2 text-black px-6 py-2 rounded  hover:bg-yellow-200 transition">
              <div className="text-[10px]">Congratulations</div>
              Book free inspection
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div>
          <img
            src="/eversafe1.jpg"
            alt="Pest contrl"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Why Choose Ever -safe environmental services?
          </h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Comprehensive Pest Coverage – From termites to mosquitoes, we
              handle it all.
            </li>
            <li>
              Integrated Pest Management – Long-term prevention with minimal
              chemicals.
            </li>
            <li>
              Safe for Kids & Pets – We use WHO-approved eco-friendly
              treatments.
            </li>
            <li>
              Trained & Certified Technicians – Background-checked and skilled
              staff.
            </li>
            <li>
              Customized Plans – Services tailored to your property’s unique
              needs.
            </li>
          </ul>
        </div>

        {/* Trust Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-green-700 mb-6">
            Why Homeowners and Businesses Trust Ever -safe environmental services
          </h3>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <strong>Integrated Pest Management:</strong> We inspect, monitor,
              and eliminate pests at the root to provide long-lasting relief.
            </li>
            <li>
              <strong>Eco-Friendly Treatments:</strong> Herbal, odorless
              solutions safe for families and sensitive environments.
            </li>
            <li>
              <strong>All India Service Network:</strong> Available in Lagos,
              Abuja, Port Harcourt and more.
            </li>
            <li>
              <strong>Same-Day & Emergency Services:</strong> Fast-response
              support when you need it most.
            </li>
            <li>
              <strong>Transparent Pricing:</strong> No hidden charges – only
              honest, upfront quotes.
            </li>
            <li>
              <strong>Annual Maintenance Contracts (AMC):</strong> Custom plans
              for ongoing protection.
            </li>
            <li>
              <strong>High Customer Satisfaction:</strong> Trusted by thousands
              across India for effective pest control.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMore;
