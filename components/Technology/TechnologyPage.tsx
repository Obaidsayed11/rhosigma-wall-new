import React from "react";
import SmartTracking from "@/components/Technology/SmartTracking";
import Realtimetracking from "@/components/Technology/Realtimetracking";
import SectionWrapper from "@/components/Common/SectionWrapper";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import OurNetwork from "@/components/Common/OurNetwork";
import FormSection from "@/components/Common/FormSection";
import ClientSection from "@/components/About/ClientSection";
import TechnologyBanner from "@/components/Technology/TechnologyBanner";
import { WhyChooseCardProps } from "@/types/Interface";
const WhyChooseUsSection: WhyChooseCardProps[] = [
  {
    image: "/real-time-icon.svg",
    title: "Real-Time Tracking",
    description:
      "Stay informed every step of the way with live tracking and instant updates—transparency you can trust.",
  },
  {
    image: "/cost-effective.svg",
    title: "Cost-Effective Solutions",
    description:
      "Optimized routes and smart logistics keep your costs low while maintaining top-tier service quality.",
  },

  {
    image: "/eco-friendly.svg",
    title: "Eco-Friendly Logistics",
    description:
      "We’re committed to sustainability—reducing carbon emissions through efficient transport modes and green practices.",
  },

  {
    image: "/pan-india.svg",
    title: "Pan-India Reach",
    description:
      "From bustling cities to remote regions, our extensive network ensures reliable delivery across the nation.",
  },

  {
    image: "/customer-care.svg",
    title: "Eco-Friendly Logistics",
    description:
      "We tailor our services to your unique needs, with dedicated support and flexible solutions designed around your business.",
  },
];
function TechnologyPage() {
  return (
    <>
      <TechnologyBanner />
      <SmartTracking />

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Services we offer"}
        description={"Smart Logistics, Seamless Delivery"}
      >
        <Realtimetracking />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why choose us"}
        description={"Efficiency, Innovation, and Trust in Every Mile"}
      >
        <WhyChooseUs data={WhyChooseUsSection}  isquoteShow={true}/>
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why choose us"}
        description={"Efficiency, Innovation, and Trust in Every Mile"}
      >
        <ClientSection data={[]} />
      </SectionWrapper>
      <OurNetwork />
      <FormSection />
    </>
  );
}

export default TechnologyPage;
