import React from "react";
import IndustriesCard from "../Cards/IndustriesCard";
import Button from "./Button";
import { IndustriesWeServeDataprops } from "@/types/Interface";

function IndustriesWeServe({ data }: IndustriesWeServeDataprops) {
  return (
    <section className="w-full relative h-auto  flex-col gap-10 flex items-center justify-center ">
      <div className=" grid w-full logistics-container h-auto grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 ">
        {data.map((item, index) => (
          <IndustriesCard
            url={item.url}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            key={index}
          />
        ))}

        {/* <IndustriesCard
          url={false}
          image={"/pharma-icon.png"}
          title={"Pharma & Healthcare"}
          subtitle={"Safe Handling. Cold Chain Integrity."}
          description={
            "We specialize in transporting sensitive medical supplies and pharmaceuticals through temperature-controlled logistics, ensuring compliance and care at every stage."
          }
        />
        <IndustriesCard
          image={"/food-icon.png"}
          url={false}
          title={"Food & Beverage"}
          subtitle={"Freshness Delivered, Always"}
          description={
            "Our cold chain solutions and hygienic handling processes ensure your perishables and beverages stay fresh from farm to fork, meeting safety standards and consumer expectations."
          }
        />

        <IndustriesCard
          url={false}
          image={"/agricultural-icon.png"}
          title={"Agriculture & Perishables"}
          subtitle={"From Farms to Cities, Fast and Fresh"}
          description={
            "We connect rural producers to urban markets with efficient transport and cold storage, minimizing spoilage and maximizing value for agricultural produce and perishables."
          }
        />
        <IndustriesCard
          image={"/retail-icon.png"}
          url={false}
          title={"Retail & Consumer Goods"}
          subtitle={"Efficient Movement, Maximum Shelf Life"}
          description={
            "We specialize in transporting sensitive medical supplies and pharmaceuticals through temperature-controlled logistics, ensuring compliance and care at every stage."
          }
        />
        <IndustriesCard
          image={"/mfg-icon.png"}
          title={"Mfg. & Industrial Goods"}
          url={false}
          subtitle={"Heavy Duty Logistics, Handled Smoothly"}
          description={
            "We support complex supply chains for industrial and manufacturing sectors with bulk cargo handling, route optimization, and real-time monitoring—keeping lines moving without delay."
          }
        /> */}
      </div>
      <Button
        css="bg-transparent w-fit px-5 py-3 border border-primary text-primary hover:bg-primary hover:text-white  "
        text="Get a Quote"
        isIcons={true}
      />
    </section>
  );
}

export default IndustriesWeServe;
