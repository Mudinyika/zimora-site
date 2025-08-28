"use client";

import React from "react";

export default function CookiePolicyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal content */}
      <div className="relative bg-gray-900 text-white rounded-xl p-8 max-w-3xl mx-4 overflow-y-auto max-h-[90vh] shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold"
        >
          ✕
        </button>

        <h1 className="text-3xl font-bold mb-6 text-center">Zimora Cookie Policy</h1>
        <p className="text-gray-300 mb-4">
          At Zimora, we value your privacy and use cookies to enhance your experience...
        </p>

        <h2 className="text-2xl font-semibold mb-3">1. What Cookies We Use</h2>
        <ul className="list-disc list-inside mb-4 text-gray-300">
          <li>Essential Cookies: Required for basic website functionality.</li>
          <li>Analytics Cookies: Track site usage and user behavior.</li>
          <li>Marketing Cookies: Deliver personalized promotions and messages.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">2. Managing Your Preferences</h2>
        <p className="text-gray-300 mb-4">
          You can customize your cookie preferences via the consent modal on the site.
        </p>

        <h2 className="text-2xl font-semibold mb-3">3. Contact Us</h2>
        <p className="text-gray-300">
          Email: <span className="font-semibold">info@zimora.co.zw</span> <br />
          WhatsApp/Call:{" "}
          <a
            href="https://wa.me/263719426867"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-400"
          >
            +263 719 426 867
          </a>
        </p>
      </div>
    </div>
  );
}
