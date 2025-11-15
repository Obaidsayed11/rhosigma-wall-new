'use client'
import React from "react";
// import { BsArrowDownShort } from "react-icons/bs";
import Button from "../Common/Button";
import Link from "next/link";
import { IoIosCall } from "react-icons/io";

function ServiceL2banner() {
  // function scrollToSecond() {
  //   window.scrollTo({
  //     top: 800,
  //     behavior: "smooth",
  //   });
  // }

  return (
    <section className="w-full relative  hero h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] ">
      <div className="w-full relative h-full flex items-center  gap-3  justify-center logistics-container">
        <div className="w-full relative h-auto flex flex-col gap-2  lg:px-10 lg:gap-4  md:gap-10">
          <h1 className=" text-3xl sm:text-4xl text-center md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white">
            Track Every Move. Deliver Every Promise.
          </h1>
          <p className="text-lg font-medium text-center text-white ">
            Track Every Move. Deliver Every Promise.
          </p>

          {/* <button className="text-base w-fit font-medium px-5 py-2 flex cursor-pointer bg-white hover:bg-primary border border-transparent hover:border-primary text-primary hover:text-white items-center gap-1">
            Explore
            <BsArrowDownShort
              className="text-[25px]  "
              onClick={scrollToSecond}
            />
          </button> */}
          <div className="w-full relative  h-auto mt-2 flex-col sm:flex-row flex items-center justify-center gap-3">
              <Button text="Get a Quote" css="text-base w-fit text-center font-medium text-white bg-primary px-2 md:px-3 py-2 md:py-2 border border-white hover:bg-white hover:text-primary " isIcons={true}/>
              <Link href="tel:"  className="text-base w-fit  font-medium text-center text-primary bg-white px-3 py-2 border border-white hover:bg-white hover:text-primary flex items-center gap-1" >
              Talk To Expert
                <IoIosCall className="text-[22px]"/>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceL2banner;
