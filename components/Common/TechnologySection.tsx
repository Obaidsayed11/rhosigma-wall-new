import React from "react";
import Image from "next/image";
import IndustriesCard from "../Cards/IndustriesCard";
import { TechnologySectiondataProps } from "@/types/Interface";
function TechnologySection({ data }: TechnologySectiondataProps) {
  return (
    <section className="w-full relative h-auto flex flex-col logistics-container gap-10">
      <Image
        src={"/technology-image.webp"}
        alt="Technology we used"
        height={1400}
        width={1500}
        className="w-full relative min-h-[150px] max-h-[450px] "
      />

      <section className="w-full relative h-auto grid-cols-1 grid  sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((industries, index) => (
          <IndustriesCard
            linktext={industries.linktext}
            linkurl={industries.linkurl}
            url={industries.url}
            image={industries.image}
            title={industries.title}
            subtitle={industries.subtitle}
            description={industries.description}
            key={index}
          />
        ))}
        {/* <IndustriesCard
          image={"/retail-icon.png"}
          linktext="Know more"
          linkurl=""
          url={true}
          title={"Retail & Consumer Goods"}
          subtitle={"Efficient Movement, Maximum Shelf Life"}
          description={
            "We specialize in transporting sensitive medical supplies and pharmaceuticals through temperature-controlled logistics, ensuring compliance and care at every stage."
          }
        />
        <IndustriesCard
          image={"/mfg-icon.png"}
          title={"Mfg. & Industrial Goods"}
          linktext="Know more"
          linkurl=""
          url={true}
          subtitle={"Heavy Duty Logistics, Handled Smoothly"}
          description={
            "We support complex supply chains for industrial and manufacturing sectors with bulk cargo handling, route optimization, and real-time monitoring—keeping lines moving without delay."
          }
        /> */}
      </section>
    </section>
  );
}

export default TechnologySection;
