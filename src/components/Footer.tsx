"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 mt-16">
      <div className="flex flex-col items-center space-y-2">
        {/* Copyright */}
        <p className="text-sm text-center">&copy; Zimora Rewards 2025</p>

        {/* Built by */}
        <p className="text-sm text-center">
          Built by{" "}
          <a
            href="https://jovial-cactus-ea5842.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-yellow-400 transition-colors"
          >
            Mudiwa Nyikavaranda
          </a>
        </p>
      </div>
    </footer>
  );
}
