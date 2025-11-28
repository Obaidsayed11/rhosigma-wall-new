import React from "react";
import PrivacyPolicyPage from "@/components/privacypolicypage/PrivacyPolicyPage";
import BlogpageBanner from "@/components/blogs/Blogpagebanner";
import { mergeMetadata } from "../layout";
import PrivacyHero from "@/components/Common/PrivacyHero";
export const metadata = mergeMetadata({
  title: "Privacy Policy | Lanjekar Logistics",
  description:
    "Read the privacy policy of Lanjekar Logistics to understand how we collect, use, and protect your personal data while using our logistics and transportation services in India.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Privacy Policy | Lanjekar Logistics",
    description:
      "Read the privacy policy of Lanjekar Logistics to understand how we collect, use, and protect your personal data while using our logistics and transportation services in India.",
    url: "/privacy-policy",
  },
  alternates: {
    canonical: `/privacy-policy`,
  },
});

function page() {
  return (
    <>
    {/* <BlogpageBanner
        firstchunktitle={"They call us the"}
        maintitle={"people"}
        lastchunktitle="behind shipments"
      /> */}
      <PrivacyHero />
      <PrivacyPolicyPage />
    </>
  );
}

export default page;
