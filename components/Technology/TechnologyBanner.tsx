'use client'
import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
function TechnologyBanner() {
  function scrollToSecond() {
    window.scrollTo({
      top: 800,
      behavior: "smooth",
    });
  }
  return (
    <section className="w-full relative  hero h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] ">
      <div className="w-full relative h-full grid grid-cols-1 lg:grid-cols-2 gap-3 items-center justify-center logistics-container">
        <div className="w-full relative h-auto flex flex-col gap-4 md:gap-10">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white">
            Track Every Move. Deliver Every Promise.
          </h1>
          <p className="text-lg font-medium text-white ">
            Track Every Move. Deliver Every Promise.
          </p>

          <button className="text-base w-fit font-medium px-5 py-2 flex cursor-pointer bg-white hover:bg-primary border border-transparent hover:border-primary text-primary hover:text-white items-center gap-1">
            Explore
            <BsArrowDownShort className="text-[25px]  "  onClick={scrollToSecond}/>
          </button>
        </div>
      </div>
    </section>
  );
}

export default TechnologyBanner;
