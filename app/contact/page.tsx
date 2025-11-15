import React from "react";
import Link from "next/link";
import ContactForm from "@/components/Common/ContactForm";
import LocationSectiobn from "@/components/Common/LocationSectiobn";
import { mergeMetadata } from "../layout";
export const metadata = mergeMetadata({
  title: "Contact Lanjekar Logistics | Reliable Logistics Services in India",
  description:
    "Get in touch with Lanjekar Logistics for all your logistics and transportation needs across India. Reach out to us for inquiries, quotes, or support today.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Contact Lanjekar Logistics | Reliable Logistics Services in India",
    description:
      "Get in touch with Lanjekar Logistics for all your logistics and transportation needs across India. Reach out to us for inquiries, quotes, or support today.",
    url: "/contact",
  },
  alternates: {
    canonical: `/contact`,
  },
});

function page() {
  return (
    <>
      <section className="w-full relative h-auto  logistics-container grid py-10 lg:py-20 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <div className="w-fullrelative h-auto flex flex-col gap-2.5 md:gap-3.5 lg:gap-6 cols-span-1 xl:col-span-2">
          <h2 className=" text-3xl md:text-4xl lg:text-5xl lx:text-6xl font-semibold text-text-secondary ">
            Contact Us
          </h2>

          <p className=" text-sm md:text-base lg:text-lg font-medium  text-text-secondary">
            Email, call or complete the form to know how Lanjekar Logistics can
            solve your logistics problem.
          </p>

          <Link
            href={"melto:info@lanjekarlogistics.com"}
            className="text-sm md:text-base w-fit lg:text-lg font-medium text-text-secondary"
          >
            {" "}
            info@lanjekarlogistics.com
          </Link>

          <Link
            href={"tel:+91 8655587403"}
            className="text-text-secondary w-fit font-medium text-sm md:text-base lg:text-lg "
          >
            +91  8655587403
          </Link>

          <Link
            href={"/"}
            className="text-text-secondary  w-fit underline font-semibold text-base lg:text-lg "
          >
            Customer Support
          </Link>

          <section className="w-full relative h-auto grid grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 mt-10 md:mt-10 xl:mt-20">
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-text-secondary ">
                Customer Support
              </h2>
              <p className=" text-sm sm:text-base font-medium text-text-secondary line-clamp-3 ">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-text-secondary">
                Customer Support
              </h2>
              <p className="text-sm sm:text-base font-medium text-text-secondary line-clamp-3 ">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
            <div className="flex flex-col gap-1.5">
              <h2 className="text-xl font-semibold text-text-secondary">
                Customer Support
              </h2>
              <p className="text-sm sm:text-base font-medium text-text-secondary line-clamp-3 ">
                Our support team is available around the clock to address any
                concerns or queries you may have.
              </p>
            </div>
          </section>
        </div>
        <ContactForm />
      </section>
      <LocationSectiobn />
    </>
  );
}

export default page;


