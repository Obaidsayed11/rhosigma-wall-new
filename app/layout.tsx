import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Common/Navbar";
import Footer from "@/components/Common/Footer";
import SideGetQuote from "@/components/Common/SideGetQuote";
import Provider from "./Provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Lanjekar Logistics | Reliable Logistics & Supply Chain Solutions",
  description:
    "Lanjekar Logistics offers dependable logistics, transportation, and supply chain solutions tailored to businesses across diverse industries. Delivering excellence, efficiency, and on-time shipments.",
  metadataBase: new URL("https://lanjekarlogistics.com"),
  twitter: {
    card: "summary_large_image",
    title: "Lanjekar Logistics | Trusted Logistics Partner",
    description:
      "Discover Lanjekar Logistics – your trusted partner for transportation, supply chain, and freight solutions. Serving industries with speed and reliability.",
    images: "/opengraph-image.png",
    site: "@lanjekarlogistics",
  },
  keywords:["logistics","lajekar"],
  openGraph: {
    title: "Lanjekar Logistics | Reliable Logistics & Supply Chain Solutions",
    description:
      "Lanjekar Logistics provides expert logistics services including freight transport, warehousing, and supply chain management across industries.",
    images: [
      {
        url: "https://lanjekarlogistics.com/opengraph-image.png",
        width: 4800,
        height: 2520,
        alt: "Lanjekar Logistics - Your Trusted Shipment Partner",
      },
    ],
    url: "https://lanjekarlogistics.com",
    locale: "en_us",
    siteName: "Lanjekar Logistics",
  },
};

export function mergeMetadata(pageMetadata: Metadata): Metadata {
  return {
    ...metadata, // Use global metadata as the base
    ...pageMetadata, // Merge with page-specific metadata
    openGraph: {
      ...metadata.openGraph,
      ...pageMetadata.openGraph,
      images: metadata.openGraph?.images, // Always use global Open Graph images
    },
    twitter: {
      ...metadata.twitter,
      ...pageMetadata.twitter,
      images: metadata.twitter?.images, // Always use global Twitter images
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${plusJakartaSans.variable} antialiased`}
      >
        <Provider>
          <Navbar />
          <SideGetQuote />
          {children}
          <Footer />
        </Provider>
          <Toaster/>
      </body>
    </html>
  );
}
