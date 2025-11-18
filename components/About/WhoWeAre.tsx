import React from "react";
import Image from "next/image";
function WhoWeAre() {
  return (
    <section className="w-full relative logistics-container py-10 gap-10 lg:gap-0 items-center justify-center h-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
      <div className="flex flex-col gap-4 lg:px-10 lg:py-10  ">
        <h2 className=" text-3xl lg:text-4xl font-semibold  text-text-secondary ">Who We Are</h2>
        <p className=" text-base  lg:text-lg font-medium text-text-secondary">
         Rhosigma is a-  fast growing company and we focused to provide complete valve automation solution under one roof in pneumatic actuators as well as in electrical actuators with optional function as per client’s requirement. We have decade of experience in valve automation and we understand the client’s requirement and provide the solution with low budget and high performance quality of valves and automation with guarantee of each products.
        </p>
      </div>
      <Image src={"/about-image.jpg"} alt="about page image" height={700} width={700} className="w-full xl:col-start-2 xl:col-end-4 relative h-full object-cover max-h-[450px]  object-top"/>
    </section>
  );
}

export default WhoWeAre;
