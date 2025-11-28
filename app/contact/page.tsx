import React from "react";
import Link from "next/link";
import ContactForm from "@/components/Common/ContactForm";
import LocationSectiobn from "@/components/Common/LocationSectiobn";
import { mergeMetadata } from "../layout";
import ContactHero from "../../components/Common/ContactHero";
import ProductsSection from "@/components/Home/ProductsSection";
import { productsData } from "@/lib/productsTitle";
import SectionWrapper from "@/components/Common/SectionWrapper";

export const metadata = mergeMetadata({
  title: "Contact Rhosigma | Industrial Valves & Automation Solutions",
  description:
    "Reach out to Rhosigma for product inquiries, custom valve solutions, actuator specifications, or technical support.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Contact Rhosigma | Industrial Valves & Automation Solutions",
    description:
      "Get in touch with Rhosigma for all your industrial valve requirements, actuator solutions, and technical queries.",
    url: "/contact",
  },
  alternates: {
    canonical: `/contact`,
  },
});

function page() {
  return (
    <>
      <ContactHero />

      {/* Contact Layout */}
      <section className="w-full logistics-container py-10 lg:py-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 md:col-span-1 xl:col-span-2">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-secondary">
            Contact Us
          </h2>

          <p className="text-base md:text-lg text-text-secondary max-w-xl">
            Email, call, or complete the form to learn how Rhosigma can provide
            the right valve or automation solution for your application.
          </p>

          <div className="flex flex-col gap-3 pt-3">
            <div className="col-span-1 ">
              <span className="text-text-primary text-md font-bold inline-flex">Email:&nbsp;&nbsp;&nbsp;</span>
               <Link
              href="mailto:info@rhosigma.in"
              className="text-base md:text-lg text-primary font-medium"
            >info@rhosigma.in
            </Link>
            <span className="px-2 text-primary">/</span>
            <Link
              href="mailto:sales@rhosigma.in"
              className="text-base md:text-lg text-primary font-medium"
            >
              sales@rhosigma.in
            </Link>
            </div>



             <div className="col-span-1 ">
              <span className="text-text-primary text-md font-bold inline-flex">Phone:&nbsp;&nbsp;&nbsp;</span>
               <Link
              href="tel:+918655587403"
              className="text-base md:text-lg text-primary font-medium"
            >
               +91 86555 87403
            </Link>
            <span className="px-2 text-primary">/</span>
            <Link
               href="tel:+9175739 03976"
              className="text-base md:text-lg text-primary font-medium"
            >
               +91 75739 03976
            </Link>
            </div>
            <span className="text-text-primary text-md font-bold flex">Address:&nbsp;&nbsp;&nbsp;</span>
           <p className="text-text-secondary text-sm md:text-base leading-relaxed  max-w-xl">
        602-B, Virani Business Center, Opp Bharat Gears Limited,
        Kausa Mumbra, Thane 400612.
      </p>

            {/* <Link
              href="tel:+918655587403"
              className="text-base md:text-lg text-text-secondary font-medium"
            >
              +91 86555 87403
            </Link> */}
            

            {/* <Link
              href="/"
              className="underline text-base md:text-lg text-text-secondary font-semibold"
            >
              Customer Support
            </Link> */}
          </div>

          

          {/* Support Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
            
            <div className="p-4 bg-white shadow-md ">
              <h2 className="text-xl font-semibold text-text-secondary">
                Customer Support
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2">
                Our team is available to assist with order inquiries,
                product selection, or support requests.
              </p>
            </div>

            <div className="p-4 bg-white shadow-md ">
              <h2 className="text-xl font-semibold text-text-secondary">
                Technical Assistance
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2">
                Get expert guidance on valve sizing, actuator selection,
                or integration support.
              </p>
            </div>

            <div className="p-4 bg-white shadow-md ">
              <h2 className="text-xl font-semibold text-text-secondary">
                Sales & Inquiries
              </h2>
              <p className="text-sm sm:text-base text-text-secondary mt-2">
                Contact our sales team for quotations, catalogs,
                and distributor information.
              </p>
            </div>

          </section>
        </div>

        {/* Contact Form */}
        <ContactForm />
      </section>

      <LocationSectiobn />

      <SectionWrapper css="bg-primary" title="" description="">
        <ProductsSection data={productsData} />
      </SectionWrapper>
    </>
  );
}

export default page;
