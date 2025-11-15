"use client";
import React from "react";
import WhyChooseCard from "../Cards/WhyChooseCard";
import { TestimonialDataProps } from "@/types/Interface";

function ClientSection({data}:TestimonialDataProps) {
 

  return (
    <section className="w-full relative h-auto flex flex-col  logistics-container">
      <div className="w-full relative h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {data.slice(0, 3).map((item, index) => (
          <WhyChooseCard
            image={"/real-time-icon.png"}
            title={`“${item.subtitle}”`}
            description={item.comment}
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-text-secondary italic"
            key={index}
          >
            <span className="flex flex-col  items-start">
              <h2 className=" text-base md:text-base font-semibold text-text-secondary">
                {item.personName}
              </h2>
              <p className="  text-sm md:text-base font-medium text-text-secondary">
                {item.designation}
              </p>
            </span>
          </WhyChooseCard>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full relative h-auto ">
        {data.slice(3, 5).map((item, index) => (
          <WhyChooseCard
            image={"/real-time-icon.png"}
            title={`“${item.subtitle}”`}
            description={item.comment}
            css="flex-col items-start justify-start gap-1"
            descriptioncss="text-text-secondary italic"
            key={index}
          >
            <span className="flex flex-col  items-start">
              <h2 className=" text-base md:text-base font-semibold text-text-secondary">
                {item.personName}
              </h2>
              <p className="  text-sm md:text-base font-medium text-text-secondary">
                {item.designation}
              </p>
            </span>
          </WhyChooseCard>
        ))}
      </div>
    </section>
  );
}

export default ClientSection;
