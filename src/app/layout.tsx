import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/*const { variable: geistSans } = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const { variable: geistMono } = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});*/


export const metadata: Metadata = {
  title: "Zimora",
  description: "Smart loyalty and rewards platform",
  openGraph: {
    title: "Zimora",
    description: "Smart loyalty and rewards platform",
    url: "https://www.zimora.co.zw",
    siteName: "Zimora",
    images: [
      {
        url: "https://www.zimora.co.zw/og-image.png", // 👈 place your custom image in /public
        width: 1200,
        height: 630,
        alt: "Zimora – Smart loyalty and rewards platform",
      },
    ],
    locale: "en_ZW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zimora",
    description: "Smart loyalty and rewards platform",
    images: ["https://www.zimora.co.zw/og-image.png"],
  },
};
