import React from "react";
import CareerL2page from "@/components/careers/CareerL2page";
import { NEXT_PUBLIC_API_URL } from "@/config";
import axios from "axios";
export async function generateMetadata({
  params,
}: {
  params: any;
}) {
  const { slug } = params;
  const apiUrl = `${NEXT_PUBLIC_API_URL}/careers/${slug}`;

  try {
    // Fetch job details based on the slug
    const response = await axios.get(apiUrl);
    const seoData = response.data.career; // Ensure we're accessing the correct object
    console.log(seoData)

    if (!seoData) {
      throw new Error("No SEO data found");
    }

    // Handle SEO data and return metadata
    const robotsConfig: any = processRobotsData(seoData?.indexing);

    return {
      title: seoData?.metaTitle || "Job Opening - lanjekar  logistics",
      description:
        seoData?.metaDescription ||
        "Explore amazing career opportunities with lanjekar  logistics.",
      robots: robotsConfig,
      openGraph: {
        title: seoData?.metaTitle || "Job Opening - lanjekar  logistics",
        description:
          seoData?.metaDescription || "Join our team at lanjekar  logistics!",
        url: `/careers/${slug}`,
        locale: "en_us",
        siteName: "lanjekar logistics",
      },
      alternates: {
        canonical: `/careers/${seoData.slug || ""}`,
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "Error",
      description: "Error fetching SEO data",
    };
  }
}

// Helper function to process the indexing string
function processRobotsData(indexing: string) {
  let index = true; // Default to 'index'
  let follow = true; // Default to 'follow'
  const robotsConfig: any = {};

  if (indexing) {
    // Check for 'noindex' and 'nofollow' cases
    if (indexing.includes("noindex")) {
      index = false;
    }
    if (indexing.includes("nofollow")) {
      follow = false;
    }

    // Additional custom rules
    const otherDirectives = indexing
      .split(", ")
      .reduce((acc: any, directive: string) => {
        if (!directive.includes("noindex") && !directive.includes("nofollow")) {
          const [key, value] = directive.split(":");
          acc[key] = value;
        }
        return acc;
      }, {});

    robotsConfig.index = index;
    robotsConfig.follow = follow;
    return { ...robotsConfig, ...otherDirectives };
  }

  return robotsConfig; // Return default config if no indexing is provided
}

function page() {
  return <CareerL2page />;
}

export default page;
