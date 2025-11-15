import TechnologyPage from "@/components/Technology/TechnologyPage";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: "Innovative Logistics Technology Solutions | Lanjekar Logistics",
  description:
    "Discover how Lanjekar Logistics uses innovative technology to enhance supply chain efficiency, offering real-time tracking, automation, and seamless logistics solutions.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title:
      "Innovative Logistics Technology Solutions | Lanjekar Logistics",
    description:
      "Discover how Lanjekar Logistics uses innovative technology to enhance supply chain efficiency, offering real-time tracking, automation, and seamless logistics solutions.",
    url: "/technology",
  },
  alternates: {
    canonical: `/technology`,
  },
});

function page() {
  return (
    <>
      <TechnologyPage />
    </>
  );
}

export default page;
