"use client";

import React from "react";
import { Shield, Zap, WifiOff, Smartphone, BarChart, Users } from "lucide-react";

export default function Features({id}) {
  const features = [
    {
      title: "Secure Transactions",
      description: "All loyalty points are backed by bank-grade encryption.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Instant Rewards",
      description: "Customers redeem points instantly at checkout.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Offline Ready",
      description: "POS systems work even without internet connectivity.",
      icon: <WifiOff className="w-6 h-6" />,
    },
    {
      title: "Mobile Apps",
      description: "Branded iOS & Android apps for your customers.",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      title: "Smart Analytics",
      description: "Get real-time insights on sales, points & trends.",
      icon: <BarChart className="w-6 h-6" />,
    },
    {
      title: "Customer Growth",
      description: "Turn shoppers into loyal repeat buyers.",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section id={id} className="relative py-24 bg-gray-900 text-white">
      {/* Background with Blur */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80"
          alt="Features Background"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Why Choose Zimora?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Powerful features built to supercharge customer loyalty and business growth.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-indigo-800/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-indigo-600 p-3 rounded-full shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
