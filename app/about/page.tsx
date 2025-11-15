import React from "react";

import AboutPage from "@/components/About/AboutPage";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "About Us | Lanjekar Logistics – Trusted Logistics Services in India",
  description:
    "Learn about Lanjekar Logistics a leading provider of logistics services across India. We specialize in secure, timely cargo and freight transportation.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Us | Lanjekar Logistics – Trusted Logistics Services in India",
    description:
      "Learn about Lanjekar Logistics a leading provider of logistics services across India. We specialize in secure, timely cargo and freight transportation.",
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


