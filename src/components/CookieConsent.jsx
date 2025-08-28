"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Cookie } from "lucide-react"; 
import CookiePolicyModal from "./CookiePolicyModal";

export default function CookieConsent() {
  const [showModal, setShowModal] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false); // NEW state
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  useEffect(() => {
  const handler = () => setShowPolicy(true);
    window.addEventListener("open-cookie-policy", handler);
    return () => window.removeEventListener("open-cookie-policy", handler);
  }, []);

  useEffect(() => {
    const consent = Cookies.get("zimora_cookie_consent");
    if (!consent) setShowModal(true);

    const savedConsent = JSON.parse(consent || "{}");
    if (savedConsent.analytics) console.log("Analytics scripts initialized!");
  }, []);

  const handleAcceptAll = () => {
    const allPrefs = { essential: true, analytics: true, marketing: true };
    setPreferences(allPrefs);
    Cookies.set("zimora_cookie_consent", JSON.stringify(allPrefs), { expires: 365 });
    setShowModal(false);
    console.log("Analytics scripts initialized!");
  };

  const handleSavePreferences = () => {
    Cookies.set("zimora_cookie_consent", JSON.stringify(preferences), { expires: 365 });
    setShowModal(false);
    if (preferences.analytics) console.log("Analytics scripts initialized!");
  };

  return (
    <>
      {/* Persistent bottom-left cookie icon */}
      <button
        onClick={() => setShowModal(true)}
        className="fixed bottom-4 left-4 z-50 p-3 rounded-full bg-yellow-400 hover:bg-yellow-500 shadow-lg transition"
        title="Cookie Preferences"
      >
        <Cookie className="w-6 h-6 text-gray-900" />
      </button>

      {/* Consent Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80"
              alt="Modal Background"
              className="w-full h-full object-cover blur-md opacity-30"
            />
            <div className="absolute inset-0 bg-gray-900/80"></div>
          </div>

          <div className="relative bg-gray-900 text-white rounded-xl p-8 w-full max-w-lg shadow-xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl font-bold"
            >
              ✕
            </button>

            <h3 className="text-2xl font-bold mb-4 text-center">Zimora Cookie Preferences</h3>
            <p className="mb-6 text-gray-300 text-center">
              We use cookies to enhance your experience. Customize your preferences or accept all.
            </p>

            <div className="flex flex-col space-y-3 mb-6">
              <label className="flex items-center space-x-2">
                <input type="checkbox" checked disabled className="accent-blue-600" />
                <span>Essential Cookies (Always Active)</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                  className="accent-blue-600"
                />
                <span>Analytics Cookies</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                  className="accent-blue-600"
                />
                <span>Marketing Cookies</span>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 justify-center">
              <button
                onClick={handleAcceptAll}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
              >
                Accept All
              </button>
              <button
                onClick={handleSavePreferences}
                className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded"
              >
                Save Preferences
              </button>
            </div>

            <p className="mt-6 text-center text-gray-400 text-sm">
              Read our{" "}
              <button
                onClick={() => setShowPolicy(true)} // open CookiePolicyModal
                className="underline hover:text-yellow-400"
              >
                Cookie Policy
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Cookie Policy Modal */}
      {showPolicy && <CookiePolicyModal onClose={() => setShowPolicy(false)} />}
    </>
  );
}
