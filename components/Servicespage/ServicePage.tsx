"use client";
import { useParams} from "next/navigation";
import React, { useEffect, useState } from "react";
import ServiceL2banner from "@/components/services/ServiceL2banner";
import Button from "@/components/Common/Button";
import Image from "next/image";
import SectionWrapper from "@/components/Common/SectionWrapper";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import OurShippingMethods from "@/components/Home/WhereToInstall";
import IndustriesWeServe from "@/components/Common/IndustriesWeServe";
import ClientSection from "@/components/About/ClientSection";
import OurNetwork from "@/components/Common/OurNetwork";
import FormSection from "@/components/Common/FormSection";
import { TestimonialProps, WhyChooseCardProps } from "@/types/Interface";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { BsDot } from "react-icons/bs";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";

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
    image: "/real-time-icon.svg",
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


const IndustriesWeServedata = [
  {
    image: "/ecommerce-icon.svg",
    title: "E-Commerce",
    subtitle: "Fast, Flexible, and Fulfillment-Focused",
    description:
      "End-to-end logistics from warehouse to doorstep with last-mile delivery and reverse logistics",
    url: false,
  },
  {
    image: "/pharma-icon.svg",
    title: "Pharma & Healthcare",
    subtitle: "Safe Handling. Cold Chain Integrity.",
    description:
      "Safe transport of sensitive medical supplies with temperature-controlled logistics.",
    url: false,
  },
  {
    image: "/food-icon.svg",
    title: "Food & Beverage",
    subtitle: "Freshness Delivered, Always",
    description:
      "Cold chain solutions to maintain freshness from farm to fork.",
    url: false,
  },
  {
    image: "/agricultural-icon.svg",
    title: "Agriculture & Perishables",
    subtitle: "From Farms to Cities, Fast and Fresh",
    description:
      "Efficient transport and cold storage to minimize spoilage and boost value.",
    url: false,
  },
  {
    image: "/retail-icon.svg",
    title: "Retail & Consumer Goods",
    subtitle: "Efficient Movement, Maximum Shelf Life",
    description:
      "Streamlined inventory flow for timely shelf replenishment and customer satisfaction.",
    url: false,
  },
  {
    image: "/mfg-icon.svg",
    title: "Mfg. & Industrial Goods",
    subtitle: "Heavy Duty Logistics, Handled Smoothly",
    description:
      "WBulk cargo handling and route optimization for seamless manufacturing logistics.",
    url: false,
  },
];
function ServicesPage() {
  const { slug } = useParams();
  const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
  async function fetchClients() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/testimonials`);
      setTestimonials(response.data.testimonials);
    } catch (error) {
      console.log(error, "sjldfjlsdfj");
    }
  }

  useEffect(()=>{
    fetchClients()
  },[])

  return (
    <>
      <ServiceL2banner />

      <ul className="w-full relative h-auto flex items-center logistics-container py-5 ">
        <Breadcrumb>
          <BreadcrumbList className="">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="text-base font-medium text-text-secondary"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BsDot className="text-[30px]" />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/services"
                className="text-base font-medium text-text-secondary"
              >
                Services
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BsDot className="text-[30px]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-lg font-medium text-primary">
                {`${slug}`.split("-").join(" ")}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ul>

      <section className="w-full relative flex items-center flex-col logistics-container pt-10 pb-10 lg:pt-20 lg:pb-10 gap-5 justify-center ">
        <h2 className=" font-semibold text-3xl md:text-4xl lg:text-5xl text-text-primary  text-center">
          Move Your Business With Confidence.
        </h2>
        <p className="  text-sm md:text-base lg:text-lg font-medium text-text-secondary text-center ">
          At Lanjekar Logistics, we understand that logistics is the backbone of
          every thriving business. <br /> Our comprehensive freight and
          transportation solutions ensure that your <br /> goods move safely,
          efficiently, and on time—across every city, state, and country border.
        </p>
        <p className="text-sm md:text-base font-medium text-text-secondary text-center ">
          Whether it&apos;s by road, rail, air, or sea, we offer multimodal
          transportation services tailored to your industry&apos;s unique needs.
        </p>

        <Button
          css="border px-5 lg:px-6 lg:py-2 py-3  border-primary bg-white text-primary hover:text-white hover:bg-primary"
          text="Get a Quote"
          isIcons={true}
        />
      </section>
      <Image
        src="/serviceL2image.webp"
        alt="service L2 image"
        height={1500}
        width={1500}
        className="w-full relative min-h-[250px] lg:h-[500px]  py-10"
      />

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why Choose Lanjekar Logistics for  Freight Transportation?"}
        description={""}
      >
        <WhyChooseUs data={WhyChooseUsSection} isquoteShow={false} />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Streamline your shipping"}
        description={
          "Choose our reliable shipping methods to ensure your packages are handled with utmost care and delivered in a timely manner"
        }
      >
        <OurShippingMethods />
      </SectionWrapper>
      <SectionWrapper
        css=""
        title={"Industries we serve"}
        description={"Customized Logistics for Every Industry"}
      >
        <IndustriesWeServe data={IndustriesWeServedata} />
      </SectionWrapper>
      {testimonials.length > 0 && (
        <SectionWrapper
          css="bg-[#FFFFFF]"
          title={"Client Testimonials"}
          description={"Logistics Reviews | Client Success Stories"}
        >
          <ClientSection data={testimonials} />
        </SectionWrapper>
      )}
      <OurNetwork />

      <FormSection />
    </>
  );
}

export default ServicesPage;
