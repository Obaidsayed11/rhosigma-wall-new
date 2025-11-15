import BlogpageBanner from "@/components/blogs/Blogpagebanner";
import React from "react";
import CareerPageSection from "@/components/careers/CareerPageSection";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "Careers at Lanjekar Logistics | Join Our Team of Experts",
  description:
    "Explore exciting career opportunities at Lanjekar Logistics. Join our team and be part of a leading logistics company delivering innovative transportation and supply chain solutions across India.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Careers at Lanjekar Logistics | Join Our Team of Experts",
    description:
      "Explore exciting career opportunities at Lanjekar Logistics. Join our team and be part of a leading logistics company delivering innovative transportation and supply chain solutions across India.",
    url: "/careers",
  },
  alternates: {
    canonical: `/careers`,
  },
});

function page() {
  return (
    <>
      <BlogpageBanner
        firstchunktitle={"They call us the"}
        maintitle={"people"}
        lastchunktitle="behind shipments"
        btntext="Explore Careers"
      />
      <CareerPageSection />
    </>
  );
}

export default page;


