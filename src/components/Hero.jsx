"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Hero({ id }) {
  const router = useRouter();

  return (
    <section id={id} className="relative w-full h-screen flex items-center justify-center text-center text-white">
      {/* Background Image */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center filter blur-sm brightness-75"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1950&q=80')" }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Make Smarter Business Decisions with Zimora
        </h1>


        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button 
            onClick={() => router.push("/pricing")}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Try for Free
          </button>
          <button
            onClick={() => router.push("/demo")}
            className="bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg hover:bg-gray-200 transition"
          >
            Watch Demo Video
          </button>
        </div>

        <p className="text-lg md:text-xl text-gray-200">
          Zimora empowers your business to make informed decisions and streamline your checkout process, 
          giving you the insight and speed you need to grow.
        </p>
      </div>
    </section>
  );
}
