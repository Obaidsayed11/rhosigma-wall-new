import React from "react";
import BlogPage from "@/components/blogs/BlogPage";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "Logistics and Transportation Insights | Lanjekar Logistics Blog",
  description:
    "xplore the Lanjekar Logistics blog for the latest insights, industry trends, and expert tips on logistics, transportation, supply chain management, and more.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Logistics and Transportation Insights | Lanjekar Logistics Blog",
    description:
      "Explore the Lanjekar Logistics blog for the latest insights, industry trends, and expert tips on logistics, transportation, supply chain management, and more.",
    url: "/blogs",
  },
  alternates: {
    canonical: `/blogs`,
  },
});
function page() {
  return (
    <>
      <BlogPage/>
    </>
  );
}

export default page;
