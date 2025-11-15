import Image from "next/image";
import React from "react";
import WhyChooseCard from "../Cards/WhyChooseCard";
import { WhyChooseUsProps } from "@/types/Interface";
import Button from "./Button";
function WhyChooseUs({ data, isquoteShow }: WhyChooseUsProps) {
  return (
    <section className="w-full relative h-auto flex flex-col gap-3 items-center justify-center">
      <section className="w-full relative  grid  grid-cols-1 md:grid-cols-2 gap-5  lg:gap-10  h-full logistics-container">
        <div className="w-full relative h-full flex items-start  flex-col">
          {data.map((item, index) => (
            <WhyChooseCard
              image={item.image}
              title={item.title}
              description={item.description}
              key={index}
              descriptioncss={item.descriptioncss}
            />
          ))}
        </div>
        <Image
          src={"/whychooseus.webp"}
          alt="why choose us image"
          height={400}
          width={500}
          className="w-full relative min-h-full object-cover "
        />
      </section>
      {isquoteShow && (
        <div className="w-full mt-5  logistics-container relative h-auto flex-col lg:flex-row flex items-center justify-center gap-5 lg:gap-10">
          <p className=" text-lg italic md:text-xl lg:text-xl text-center font-semibold text-text-secondary">
            Looking for logistics services in India? We’ve got you covered.
          </p>

          <Button
            css=" px-2 lg:px-3 py-1 lg:py-2 border border-primary font-medium cursor-pointer text-primary hover:bg-primary hover:text-white "
            text="Get a Quote"
            isIcons={true}
          />
        </div>
      )}
    </section>
  );
}

export default WhyChooseUs;
