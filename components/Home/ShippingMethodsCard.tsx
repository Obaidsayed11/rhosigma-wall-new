import React from "react";
import Image from "next/image";
import Button from "../Common/Button";
import { ShippingMethodsCardProps } from "@/types/Interface";
function ShippingMethodsCard({
  image,
  title,
  description,
  number,
}: ShippingMethodsCardProps) {
  return (
    <section className="w-full relative border-r border-gray-200 border-b border-t h-auto flex flex-col ">
      <Image
        src={`${image}`}
        alt={title}
        height={500}
        width={500}
        className="w-full relative h-[180px] sm:h-[300px] lg:h-[350px] object-cover"
      />
      <div className="w-full hover:bg-hover-section transition-colors ease-in-out relative h-auto flex flex-col gap-3  md:gap-4 py-4 lg:py-5 px-5 ">
        <span className="w-full relative h-auto flex items-center justify-between gap-1">
          <h2 className=" text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-text-secondary">{title}</h2>
          <p className=" text-sm md:text-2xl font-semibold text-primary ">{number}</p>
        </span>
        <p className=" text-sm md:text-base font-medium text-text-secondary line-clamp-4 ">
          {description}
        </p>
        <Button
          css="bg-transparent w-fit px-2 py-1 md:px-5 md:py-3 border border-primary text-primary hover:bg-primary hover:text-white "
          text="Get a Quote"
          isIcons={true}

        />
      </div>
    </section>
  );
}

export default ShippingMethodsCard;
