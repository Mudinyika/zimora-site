"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import ConnectCustomers from "@/components/ConnectCustomers";
import CTA from "@/components/CTA";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header id="header" />
      <Hero id="hero" />
      <Features id="features" />
      <Process id="process" />
      <Stats id="stats" />
      <ConnectCustomers id="connect" />
      <CTA id="cta" />
      <CookieConsent />
      <Footer />
    </div>
  );
}
