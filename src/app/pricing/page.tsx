"use client";
import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi"; // Game Icons set

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

// base monthly prices
const PRICING = {
  starter: 35,
  standard: 99,
  premium: 150,
};

const WHATSAPP_NUMBER = "263719426867";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  const getPrice = (base: number) => {
    if (billingCycle === "monthly") return `$${base}/mo`;
    const yearly = base * 12;
    const discounted = Math.round(yearly * 0.8); // 20% off
    return `$${discounted}/yr`;
  };

  const getSavings = (base: number) => {
    if (billingCycle === "annual" && base > 0) {
      const yearly = base * 12;
      const discounted = Math.round(yearly * 0.8);
      const save = yearly - discounted;
      return `Save $${save} annually!`;
    }
    return null;
  };

  const message = (pkg: string) =>
    encodeURIComponent(`Hi, I'm interested in the ${pkg} package. Please send me more details.`);

  const openWhatsApp = (pkg: string) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message(pkg)}`, "_blank");
    } else {
      setSelectedPackage(pkg);
      setModalOpen(true);
    }
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message(selectedPackage)}`, "_blank");
    setModalOpen(false);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Interested in ${selectedPackage} package`);
    const body = message(selectedPackage);
    window.open(`mailto:info@zimora.co.zw?subject=${subject}&body=${body}`, "_blank");
    setModalOpen(false);
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
            Choose the plan that fits your business needs. Upgrade anytime as you grow.
          </p>

          {/* Toggle */}
          <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
            <button
              className={`py-1 px-4 ${
                billingCycle === "monthly" ? "bg-indigo-500 text-white" : "text-indigo-500"
              } focus:outline-none`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`py-1 px-4 ${
                billingCycle === "annual" ? "bg-indigo-500 text-white" : "text-indigo-500"
              } focus:outline-none`}
              onClick={() => setBillingCycle("annual")}
            >
              Annually <span className="text-green-500 font-semibold">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap -m-4">
          {/* Starter */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">STARTER</h2>
              <h1 className="text-4xl text-gray-900 leading-none flex flex-col pb-4 mb-4 border-b border-gray-200">
                <span className="line-through text-gray-400">{getPrice(PRICING.starter)}</span>
                <span className="text-5xl text-green-600">Free</span>
                <span className="text-sm text-gray-500">for your first month</span>
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <FaCheck className="text-green-500 mr-2" />
                  Single Shop Support
                </li>
                {features.slice(1).map((feat, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <FaTimes className="text-red-500 mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWhatsApp("Starter")}
                className="mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full hover:bg-indigo-600 rounded"
              >
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Standard */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
              <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                POPULAR
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">STANDARD</h2>
              <h1 className="text-5xl text-gray-900 leading-none flex flex-col pb-4 mb-4 border-b border-gray-200">
                <span>{getPrice(PRICING.standard)}</span>
                {getSavings(PRICING.standard) && (
                  <span className="text-green-600 text-sm">{getSavings(PRICING.standard)}</span>
                )}
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    {i < 4 ? (
                      <FaCheck className="text-green-500 mr-2" />
                    ) : (
                      <FaTimes className="text-red-500 mr-2" />
                    )}
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWhatsApp("Standard")}
                className="mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full hover:bg-indigo-600 rounded"
              >
                Select Standard
              </button>
            </div>
          </div>

          {/* Premium */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600 text-white shadow-lg">
              <span className="absolute top-4 right-4 text-yellow-300 text-2xl">
                <GiCutDiamond />
              </span>
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PREMIUM</h2>
              <h1 className="text-5xl leading-none flex flex-col pb-4 mb-4 border-b border-indigo-200">
                <span>{getPrice(PRICING.premium)}</span>
                {getSavings(PRICING.premium) && (
                  <span className="text-green-200 text-sm">{getSavings(PRICING.premium)}</span>
                )}
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-center">
                    <FaCheck className="text-green-300 mr-2" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openWhatsApp("Premium")}
                className="mt-auto text-white bg-indigo-700 border-0 py-2 px-4 w-full hover:bg-indigo-800 rounded"
              >
                Select Premium
              </button>
            </div>
          </div>

          {/* Enterprise */}
          <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
            <div className="h-full p-6 rounded-lg border-2 border-gray-800 flex flex-col relative overflow-hidden bg-gray-900 text-white">
              <h2 className="text-sm tracking-widest title-font mb-1 font-medium">ENTERPRISE</h2>
              <h1 className="text-5xl leading-none flex items-center pb-4 mb-4 border-b border-gray-700">
                <span>Custom</span>
              </h1>
              <ul className="flex flex-col gap-2 mb-6">
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> All Premium Features
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Dedicated Account Manager
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> SLA & Uptime Guarantees
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Enterprise Integrations
                </li>
                <li className="flex items-center">
                  <FaCheck className="text-green-500 mr-2" /> Custom Reporting & Training
                </li>
              </ul>
              <button
                onClick={() => openWhatsApp("Enterprise")}
                className="mt-auto text-white bg-gray-700 border-0 py-2 px-4 w-full hover:bg-gray-800 rounded"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-80 p-6 text-center">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-6">
              How would you like to get in touch about the {selectedPackage} package?
            </p>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
              >
                WhatsApp Web
              </button>
              <button
                onClick={handleEmail}
                className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Send Email
              </button>
            </div>
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
