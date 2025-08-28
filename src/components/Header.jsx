import React from "react";

export default function Header({ id }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      id={id}
      className="bg-gray-900 text-white body-font sticky top-0 z-50 shadow"
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/favicon.svg"
            alt="Zimora Logo"
            className="w-10 h-10 p-2 bg-indigo-500 rounded-full"
          />
          <span className="ml-3 text-xl">Zimora</span>
        </a>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center space-x-5">
          <button
            onClick={() => scrollToSection("features")}
            className="hover:text-yellow-400 transition"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("process")}
            className="hover:text-yellow-400 transition"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("stats")}
            className="hover:text-yellow-400 transition"
          >
            Stats
          </button>
          <button
            onClick={() => scrollToSection("connect")}
            className="hover:text-yellow-400 transition"
          >
            Connect
          </button>

          {/* Pricing link */}
          <a
            href="/pricing"
            className="hover:text-yellow-400 transition font-semibold"
          >
            Pricing
          </a>

          <button
            onClick={() => scrollToSection("cta")}
            className="hover:text-yellow-400 transition font-semibold"
          >
            Get Started
          </button>
          <button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-cookie-policy"))
            }
            className="hover:text-yellow-400 transition underline text-sm"
          >
            Cookie Policy
          </button>
        </nav>
      </div>
    </header>
  );
}
