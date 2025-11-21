import React from "react";

import AboutPage from "@/components/About/AboutPage";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "About Us | Rhosigma Valves – Trusted Valves Services in India",
  description:
    "Rhosigma is a fast growing company and we focused to provide complete valve automation solution under one roof in Rhosigma actuators as well as in electrical actuators with optional function as per client’s requirement.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Us | Rhosigma Valves – Trusted Valves Services in India",
    description:
      "Rhosigma is a fast growing company and we focused to provide complete valve automation solution under one roof in Rhosigma actuators as well as in electrical actuators with optional function as per client’s requirement.",
    url: "/about",
  },
  alternates: {
    canonical: `/about`,
  },
});
function page() {
  return (
    // <>
    //   <AboutHero />
    //   <WhoWeAre />

    //   <SectionWrapper
    //     css=""
    //     title={"Our Vision & Mission"}
    //     description={"Vision and Mission of Lanjekar Logistics"}
    //   >
    //     <VisionMission />
    //   </SectionWrapper>

    //   <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"What We Do"}
    //     description={"Logistics Services | Freight, Warehousing, Distribution)"}
    //   >
    //     <WhyChooseUs data={WhyChooseUsSection}  isquoteShow={true}/>
    //   </SectionWrapper>

    //   <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"Why Choose Lanjekar Logistics?"}
    //     description={"Best Logistics Company in India | Why Choose Us"}
    //   >
    //     <WhyLogistics  isQuotebtn={true}/>
    //   </SectionWrapper>

    //   <OurNetwork />

    //   <SectionWrapper
    //     css=""
    //     title={"Careers at Lanjekar Logistics"}
    //     description={"Careers in Logistics | Join Our Team"}
    //   >
    //     <CareerSection />
    //   </SectionWrapper>

    //   <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"Client Testimonials"}
    //     description={"Logistics Reviews | Client Success Stories"}
    //   >
    //     <ClientSection />
    //   </SectionWrapper>

    //   {/* <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"Client Testimonials"}
    //     description={"Logistics Reviews | Client Success Stories"}
    //   >
    //     <ClientSection />
    //   </SectionWrapper> */}

    //   <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"Certifications & Compliance"}
    //     description={"Logistics Certifications | ISO, FSSAI, etc."}
    //   >
    //     <CertificationSection />
    //   </SectionWrapper>

    //   <SectionWrapper
    //     css="bg-[#FFFFFF]"
    //     title={"FAQ - About Lanjekar Logistics"}
    //     description={"Common Questions About Our Logistics Services"}
    //   >
    //     <FaqsSection />
    //   </SectionWrapper>
    // </>
    <>
      <AboutPage />
    </>
  );
}

export default page;


