import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Ant Pest Control ",
  description:
    "Expert ant ectermination with Pest Control Business",
};

const Ant = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl pt-20 font-bold text-gray-900">
        Ant Pest Control
      </h1>
      <h2 className="text-xl font-semibold text-gray-700 mt-4">
        Effective & Long lasting Ant Pest Control
      </h2>
      <p className="mt-2 text-gray-600">
        Litigation isn’t always the best option. Our ADR services help clients
        resolve disputes efficiently through mediation, arbitration, and
        negotiation.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        Why ADR Matters
      </h2>
      <p className="mt-2 text-gray-600">
        ADR offers a faster, cost-effective, and confidential way to settle
        disputes without resorting to litigation. It is particularly
        beneficial for commercial conflicts, contract disputes, and corporate
        disagreements.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        Our Expertise
      </h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li>
          <strong>Mediation & Arbitration</strong>
          Providing legally binding dispute resolution outside of court.
        </li>
        <li>
          <strong>Corporate Dispute Resolution </strong>
          Resolving conflicts in partnerships, contracts, and joint ventures.
        </li>
        <li>
          <strong>International Arbitration</strong>
          Handling cross-border commercial disputes.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-gray-700 mt-6">
        Why Choose Us?
      </h2>
      <p className="mt-2 text-gray-600">
        Our ADR approach helps clients achieve favorable resolutions while
        avoiding lengthy court proceedings.
      </p>
    </div>
  </>
  )
}

export default Ant




