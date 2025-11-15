"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

function OurSwiper() {
  const data = [
    "https://picsum.photos/400/200",
    "https://picsum.photos/200/300",
    "https://picsum.photos/300/400",
    "https://picsum.photos/400/300",
    "https://picsum.photos/400/500",
  ];

  // group items in chunks of 4
  const chunked = [];
  for (let i = 0; i < data.length; i += 4) {
    chunked.push(data.slice(i, i + 4));
  }

  return (
    <section className="w-full relative h-auto">
      <Swiper
        modules={[Autoplay, FreeMode]}
        freeMode={true}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={9000}
        className="mySwiper"
      >
        {chunked.map((group, slideIndex) => (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {group.map((img, i) => (
                <div key={i} className="w-full relative h-[200px] border">
                  <Image src={img} alt="image" fill className="object-cover" />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default OurSwiper;
