import React from "react";
import Image from "next/image";
function WhoWeAre() {
  return (
    <section className="w-full relative logistics-container py-10 gap-10 lg:gap-0 items-center justify-center h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      <div className="flex flex-col gap-4 lg:px-10 lg:py-10  ">
        <h2 className=" text-3xl lg:text-4xl font-semibold  text-text-secondary ">Who We Are</h2>
        <p className=" text-base  lg:text-lg font-medium text-text-secondary">
          Lanjekar Logistics is a trusted name in the Indian logistics and
          supply chain industry, delivering end-to-end freight, warehousing, and
          distribution solutions for businesses of all sizes. With a passion for
          efficiency and a legacy of reliability, we are the people behind every
          mile—making complex logistics simple.
        </p>
      </div>
      <Image src={"/about-image.jpg"} alt="about page image" height={700} width={700} className="w-full xl:col-start-2 xl:col-end-4 relative h-full object-cover max-h-[450px]  object-top"/>
    </section>
  );
}

export default WhoWeAre;
