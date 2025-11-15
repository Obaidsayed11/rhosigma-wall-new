import React from "react";
import Image from "next/image";
import { CareersCardProps } from "@/types/Interface";
import Button from "../Common/Button";
function CareersCard({image,title,location,description,experience,}:CareersCardProps) {
  return (
    <div className="w-full relative h-auto flex flex-col gap-2 p-6 border border-hover-section ">
      <Image
        src={image}
        alt={title}
        height={70}
        width={70}
        className="w-[50px] h-[50px] p-2 relative object-cover"
      />

      <h2 className=" text-xl md:text-2xl font-semibold text-text-secondary ">
        {title}
      </h2>
      <p
        className=" text-base md:text-lg  mt-2 font-medium text-text-secondary gap-1 flex items-center justify-start
            w-full "
      >
        <strong className="text-text-secondary italic   font-semibold text-nowrap">Location : </strong>
        {location}
      </p>

      <p className="w-full  line-clamp-3  gap-1 text-text-secondary text-base md:text-lg  font-medium">
        <strong className="text-text-secondary font-semibold text-nowrap italic">Role Summary : </strong>
        {description}
      </p>
      <p className="w-full flex items-center gap-1 text-text-secondary text-base font-medium">
        <strong className="text-text-secondary italic font-semibold text-nowrap">Experience :  </strong>
        {experience}
      </p>
        <Button css="w-fit relative h-auto mt-2 bg-transparent border border-primary text-primary px-5 py-2 hover:bg-primary hover:text-white " text="Apply now" isIcons />
    </div>
  );
}

export default CareersCard;
