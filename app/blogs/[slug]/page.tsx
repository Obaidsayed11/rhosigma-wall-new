import React from 'react'
import BlogL2page from '@/components/blogs/BlogL2page'
import { NEXT_PUBLIC_API_URL } from '@/config';
import axios from 'axios';


export async function generateMetadata({
  params,
}: {
  params: any;
}) {
  const { slug } = params;

  const apiUrl = `${NEXT_PUBLIC_API_URL}/blogs/${slug}`;

  try {
    const response = await axios.get(apiUrl);
    const seoData = response.data.blog;

    return {
      title: seoData?.metaTitle,
      description: seoData?.metaDescription,
      robots: (() => {
        let index: boolean | undefined;
        let follow: boolean | undefined;

        switch (true) {
          case seoData?.indexing?.includes("noindex, follow"):
            index = false;
            follow = true;
            break;
          case seoData?.indexing?.includes("noindex") &&
            seoData?.indexing?.includes("nofollow"):
            index = false;
            follow = false;
            break;
          case seoData?.indexing?.includes("noindex"):
            index = false;
            break;
          case seoData?.indexing?.includes("nofollow"):
            follow = false;
            break;
          default:
            index =
              seoData?.indexing?.includes("max-video-preview") &&
              seoData?.indexing?.includes("max-image-preview") &&
              seoData?.indexing?.includes("max-snippet");

            follow =
              seoData?.indexing?.includes("max-video-preview") &&
              seoData?.indexing?.includes("max-image-preview") &&
              seoData?.indexing?.includes("max-snippet");
            break;
        }

        const robotsConfig: any = {};
        if (index !== undefined) robotsConfig.index = index;
        if (follow !== undefined) robotsConfig.follow = follow;

        // Split indexing into other directives, ignoring noindex and nofollow
        const otherDirectives = seoData?.indexing
          ?.split(", ")
          .reduce((acc: any, directive: any) => {
            // Only add directives that are not 'noindex' or 'nofollow'
            if (
              !directive.includes("noindex") &&
              !directive.includes("follow")
            ) {
              const [key, value] = directive.split(":");
              acc[key] = value;
            }
            return acc;
          }, {});

        return { ...robotsConfig, ...otherDirectives };
      })(),

      openGraph: {
        title: seoData?.metaTitle,
        description: seoData?.metaDescription,
        url: `/blogs/${slug}`,
        images: [
          {
            url: `https://lanjekarlogistics.com/opengraph-image.png`, // Use absolute URL
            width: 4800,
            height: 2520,
          },
        ],
        locale: "en_us",
        siteName: "Lanjekar logistics",
      },
      alternates: {
        canonical: `/blogs/${seoData.slug}`, 
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


function page() {
  return (
    <>
        <BlogL2page/>
    
    </>
  )
}

export default page