"use client";
import React from "react";
import ApplyJob from "../Common/ApplyJob";
import Link from "next/link";
import { CareersProps } from "@/types/Interface";

function CareersCard({
  position,
  createdAt,
  description,
  salary,
  slug,
  location,
}: CareersProps) {
  async function SharePost() {
    try {
      const shareData = {
        title: position,
        text: description,
        salary: salary,
        location: location,
        url: "https://lajekarlogistics.com",
      };
      await navigator.share(shareData);
    } catch (error) {
      console.log(error, "error occur during share");
    }
  }
  return (
    <div className="w-full relative h-auto flex flex-col  gap-1  border border-hover-section p-5">
      <Link
        href={`/careers/${slug}`}
        className="flex lg:flex-row flex-col  items-start lg:items-center justify-between gap-2 py-2 lg:py-4  border-b border-hover-section "
      >
        <h2 className="text-page font-medium text-2xl text-primary">
          {position}
        </h2>
        <p className=" text-base font-medium text-text-secondary ">
          Posted On: 
          {`${new Date(`${createdAt}`).toISOString().substring(0, 10)}`}
        </p>
      </Link>
      <Link
       href={`/careers/${slug}`}
        className="flex lg:flex-row flex-col  items-start lg:items-center justify-start  gap-2 lg:gap-10 py-4  border-b border-hover-section "
      >
        <h2 className="text-page font-semibold text-base text-text-secondary">
          Operations Supervisor :
        </h2>
        <p className=" text-base font-medium text-text-secondary ">
          Posted On: {`${new Date(`${createdAt}`).toISOString().substring(0, 10)}`}
        </p>
      </Link>
      <Link
       href={`/careers/${slug}`}
        className="flex lg:flex-row flex-col items-start lg:items-center justify-start  gap-2 py-4  border-b border-hover-section "
      >
        <h2 className="text-page font-semibold text-base text-text-secondary text-nowrap">
          Job Description:
        </h2>
        <p className=" text-base font-medium text-text-secondary ">
          {description}
        </p>
      </Link>
      <Link
       href={`/careers/${slug}`}
        className="w-full relative h-auto flex flex-col gap-5 py-2 border-b border-hover-section"
      >
        <h2 className="text-lg font-mediumt text-text-primary">
          Required Skills:
        </h2>

        <ul className="w-full relative h-auto  grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5 pb-2 px-6 ">
          <li className="text-base font-medium text-text-secondary list-disc">
            Fleet Management
          </li>
        </ul>
      </Link>
      <div className="w-full relative h-auto flex items-center justify-end py-5 gap-5">
        <button
          className="text-base font-medium cursor-pointer  px-10 lg:px-5 py-2 lg:py-3 text-text-secondary bg-hover-section "
          onClick={() => SharePost()}
        >
          Share
        </button>
        <ApplyJob position={position}>
          <span className="text-base font-medium px-10 lg:px-5 py-2 lg:py-3 cursor-pointer bg-primary text-white ">
            Apply
          </span>
        </ApplyJob>
      </div>
    </div>
  );
}

export default CareersCard;
