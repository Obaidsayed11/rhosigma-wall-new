import axios from "axios";
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_BASE_URL } from "@/config";

interface Category {
  _id: string;
  name: string;
}

interface Blog {
  slug: string;
  image: string;
  author: { name: string };
  readTime: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  description: string;
  category?: Category;
}

interface Career {
  slug: string;
  updated_at: string;
}

// const data = [
//   {
//     "seo": '',
//   },
//   {
//     "app-development": '',
//   },
//   {
//     "it-consulting": '',
//   },
//   {
//     "digital-marketing": '',
//   },
//   {
//     "data-science-analytics": '',
//   },
//   {
//     "testing-qa": '',
//   },
//   {
//     "ui-ux-design": '',
//   },
//   {
//     "branding": '',
//   },
//   {
//     "website-development": '',
//   },
//   {
//     "it-outsourcing": '',
//   },
// ];

async function fetchBlogs(): Promise<Blog[]> {
  try {
    const response = await axios.get(`${NEXT_PUBLIC_API_URL}/blogs`);
    return response.data.blogs;

  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

async function fetchCareers(): Promise<Career[]> {
  try {
    const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
    return response.data.careers;
  } catch (error) {
    console.error("Error fetching careers:", error);
    return [];
  }
}



// async function fetchNewsEvent(): Promise<Career[]> {
//   try {
//     const response = await axios.get(`${NEXT_PUBLIC_API_URL}/news-events`);
//     return response.data.newsEvents;
//   } catch (error) {
//     console.error("Error fetching news and events:", error);
//     return []; 
//   }
// }

export default async function sitemap() {
  const blogs = await fetchBlogs();
  const careers = await fetchCareers();
//   const newsEvent = await fetchNewsEvent();
//   const sitemapdata = await ServiceForLocation();


  let sitemap = [
    { url: `${NEXT_PUBLIC_BASE_URL}/about` },
    { url: `${NEXT_PUBLIC_BASE_URL}/faqs` },
    { url: `${NEXT_PUBLIC_BASE_URL}/contact` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services/logistics-and-transportation` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services/warehousing-and-cold-storage` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services/supply-chain-solution` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services/last-mile-delivery` },
    { url: `${NEXT_PUBLIC_BASE_URL}/services/technology-integration` },

    { url: `${NEXT_PUBLIC_BASE_URL}/technology` },
    { url: `${NEXT_PUBLIC_BASE_URL}/privacy-policy` },
    { url: `${NEXT_PUBLIC_BASE_URL}/blogs` },
    { url: `${NEXT_PUBLIC_BASE_URL}/careers` },
  ];

  
  if (blogs.length > 0) {
    sitemap = sitemap.concat(
      blogs.map((blog) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/blogs/${blog.slug}`,
        lastmod: blog.updatedAt,
      }))
    );
  }
  if (careers.length > 0) {
    sitemap = sitemap.concat(
      careers.map((career) => ({
        url: `${NEXT_PUBLIC_BASE_URL}/careers/${career.slug}`,
      }))
    );
  }


  return sitemap;
}