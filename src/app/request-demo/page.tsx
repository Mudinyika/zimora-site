"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaStore, FaBolt, FaChartBar } from "react-icons/fa";

export default function RequestDemoPage() {
  const router = useRouter();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    business_name: "",
    contact_person: "",
    phone: "",
    branches: "",
    email: "",
  });

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        router.push("/");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted, router]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    await fetch("https://formspree.io/f/mrewkvyl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)" }}>
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="20" fill="#6366f1"/>
              <path d="M12 20l6 6 10-12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">We&apos;ll be in touch!</h1>
          <p className="text-indigo-200">
            Thanks for your interest in Zimora Loyalty. We&apos;ll contact you within 24 hours to get your account set up.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)" }}>
      
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-16 text-white">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="3" fill="#fbbf24"/>
              <line x1="11" y1="2" x2="11" y2="8" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="11" y1="14" x2="11" y2="20" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="2" y1="11" x2="8" y2="11" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="14" y1="11" x2="20" y2="11" stroke="#fbbf24" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-wide">Zimora Loyalty</span>
        </div>

        <h1 className="text-4xl font-bold mb-4 leading-tight">
          Start rewarding your customers today
        </h1>
        <p className="text-indigo-200 text-lg mb-10">
          Join businesses across Zimbabwe using Zimora to build lasting customer loyalty.
        </p>

        <div className="flex flex-col gap-5">
          {[
            { icon: <FaStore className="text-indigo-300 text-lg" />, title: "Single or multi-branch", desc: "Works for one shop or a full franchise network" },
            { icon: <FaBolt className="text-yellow-300 text-lg" />, title: "Live in 24 hours", desc: "We set up your account and send you credentials" },
            { icon: <FaChartBar className="text-green-300 text-lg" />, title: "Real-time reporting", desc: "Track points, redemptions and customer activity" },
            ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                {item.icon}
                </div>
                <div>
                <p className="font-semibold text-white">{item.title}</p>
                <p className="text-indigo-200 text-sm">{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
      </div>

      {/* Right panel - form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Request Access</h2>
            <p className="text-gray-500 text-sm">We&apos;ll set up your account within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
              <input
                name="business_name"
                value={form.business_name}
                onChange={handleChange}
                required
                placeholder="e.g. Harry Supermarkets"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
              <input
                name="contact_person"
                value={form.contact_person}
                onChange={handleChange}
                required
                placeholder="Full name"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="+263 77 000 0000"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Branches</label>
                <select
                  name="branches"
                  value={form.branches}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
                >
                  <option value="">Select...</option>
                  <option value="1">1 branch</option>
                  <option value="2-5">2–5 branches</option>
                  <option value="6-10">6–10 branches</option>
                  <option value="10+">10+ branches</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@business.com"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white text-gray-900 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 mt-2"
            >
              {loading ? "Sending..." : "Request Access →"}
            </button>

            <p className="text-center text-xs text-gray-400">
              No credit card required. We&apos;ll contact you to get started.
            </p>
          </form>
        </div>
      </div>

    </div>
  );
}