"use client";
import React, { useEffect, useState } from "react";
import WhoWeAre from "@/components/About/WhoWeAre";
import VisionMission from "@/components/About/VisionMission";
import SectionWrapper from "@/components/Common/SectionWrapper";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import WhyLogistics from "@/components/About/WhyLogistics";
import CareerSection from "@/components/About/CareerSection";
import ClientSection from "@/components/About/ClientSection";
import CertificationSection from "@/components/Common/CertificationSection";
import FaqsSection from "@/components/Common/FaqsSection";
import OurNetwork from "@/components/Common/OurNetwork";
import AboutHero from "@/components/About/AboutHero";
import {
  CareersProps,
  CertificateProps,
  FaqProp,
  TestimonialProps,
  WhyChooseCardProps,
} from "@/types/Interface";
import { NEXT_PUBLIC_API_URL } from "@/config";
import axios from "axios";
const WhyChooseUsSection: WhyChooseCardProps[] = [
  {
    image: "/real-time-icon.png",
    title: "Freight Transportation",
    description:
      "Stay informed every step of the way with live tracking and instant updates—transparency you can trust.",
    descriptioncss: "text-primary",
  },
  {
    image: "/cost-effective.png",
    title: "Warehousing & Inventory Management",
    description:
      "Optimized routes and smart logistics keep your costs low while maintaining top-tier service quality.",
    descriptioncss: "text-primary",
  },

  {
    image: "/eco-friendly.png",
    title: "First-Mile & Last-Mile Delivery",
    descriptioncss: "text-primary",
    description:
      "We’re committed to sustainability—reducing carbon emissions through efficient transport modes and green practices.",
  },

  {
    image: "/real-time-icon.png",
    title: "Cold Chain Logistics",
    descriptioncss: "text-primary",
    description:
      "From bustling cities to remote regions, our extensive network ensures reliable delivery across the nation.",
  },

  {
    image: "/customer-care.png",
    title: "Custom Supply Chain Solutions for SMEs and Enterprises",
    descriptioncss: "text-primary",
    description:
      "We tailor our services to your unique needs, with dedicated support and flexible solutions designed around your business.",
  },
];
function AboutPage() {
  const [Certificates, setCertificates] = useState<CertificateProps[]>([]);
  const [careers, setCareers] = useState<CareersProps[]>([]);
  const [faqs, setFaqs] = useState<FaqProp[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  async function fetchClients() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/testimonials`);
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.log(error, "sjldfjlsdfj");
    }
  }

  async function fetchCareers() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
      console.log(response.data);
      setCareers(response.data.careers);
    } catch (error) {
      console.log(error, "careers section error");
    }
  }
  async function FetchCertificates() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/certificates`);
      setCertificates(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  async function FetchFaqs() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/faqs`);
      console.log(response.data, "faqs data");
      setFaqs(response.data.faqs);
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    fetchClients();
    FetchFaqs();
    fetchCareers();
    FetchCertificates();
  }, []);
  return (
    <>
      <AboutHero />
      <WhoWeAre />

      <SectionWrapper
        css=""
        title={"Our Vision & Mission"}
        description={"Vision and Mission of Lanjekar Logistics"}
      >
        <VisionMission />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"What We Do"}
        description={"Logistics Services | Freight, Warehousing, Distribution)"}
      >
        <WhyChooseUs data={WhyChooseUsSection} isquoteShow={true} />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why Choose Lanjekar Logistics?"}
        description={"Best Logistics Company in India | Why Choose Us"}
      >
        <WhyLogistics isQuotebtn={true} />
      </SectionWrapper>

      <OurNetwork />

      {careers && (
        <SectionWrapper
          css=""
          title={"Careers at Lanjekar Logistics"}
          description={"Careers in Logistics | Join Our Team"}
        >
          <CareerSection data={careers} />
        </SectionWrapper>
      )}
      {testimonials.length > 0 && (
        <SectionWrapper
          css="bg-[#FFFFFF]"
          title={"Client Testimonials"}
          description={"Logistics Reviews | Client Success Stories"}
        >
          <ClientSection data={testimonials} />
        </SectionWrapper>
      )}

      {/* <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Client Testimonials"}
        description={"Logistics Reviews | Client Success Stories"}
      >
        <ClientSection />
      </SectionWrapper> */}

      {Certificates.length > 0 && (
        <SectionWrapper
          css="bg-[#FFFFFF]"
          title={"Certifications & Compliance"}
          description={"Logistics Certifications | ISO, FSSAI, etc."}
        >
          <CertificationSection data={Certificates} />
        </SectionWrapper>
      )}
      {faqs.length > 0 && (
        <SectionWrapper
          css="bg-[#FFFFFF]"
          title={"FAQ - About Lanjekar Logistics"}
          description={"Common Questions About Our Logistics Services"}
        >
          <FaqsSection data={faqs} />
        </SectionWrapper>
      )}
    </>
  );
}

export default AboutPage;
