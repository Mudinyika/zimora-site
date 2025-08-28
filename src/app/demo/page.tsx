"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How do customers sign up for a loyalty card?",
    answer: "Customers can sign up by downloading the Zimora app or registering at your shop. The process is fast and user-friendly."
  },
  {
    question: "Can points be redeemed across multiple shops?",
    answer: "Yes! Points are synced across all shops within the same franchise, so customers can redeem them anywhere."
  },
  {
    question: "Is there a mobile app for staff to track rewards?",
    answer: "Absolutely. Staff can use the Zimora Staff App to monitor points, track redemptions, and manage loyalty programs."
  },
  {
    question: "How often are points updated in real-time?",
    answer: "Points are updated instantly as transactions are processed, ensuring customers always see their correct balance."
  }
];

export default function DemoPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Page Header */}
      <header className="bg-indigo-600 text-white py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">How Zimora Works</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Watch the demo to see how easy it is for your customers to sign up, earn points, and redeem rewards with Zimora.
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left/Main Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* Video */}
          <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <video
              src="/zimora-demo-video.mp4"
              controls
              autoPlay
              className="w-full h-auto max-h-[60vh] rounded-lg"
            />
          </div>

          {/* How-to Guide */}
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Getting Started Guide</h2>
            <p className="mb-2">
              This guide walks you through the process of setting up Zimora for your business, adding loyalty cards, and rewarding customers with stamps.
            </p>
            <p>
              Follow along with the video to see each step in action, from registration to redeeming rewards.
            </p>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="flex flex-col gap-4">
          <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">FAQs</h2>
            <div className="flex flex-col gap-2">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b last:border-b-0">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left py-2 font-semibold flex justify-between items-center focus:outline-none"
                  >
                    {faq.question}
                    <span>{openIndex === index ? "−" : "+"}</span>
                  </button>
                  {openIndex === index && (
                    <p className="mt-1 text-gray-700">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </aside>
      </main>
    </div>
  );
}
