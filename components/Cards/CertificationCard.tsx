import React from "react";
import Image from "next/image";
import { CertificationCardprops } from "@/types/Interface";

function CertificationCard({certificationimage,iconimage,title,registerdyear}:CertificationCardprops) {
  return (
    <div className="w-full hover:bg-hover-section relative h-auto p-5 border  border-hover-section bg-white flex flex-col gap-5">
      <Image
        src={certificationimage}
        alt={title}
        height={500}
        width={500}
        className="w-full relative h-auto "
      />
      <span className="w-full relative flex items-center gap-2 h-auto ">
        <Image
          src={iconimage}
          alt={title}
          height={500}
          width={500}
          className=" w-[30px] md:w-[50px] h-[30px] md:h-[50px] object-cover p-1 "
        />
        <span className="flex flex-col  w-full relative h-auto ">
          <h2 className=" text-sm sm:text-base md:text-lg font-semibold text-text-secondary">
                {title}
          </h2>
          <h2 className=" text-xs md:text-sm flex items-center gap-2 font-semibold italic text-text-secondary">
            Redg. year: <p className="font-medium not-italic text-text-primary ">{registerdyear}</p>
          </h2>
        </span>
      </span>
    </div>
  );
}

export default CertificationCard;
