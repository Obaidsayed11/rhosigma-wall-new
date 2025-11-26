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
  title: "Rhosigma Valves | Premium Industrial Valves & Automation Solutions",
  description:
    "Rhosigma Valves specializes in high-quality industrial valves, actuators, and flow control solutions designed for precision, durability, and reliable performance across industries.",
  metadataBase: new URL("https://rhosigmavalves.com"),

  twitter: {
    card: "summary_large_image",
    title: "Rhosigma Valves | Trusted Industrial Valve Manufacturer",
    description:
      "Explore Rhosigma Valves – your reliable partner for industrial valves, actuators, and automated flow control systems. Engineered for performance and longevity.",
    images: "/opengraph-image.png",
    site: "@rhosigmavalves",
  },

  keywords: [
    "Rhosigma Valves",
    "industrial valves",
    "pneumatic actuators",
    "automated valve solutions",
    "butterfly valves",
    "ball valves",
    "control valves",
    "flow control systems",
  ],

  openGraph: {
    title: "Rhosigma Valves | Premium Industrial Valves & Automation Solutions",
    description:
      "Rhosigma Valves delivers engineered valve solutions including actuators, butterfly valves, ball valves, and control valves for diverse industrial applications.",
    images: [
      {
        url: "https://rhosigmavalves.com/opengraph-image.png",
        width: 4800,
        height: 2520,
        alt: "Rhosigma Valves - Industrial Valve & Actuation Solutions",
      },
    ],
    url: "https://rhosigmavalves.com",
    locale: "en_US",
    siteName: "Rhosigma Valves",
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
