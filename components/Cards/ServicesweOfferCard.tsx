import React from "react";
import Button from "../Common/Button";
import Image from "next/image";
import { ServicesweOfferCardprops } from "@/types/Interface";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";

function ServicesweOfferCard({
  image,
  title,
  subtitle,
  descrtiption,
  direction,
  toGoL2Page,
  GoL2BtnText,
  slug
}: ServicesweOfferCardprops) {
  return (
   <section

  className={`w-full relative h-full 
    flex flex-col
    lg:flex-row ${direction ? "lg:flex-row-reverse" : ""}`}
>


      <section className="w-full relative h-full  hover:bg-hover-section transition-colors ease-in-out  bg-section">
        <div className=" p-5 xl:p-10 w-full relative h-auto flex flex-col gap-3  ">
          <h2 className=" text-xl lg:text-3xl xl:text-4xl  font-bold lg:font-semibold text-text-secondary ">
            {title}
          </h2>
          <p className="text-text-secondary font-semibold text-base xl:text-lg line-clamp-2">
            {subtitle}
          </p>

          <p className="text-text-secondary font-medium text-sm xl:text-base line-clamp-3">
            {descrtiption}
          </p>
          {!toGoL2Page && (
            <Button
              css="bg-transparent w-fit px-3 lg:px-5 py-2 lg:py-3 border border-primary text-primary hover:bg-primary hover:text-white  "
              text="Get a Quote"
              isIcons={true}
            />
          )}
          {
            toGoL2Page &&
            <Link href={`/products/${slug}`} className="text-base font-medium  text-primary px-5 py-2 gap-2  bg-transparent border border-primary hover:bg-primary hover:text-white w-fit flex items-center justify-center">
              Explore Product
               <LuArrowUpRight className="text-[20px]" />
            </Link>
          }
        </div>
      </section>
      <Image
  src={image}
  className="
    w-full 
    h-auto 
    max-h-[260px] 
    lg:min-h-[320px] lg:max-h-[320px]
    object-contain bg-white
  "
  alt={title}
  height={1000}
  width={1000}
/>

    </section>
  );
}

export default ServicesweOfferCard;
