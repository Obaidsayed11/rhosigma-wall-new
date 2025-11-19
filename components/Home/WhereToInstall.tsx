"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const shippinggroups = [
  {
    image: "/card01.jpg",
    title: "WTP Plants",
    description:
      "We design and implement advanced Water Treatment Plants (WTP) that ensure clean, safe, and compliant water for industrial and municipal needs.",
    number: "01",
  },
  {
    image: "/card02.jpg",
    title: "Water Treatment Plants",
    description:
      "Our water treatment solutions provide efficient purification, filtration, and recycling systems for industries, residential complexes, and commercial setups.",
    number: "02",
  },
  {
    image: "/card03.jpg",
    title: "Sugar - Paper Industries",
    description:
      "We supply specialized machinery and integrated process solutions tailored for sugar mills and paper manufacturing industries.",
    number: "03",
  },
  {
    image: "/card04.jpg",
    title: "STP Plant",
    description:
      "Our Sewage Treatment Plants (STP) offer effective wastewater purification using modern biological and chemical treatment technologies.",
    number: "04",
  },
  {
    image: "/card05.jpg",
    title: "Power Plants",
    description:
      "We provide engineering support, equipment supply, and complete solutions for thermal, hydro, and renewable energy power plants.",
    number: "05",
  },
  {
    image: "/card06.jpg",
    title: "Paper Industries",
    description:
      "From raw material handling to process automation, we offer end-to-end solutions for efficient and high-quality paper manufacturing.",
    number: "06",
  },
  {
    image: "/card07.jpg",
    title: "Chemical Plant",
    description:
      "Our chemical plant solutions ensure safe, compliant, and optimized processing for various chemical production applications.",
    number: "07",
  },
  {
    image: "/card08.jpg",
    title: "Pharmaceutical Plant",
    description:
      "We deliver GMP-compliant pharmaceutical plant setups with precision equipment, cleanroom systems, and end-to-end production support.",
    number: "08",
  },
];


// Function to chunk array into groups of 4

function WhereToInstall() {

  
  return (
    <section className="w-full relative h-auto">
      <div className="w-full mx-auto ">
        <Swiper
        modules={[Autoplay]}
        
        spaceBetween={0}
        slidesPerView="auto"
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        allowTouchMove={false}
        freeMode={true}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {[...shippinggroups, ...shippinggroups].map((group, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="relative border-r border-gray-200 border-b border-t h-full flex flex-col">
              <div className="relative w-full h-[180px] sm:h-[300px] lg:h-[350px]">
                <img
                  src={group.image}
                  alt={group.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full hover:bg-gray-50 transition-colors ease-in-out relative h-auto flex flex-col gap-3 md:gap-4 py-4 lg:py-5 px-5 flex-grow">
                <span className="w-full relative h-auto flex items-center justify-between gap-1">
                  <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
                    {group.title}
                  </h2>
                  <p className="text-sm md:text-2xl font-semibold text-primary">
                    {group.number}
                  </p>
                </span>
                <p className="text-sm md:text-base font-medium text-gray-600 line-clamp-4">
                  {group.description}
                </p>
                <button className="bg-transparent w-fit px-2 py-1 md:px-5 md:py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors rounded text-sm md:text-base font-medium flex items-center gap-2">
                  Get a Quote
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #2563eb;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
        }

        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

export default WhereToInstall;
