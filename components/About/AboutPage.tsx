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
import CertificatesPage from "./CertificatesPage";
import {
  CareersProps,
  CertificateProps,
  FaqProp,
  TestimonialProps,
  WhyChooseCardProps,
  WhyChooseRhCardProps,
} from "@/types/Interface";
import { NEXT_PUBLIC_API_URL } from "@/config";
import axios from "axios";
import TeamCards from "../Common/TeamCards";
import WhereToInstall from "../Home/WhereToInstall";
import WhyChooseRh from "../Common/WhyChooseRh";
import ProductsSection from "../Home/ProductsSection";
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
  {
    image: "/customer-care.png",
    title: "Custom Supply Chain Solutions for SMEs and Enterprises",
    descriptioncss: "text-primary",
    description:
      "We tailor our services to your unique needs, with dedicated support and flexible solutions designed around your business.",
  },
];

const prodcutsData = [
  {
    title: "Rack and Pinion Actuator",
    url: "/home",
  },
  {
    title: "Scotch Yoke Actuatorr",
    url: "/home",
  },
  {
    title: "PTL Series Electrical Actuator",
    url: "/home",
  },
  {
    title: "PVQ explosion proof electric actuator",
    url: "/home",
  },
  {
    title: "PHQ explosion proof electric actuator",
    url: "/home",
  },
  {
    title: "aum multi turn electrical actuator",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated 3 Pcs Ball Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated 2 Pcs Ball Valve",
    url: "/home",
  },
  {
    title:
      "Pneumatic Rotary Actuator Operated 3 Way / 4 Way Ball Valve Screwed End / Flanged End.",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated Wafer Type Ball Valver",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated FEP / PFA Lined Ball Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated UPVC Ball Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Rotary Actuator Operated PP Ball Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated Rubber Lined Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Pneumatic Actuator Operated Rubber Lined Double Flange Type Butterfly Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated Rubber Lined Lug Type Butterfly Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated Spherical Disc Valve 150# & 300#",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated FEP / PFA Lined Butterfly Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated PTFE Lined Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Pneumatic Actuator Operated Aluminium Pressure Die Cast Butterly Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated Wafer Type Metal Seated Damper Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated Double Flange Fabricated Damper Valve",
    url: "/home",
  },
  {
    title: "Pneumatic Actuator Operated UPVC Wafer Type Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Pneumatic Actuator Operated Wafer Type / TC End Butterfly Valve For Pharma Application.",
    url: "/home",
  },
  {
    title: "Electrical On/off, Modulating, Intergral Starter UPVC Ball Valve",
    url: "/home",
  },
  {
    title: "Motorized 2 Pcs Ball Valve Flanged End ASA 150#/300#",
    url: "/home",
  },
  {
    title: "Motorized 2 Pcs FEP / PFA Lined Ball Valve Flanged End",
    url: "/home",
  },
  {
    title: "Motorized 3 WAY / 4 WAY BALL VALVE",
    url: "/home",
  },
  {
    title:
      "Motorized 3 pcs ball valve Screwed end / Flanged end ASA 150# / 300#",
    url: "/home",
  },
  {
    title: "Motorized PP Ball Valve",
    url: "/home",
  },
  {
    title: "Motorized Wafer type Ball Valve",
    url: "/home",
  },
  {
    title:
      "Elecrical On/off, Moudlating And Intergral Starter FEP / PFA Lined Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Electrical On/Off, Modulating And Integral Starter Spherical Disc Valve 150# & 300#",
    url: "/home",
  },
  {
    title: "Motorized Double Flange Butterfly Valve",
    url: "/home",
  },
  {
    title: "Motorized Wafer type Butterfly Valve",
    url: "/home",
  },
  {
    title: "Motorize Rubber Seated Lug type Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Electrical ON/OFF, Modulating And Integral Started PTFE Lined Butterfly Valve",
    url: "/home",
  },
  {
    title:
      "Modulating and Integral Starter Double Flange Fabricated Damper Valve",
    url: "/home",
  },
  {
    title: "Motorized aluminium butterfly valve",
    url: "/home",
  },
  {
    title: "Motorized UPVC Wafer Type Butterfly Valve",
    url: "/home",
  },
  {
    title: "2 2 way pilot operated diaphragm type solenoid valve",
    url: "/home",
  },
  {
    title: "2/2 Way Semi lift Diaphragm Solenoid Valve",
    url: "/home",
  },
  {
    title: "2/2 Way Pilot operated piston type steam solenoid valve",
    url: "/home",
  },
  {
    title: "Aluminium Flame Proof Type Solenoid Valvese",
    url: "/home",
  },
  {
    title: "2/2 Way Direct Acting Solenoid Valve",
    url: "/home",
  },
  {
    title:
      "2/2 Way Pneumatic Single & Double Acting Operated Angle Type On/Off Control Valve",
    url: "/home",
  },
  {
    title: "Model APL2N (Micro Limit Switches)",
    url: "/home",
  },
  {
    title: "Model APL3N (Micro Limit Switches)",
    url: "/home",
  },
  {
    title: "Model APL4N (Micro Limit Switches)",
    url: "/home",
  },
  {
    title: "Model ITS 100 (Micro Limit Switches)",
    url: "/home",
  },
  {
    title: "Yt-1000 Electro Pneumatic Valve Positioner",
    url: "/home",
  },
  {
    title: "L8A-100 Electro Pneumatic Valve Positioner",
    url: "/home",
  },
  {
    title: "PSP-25 Series Smart Positioner",
    url: "/home",
  },
  {
    title: "Quarter Turn Manual Over Ride / Gear Box",
    url: "/home",
  },
  {
    title: "Air Filter Regulator",
    url: "/home",
  },
  {
    title: "5/2 Way Single / Double Coil",
    url: "/home",
  },
  {
    title: "3/2 Way Single / Double Coil",
    url: "/home",
  },
  {
    title:
      "Electrical ON/OFF, Modulating And ntegral Starter Wafer Type Metal Seated Damper Valve",
    url: "/home",
  },
  {
    title:
      "Electrical on/off, modulating and integral starter Wafer Type / TC End Butter Valve For Pharma Application",
    url: "/home",
  },
];

