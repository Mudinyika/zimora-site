import type { Metadata } from "next";
import "./globals.css";

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
        url: "https://www.zimora.co.zw/og-image-v2.png",
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
    images: ["https://www.zimora.co.zw/og-image-v2.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta property="fb:app_id" content="764811989753119" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
