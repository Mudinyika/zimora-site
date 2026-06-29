"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaCheck, FaTimes } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";

const features = [
  "Multi-Shop Support",
  "Advanced Points Allocation",
  "Customizable Offers & Campaigns",
  "Full Analytics & Insights",
  "Priority Support",
  "API Access",
  "Dedicated Account Manager",
  "SLA & Uptime Guarantees",
  "Enterprise Integrations",
  "Custom Reporting & Training",
];

const TIERS = [
  { key: "shops_1", label: "1 SHOP", shops: 1, price: 20, unlocked: 3, freeTrial: true },
  { key: "shops_2", label: "2 SHOPS", shops: 2, price: 35, unlocked: 4, freeTrial: false },
  { key: "shops_3", label: "3 SHOPS", shops: 3, price: 48, unlocked: 6, freeTrial: false, popular: true },
  { key: "shops_4", label: "4 SHOPS", shops: 4, price: 60, unlocked: 8, freeTrial: false },
  { key: "shops_5", label: "5 SHOPS", shops: 5, price: 70, unlocked: 9, freeTrial: false },
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const getPrice = (base: number) => {
    if (billingCycle === "monthly") return `$${base}/mo`;
    const yearly = base * 12;
    const discounted = Math.round(yearly * 0.8);
    return `$${discounted}/yr`;
  };

  const getSavings = (base: number) => {
    if (billingCycle !== "annual") return null;
    const yearly = base * 12;
    const discounted = Math.round(yearly * 0.8);
    return `Save $${yearly - discounted} annually!`;
  };

  return (
    <section className="text-gray-800 body-font bg-white overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        {/* Header */}
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
            Pricing Plans
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
            Priced by how many shops you run. Upgrade anytime as you grow.
          </p>

          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 ${billingCycle === "monthly" ? "bg-indigo-500 text-white" : "text-indigo-500"} focus:outline-none`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 ${billingCycle === "annual" ? "bg-indigo-500 text-white" : "text-indigo-500"} focus:outline-none`}
              onClick={() => setBillingCycle("annual")}
            >
              Annually <span className="text-green-500 font-semibold">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIERS.map((tier) => (
            <div
              key={tier.key}
              className={`h-full p-6 rounded-lg border-2 flex flex-col relative overflow-hidden ${
                tier.popular ? "border-indigo-500" : "border-gray-300"
              }`}
            >
              {tier.popular && (
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                  POPULAR
                </span>
              )}
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{tier.label}</h2>
              <h1 className="text-4xl text-gray-900 leading-none flex flex-col pb-4 mb-4 border-b border-gray-200">
                {tier.freeTrial ? (
                  <>
                    <span className="line-through text-gray-400 text-2xl">{getPrice(tier.price)}</span>
                    <span className="text-4xl text-green-600">Free</span>
                    <span className="text-sm text-gray-500">for your first month</span>
                  </>
                ) : (
                  <>
                    <span>{getPrice(tier.price)}</span>
                    {getSavings(tier.price) && (
                      <span className="text-green-600 text-sm">{getSavings(tier.price)}</span>
                    )}
                  </>
                )}
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-center text-gray-600 text-sm">
                    {i < tier.unlocked ? (
                      <FaCheck className="text-green-500 mr-2 shrink-0" />
                    ) : (
                      <FaTimes className="text-red-400 mr-2 shrink-0" />
                    )}
                    {feat}
                  </li>
                ))}
              </ul>
              <Link
                href={`/request-demo?plan=${tier.key}`}
                className="mt-auto text-center text-white bg-indigo-500 border-0 py-2 px-4 w-full hover:bg-indigo-600 rounded"
              >
                Choose {tier.label}
              </Link>
            </div>
          ))}

          {/* Enterprise */}
          <div className="h-full p-6 rounded-lg border-2 border-gray-800 flex flex-col relative overflow-hidden bg-gray-900 text-white">
            <span className="absolute top-4 right-4 text-yellow-300 text-2xl">
              <GiCutDiamond />
            </span>
            <h2 className="text-sm tracking-widest title-font mb-1 font-medium">ENTERPRISE</h2>
            <h1 className="text-4xl leading-none flex items-center pb-4 mb-4 border-b border-gray-700">
              <span>Custom</span>
            </h1>
            <p className="text-gray-300 text-sm mb-4">6+ shops, tailored to your business.</p>
            <ul className="flex flex-col gap-2 mb-6">
              {features.map((feat, i) => (
                <li key={i} className="flex items-center text-sm">
                  <FaCheck className="text-green-400 mr-2 shrink-0" /> {feat}
                </li>
              ))}
            </ul>
            <Link
              href="/request-demo?plan=enterprise"
              className="mt-auto text-center text-white bg-gray-700 border-0 py-2 px-4 w-full hover:bg-gray-800 rounded"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}