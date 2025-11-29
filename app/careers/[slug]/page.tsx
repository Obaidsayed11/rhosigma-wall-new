// import React from "react";
// import CareerL2page from "@/components/careers/CareerL2page";
// import { NEXT_PUBLIC_API_URL } from "@/config";
// import axios from "axios";
// export async function generateMetadata({
//   params,
// }: {
//   params: any;
// }) {
//   const { slug } = params;
//   const apiUrl = `${NEXT_PUBLIC_API_URL}/careers/${slug}`;

//   try {
//     // Fetch job details based on the slug
//     const response = await axios.get(apiUrl);
//     const seoData = response.data.career; // Ensure we're accessing the correct object
//     console.log(seoData)

//     if (!seoData) {
//       throw new Error("No SEO data found");
//     }

//     // Handle SEO data and return metadata
//     const robotsConfig: any = processRobotsData(seoData?.indexing);

//     return {
//       title: seoData?.metaTitle || "Job Opening - lanjekar  logistics",
//       description:
//         seoData?.metaDescription ||
//         "Explore amazing career opportunities with lanjekar  logistics.",
//       robots: robotsConfig,
//       openGraph: {
//         title: seoData?.metaTitle || "Job Opening - lanjekar  logistics",
//         description:
//           seoData?.metaDescription || "Join our team at lanjekar  logistics!",
//         url: `/careers/${slug}`,
//         locale: "en_us",
//         siteName: "lanjekar logistics",
//       },
//       alternates: {
//         canonical: `/careers/${seoData.slug || ""}`,
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching SEO data:", error);
//     return {
//       title: "Error",
//       description: "Error fetching SEO data",
//     };
//   }
// }

// // Helper function to process the indexing string
// function processRobotsData(indexing: string) {
//   let index = true; // Default to 'index'
//   let follow = true; // Default to 'follow'
//   const robotsConfig: any = {};

//   if (indexing) {
//     // Check for 'noindex' and 'nofollow' cases
//     if (indexing.includes("noindex")) {
//       index = false;
//     }
//     if (indexing.includes("nofollow")) {
//       follow = false;
//     }

//     // Additional custom rules
//     const otherDirectives = indexing
//       .split(", ")
//       .reduce((acc: any, directive: string) => {
//         if (!directive.includes("noindex") && !directive.includes("nofollow")) {
//           const [key, value] = directive.split(":");
//           acc[key] = value;
//         }
//         return acc;
//       }, {});

//     robotsConfig.index = index;
//     robotsConfig.follow = follow;
//     return { ...robotsConfig, ...otherDirectives };
//   }

//   return robotsConfig; // Return default config if no indexing is provided
// }

// function page() {
//   return <CareerL2page />;
// }

// export default page;

import React from "react";
import CareerL2page from "@/components/careers/CareerL2page";
import { CareersProps } from "@/types/Interface";

// 🔥 Same local careers dataset
const careersData: CareersProps[] = [
  {
    position: "React Native Developer",
    type: "Full-Time",
    location: "Mumbai, India",
    shift: "Day Shift",
    experience: "1-3 Years",
    salary: "₹4,50,000 - ₹6,00,000 / year",
    description: "Responsible for developing and maintaining cross-platform mobile applications.",
    content:
      "We are looking for a skilled React Native Developer to build high-quality mobile applications.",
    slug: "react-native-developer",
    metaTitle: "React Native Developer Job Opening | Careers",
    metaDescription:
      "Join our team as a React Native Developer.",
    requiredSkill: "React Native, Redux, REST APIs, JavaScript, TypeScript, Git",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    position: "MERN Stack Developer",
    type: "Full-Time",
    location: "Bangalore, India",
    shift: "Day Shift",
    experience: "2-4 Years",
    salary: "₹5,00,000 - ₹8,00,000 / year",
    description:
      "Work on full-stack web applications using MongoDB, Express, React, and Node.js.",
    content:
      "As a MERN Developer, you will build scalable backend APIs and frontend systems.",
    slug: "mern-stack-developer",
    metaTitle: "MERN Stack Developer Job Opening | Careers",
    metaDescription: "We are hiring MERN Stack Developers.",
    requiredSkill: "MongoDB, Express.js, React.js, Node.js",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  // ... add rest here
];

// 🔥 SEO Metadata using local dataset (NO API)
export async function generateMetadata({ params }: { params: any }) {
  const { slug } = params;

  const job = careersData.find((item) => item.slug === slug);
  

  if (!job) {
    return {
      title: "Job Not Found",
      description: "No job found for this slug.",
    };
  }

  return {
    title: job.metaTitle || job.position,
    description: job.metaDescription || job.description,
    openGraph: {
      title: job.metaTitle || job.position,
      description: job.metaDescription || job.description,
      url: `/careers/${slug}`,
    },
    alternates: {
      canonical: `/careers/${slug}`,
    },
  };
}

// 🔥 Actual page component
export default function Page({ params }: { params: any }) {
  const { slug } = params;

  const job = careersData.find((item) => item.slug === slug);

  if (!job) {
    return <div className="p-10 text-center">Job Not Found</div>;
  }

  return <CareerL2page job={job} />; // pass data to component
}

