import BlogpageBanner from "@/components/blogs/Blogpagebanner";
import React from "react";
import PageFaqsSection from "@/components/Faqs/PageFaqsSection";
import { mergeMetadata } from "../layout";


export const metadata = mergeMetadata({
  title: "Frequently Asked Questions | Lanjekar Logistics",
  description:
    "Find answers to common questions about Lanjekar Logistics' services, including transportation, warehousing, and supply chain solutions. Learn more about how we can assist you.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Frequently Asked Questions | Lanjekar Logistics",
    description:
      "Find answers to common questions about Lanjekar Logistics' services, including transportation, warehousing, and supply chain solutions. Learn more about how we can assist you.",
    url: "/faqs",
  },
  alternates: {
    canonical: `/faqs`,
  },
});
function page() {
  return (
    <>
      <BlogpageBanner
        firstchunktitle={"They call us the"}
        maintitle={"people"}
        lastchunktitle="behind shipments"
        btntext="Expore Faq"
      />
      <PageFaqsSection />
    </>
  );
}

export default page;
