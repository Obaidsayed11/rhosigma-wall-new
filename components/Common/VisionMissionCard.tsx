import React from "react";
import Image from "next/image";

import { VissionMisionCardprops } from "@/types/Interface";

function VisionMissionCard({
  image,
  title,
  description,
}: VissionMisionCardprops) {
  return (
    <div className="w-full relative h-auto  flex flex-col ">
      <Image
        src={image}
        height={500}
        width={500}
        alt={title}
        className="w-full relative max-h-[400px] lg:max-h-[300px] h-full object-cover "
      />
      <div className="w-full relative  p-5 flex flex-col gap-3 bg-white h-full  hover:bg-hover-section border  border-hover-section">
        <h2 className=" text-2xl lg:text-3xl text-text-secondary font-semibold ">{title}</h2>
        <p className="text-text-primary font-medium text-base line-clamp-3">{description}</p>
      </div>
    </div>
  );
}

export default VisionMissionCard;
