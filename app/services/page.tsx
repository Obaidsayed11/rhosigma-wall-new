import React from "react";

import ServicesBanner from "@/components/services/ServicesBanner";
import SectionWrapper from "@/components/Common/SectionWrapper";
import ServicesWeOffer from "@/components/Home/ServicesWeOffer";
import OurNetwork from "@/components/Common/OurNetwork";
import FormSection from "@/components/Common/FormSection";
import {
  ServicesweOfferCardprops,
  WhyChooseCardProps,
} from "@/types/Interface";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import { mergeMetadata } from "../layout";

export const metadata = mergeMetadata({
  title: " Our Logistics Services in India | Lanjekar Logistics",
  description:
    "Explore our wide range of logistics services across India, including cargo transport, freight solutions, and customized delivery safe, fast, and reliable.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Our Logistics Services in India | Lanjekar Logistics",
    description:
      "Explore our professional logistics solutions tailored to your business needs. Lanjekar Logistics offers comprehensive transportation, distribution, and warehousing services.",
    url: "/services",
  },
  alternates: {
    canonical: `/services`,
  },
});


const ServiceweOffer: ServicesweOfferCardprops[] = [
  {
    title: "Logistics & Transportation",
    subtitle: "Reliable Freight, Across Every Route",
    descrtiption:
      "Whether by road, rail, air, or sea Lanjekar Logistics offers fully integrated freight solutions that connect your cargo to every corner of India and beyond. From first-mile pickup to final delivery, we handle each consignment with precision, care, and complete visibility.",
    image: "/logistics-transportation.jpg",
    direction: false,
    slug:"logistics-transportation"
  },
  {
    title: "Warehousing & Cold Storage",
    subtitle: "Safe. Scalable. Temperature-Controlled.",
    descrtiption:
      "Our advanced warehousing infrastructure supports cold chain storage, dry storage, and real-time inventory control. Whether you're managing perishables, pharmaceuticals, or industrial goods, we keep your products protected and perfectly preserved every step of the way.",
    image: "/warehousing-solution.jpg",
 slug:"warehousing-cold-storage",
    direction: true,
  },
  {
    title: "Supply Chain Solutions",
    subtitle: "Streamlined from Source to Shelf",
    descrtiption:
      "Optimize your business with our end-to-end supply chain solutions in India. From procurement to distribution, we streamline logistics, reduce costs, and improve delivery speed for reliable, efficient operations across all sectors.",
    direction: false,
    image: "/supply-chain.jpg",
    slug:"supply-chain-solutions",
  },
  {
    title: "Last-Mile Delivery",
    subtitle: "Speed That Reaches the Final Doorstep",
    descrtiption:
      " Ensure fast and accurate deliveries with our last-mile logistics services. We offer real-time tracking and smart routing to guarantee timely doorstep delivery across India, enhancing customer satisfaction for e-commerce and retail brands.",
    direction: true,
    image: "/last-mile.jpg",
     slug:"last-mile-delivery",
  },

  {
    title: "Technology Integration",
    subtitle: "Smarter Systems for Smarter Logistics",
    descrtiption:
      "Revolutionize logistics with real-time tracking, route optimization, and smart dashboards. Our advanced tech solutions offer full supply chain visibility, helping businesses boost efficiency, reduce costs, and make data-driven decisions with confidence.",
    direction: false,
    image: "/technology-solution.jpg",
    slug:"technology-integration",
  },
];

const WhyChooseUsSection: WhyChooseCardProps[] = [
  {
    image: "/real-time-icon.png",
    title: "Real-Time Tracking",
    description:
      "Stay informed every step of the way with live tracking and instant updates—transparency you can trust.",
  },
  {
    image: "/cost-effective.png",
    title: "Cost-Effective Solutions",
    description:
      "Optimized routes and smart logistics keep your costs low while maintaining top-tier service quality.",
  },

  {
    image: "/eco-friendly.png",
    title: "Eco-Friendly Logistics",
    description:
      "We’re committed to sustainability—reducing carbon emissions through efficient transport modes and green practices.",
  },

  {
    image: "/real-time-icon.png",
    title: "Pan-India Reach",
    description:
      "From bustling cities to remote regions, our extensive network ensures reliable delivery across the nation.",
  },

  {
    image: "/customer-care.png",
    title: "Eco-Friendly Logistics",
    description:
      "We tailor our services to your unique needs, with dedicated support and flexible solutions designed around your business.",
  },
];
function page() {
  return (
    <>
      <ServicesBanner />
      <SectionWrapper
        css=""
        title={"Services we offer"}
        description={"Smart Logistics, Seamless Delivery"}
      >
        <ServicesWeOffer data={ServiceweOffer} />
      </SectionWrapper>

      {/* <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why choose us"}
        description={"Efficiency, Innovation, and Trust in Every Mile"}
      >
        <ClientSection/>
      </SectionWrapper> */}
      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why choose us"}
        description={"Efficiency, Innovation, and Trust in Every Mile"}
      >
        <WhyChooseUs data={WhyChooseUsSection} isquoteShow={false} />
      </SectionWrapper>

      <OurNetwork />
      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Get a Quote"}
        description={"Let’s Move Your Business Forward"}
      >
        <FormSection />
      </SectionWrapper>
    </>
  );
}

export default page;

