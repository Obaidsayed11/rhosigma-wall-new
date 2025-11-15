"use client";
import React from "react";
import Image from "next/image";
import CareersCard from "../Cards/CareersCard";
import { CareersDataProps } from "@/types/Interface";

function CareerSection({ data }: CareersDataProps) {
  return (
    <section className="w-full relative h-auto flex gap-10 flex-col logistics-container">
      <Image
        src={"/technology-image.png"}
        alt="Technology we used"
        height={1000}
        width={1000}
        className="w-full relative min-h-[150px] max-h-[400px] "
      />

      <section className="w-full relative h-auto grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((career, index) => (
          <CareersCard
            image={"/color-logo.png"}
            title={career.position}
            location={career.location}
            description={career.description}
            experience={career.experience}
            key={index}
          />
        ))}
      </section>
    </section>
  );
}

export default CareerSection;