const WhyChooseUsRhSection: WhyChooseRhCardProps[] =[
  {
    number: "01", // CHANGED: from image to number
    // title: "Freight Transportation",
    description:
      "Prompt technical support by understanding of customer's need.",
    descriptioncss: "text-primary",
  },
  {
    number: "02",
    // title: "Warehousing & Inventory Management",
    description:
      "On time delivery.",
    descriptioncss: "text-primary",
  },
  {
    number: "03",
    // title: "Competitive price for best quality products.",
    descriptioncss: "text-primary",
    description:"Competitive price for best quality products.",
  },
  {
    number: "04",
    // title: "Cold Chain Logistics",
    descriptioncss: "text-primary",
    description:
      "International standards and CE, DAC, ROHS, IAF certification.",
  },
  {
    number: "05",
    // title: "Custom Supply Chain Solutions for SMEs and Enterprises",
    descriptioncss: "text-primary",
    description:
      "Decades of experience in valve automation.",
  },
  {
    number: "06",
    // title: "Custom Supply Chain Solutions for SMEs and Enterprises",
    descriptioncss: "text-primary",
    description:
      "Complete valve automation in pneumatic as well as electrical actuators.",
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
        title={"Our Team"}
        description={"Meet Our Dynamic Team Members"}
      >
        <TeamCards />
      </SectionWrapper>

       <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Where to install"}
        description={"Ideal Installation Locations for Products."}
      >
        <WhereToInstall />
      </SectionWrapper>


       <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Our Certification"}
        description={"Elevated Excellence in Certified Standards."}
      >
        <CertificatesPage  />
      </SectionWrapper>

      {/* <SectionWrapper
        css=""
        title={"Our Vision & Mission"}
        description={"Vision and Mission of Lanjekar Logistics"}
      >
        <VisionMission />
      </SectionWrapper> */}

      {/* <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"What We Do"}
        description={"Logistics Services | Freight, Warehousing, Distribution)"}
      >
        <WhyChooseUs data={WhyChooseUsSection} isquoteShow={true} />
      </SectionWrapper> */}


      {/* <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why Rhosigma"}
        description={"Compelling Advantages of Rhosigma"}
      >
        <WhyChooseRh data={WhyChooseUsRhSection} isquoteShow={true} />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why Choose Lanjekar Logistics?"}
        description={"Best Logistics Company in India | Why Choose Us"}
      >
        <WhyLogistics isQuotebtn={true} />
      </SectionWrapper>

      <OurNetwork /> */}

      {/* {careers && (
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
      )} */}

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
      <SectionWrapper css="bg-primary xl:mt[-30]" title={""} description={""}>
        <ProductsSection data={prodcutsData} />
      </SectionWrapper>
    </>
  );
}

export default AboutPage;
