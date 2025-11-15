import React from "react";
import Image from "next/image";
import { IndustriesCardprops } from "@/types/Interface";
import Link from "next/link";
function IndustriesCard({
  title,
  subtitle,
  image,
  description,
  linkurl,
  url,
  linktext,
}: IndustriesCardprops) {
  return (
    <div className="flex items-start border hover:bg-hover-section bg-background border-gray-100 justify-start gap-1 lg:gap-2 flex-col p-5 lg:p-8">
      <Image
        src={image}
        alt={title}
        height={1000}
        width={1000}
        className="h-[35px] w-[35px] object-contain   "
      />
      <h2 className="  text-xl md:text-2xl lg:text-2xl font-semibold text-text-secondary  ">{title}</h2>
      {
        subtitle &&
      <p className="  text-base md:text-lg font-semibold text-text-secondary">{subtitle}</p>

      }
      <p className="text-sm md:text-base font-normal text-text-secondary">{description}</p>

      {url && (
        <Link href={`${linkurl}`} className="mt-1.5 line-clamp-3 text-base font-normal text-text-secondary underline">
          {linktext}
        </Link>
      )}
    </div>
  );
}

export default IndustriesCard;
