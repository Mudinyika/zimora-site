"use client";

import React, { useState } from "react";
import { Gift, Mail, Phone } from "lucide-react";

export default function CTA({ id }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setShowForm(false);
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="relative py-24 bg-gray-900 text-white text-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1600&q=80"
          alt="CTA Background"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/95"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-4">Contact Us Today</h2>
        <p className="text-lg mb-8 text-gray-300">
          Start engaging your customers and boosting your business now!
        </p>

        <div className="relative mt-8">
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-500 transition"
          >
            Start for Free
          </button>

          <div className="mt-12 text-gray-300 text-lg font-semibold whitespace-pre-line">
            {"Business Working Hours:\n Mon - Fri: 8am - 5pm\n Sat: 9am - 1pm\n Sun: Closed"}
          </div>
        </div>

        {/* Modal Form */}
        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            {/* Blurred Background */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1600&q=80"
                alt="Modal Background"
                className="w-full h-full object-cover blur-md opacity-30"
              />
              <div className="absolute inset-0 bg-gray-900/80"></div>
            </div>

            {/* Modal Content */}
            <div className="relative bg-gray-900 text-white rounded-lg p-8 w-full max-w-md shadow-xl">
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl font-bold"
              >
                ✕
              </button>

              {/* Title */}
              <div className="flex items-center justify-center mb-6 space-x-3">
                <Gift className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold">Zimora Rewards</h3>
              </div>

              {/* Contact Form */}
              <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full border border-gray-700 rounded px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full border border-gray-700 rounded px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full border border-gray-700 rounded px-3 py-2 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-500 transition disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>

              {/* Contact Info */}
              <div className="text-left space-y-3 mt-4">
                <p className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-yellow-400" />
                  <span>info@zimora.co.zw</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-yellow-400" />
                  <a
                    href="https://wa.me/263719426867"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-yellow-300"
                  >
                    +263 719 426 867 (WhatsApp & Calls)
                  </a>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="font-semibold">Business Hours:</span>
                  <span>Mon - Fri: 8am - 5pm, Sat: 9am - 1pm</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
