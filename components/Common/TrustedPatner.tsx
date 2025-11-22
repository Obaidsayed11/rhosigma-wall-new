"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { ClientsProps } from "@/types/Interface";

const clientData = [
  {
    logo: "/client-image.png",
    alt: "",
    companyName: "oss",
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss",
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss",
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss",
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss",
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss",
  },
];

function TrustedPatner() {
  const [clients, setClients] = useState<ClientsProps[]>([]);

  async function fetchclient() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/clients`);
      console.log(response.data.Clients);
      setClients(response.data.Clients);
    } catch (error) {
      console.log(error, "error");
    }
  }

  useEffect(() => {
    fetchclient();
  }, []);

  // Use fetched clients if available, otherwise use default clientData
  const displayClients = clients.length > 0 ? clients : clientData;

  return (
    <>
      {/* Desktop Version - Marquee Effect */}
      <section className="w-full relative h-auto hidden md:block logistics-container overflow-hidden">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={0}
          slidesPerView="auto"
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          allowTouchMove={true}
          freeMode={{
            enabled: true,
            momentum: true,
            momentumRatio: 0.5,
            momentumVelocityRatio: 0.5,
          }}
          breakpoints={{
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {[...displayClients, ...displayClients].map((client, index) => (
            <SwiperSlide key={index}>
              <span className="border h-full py-5 md:py-10 px-5 md:px-10 flex items-center justify-center border-gray-200">
                <Image
                  src={
                    clients.length > 0
                      ? `${NEXT_PUBLIC_API_URL}${client.logo}`
                      : client.logo
                  }
                  alt={client.companyName}
                  height={500}
                  width={500}
                  className="max-w-full object-contain max-h-[100px]  transition-all duration-300"
                />
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Mobile Version - Marquee Effect */}
      <section className="w-full relative h-auto md:hidden block logistics-container overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          speed={2500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          allowTouchMove={false}
          breakpoints={{
            320: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 4,
            },
          }}
        >
          {[...displayClients, ...displayClients].map((client, index) => (
            <SwiperSlide key={index}>
              <span className="border h-[100px] py-5 px-5 flex items-center justify-center border-gray-200">
                <Image
                  src={
                    clients.length > 0
                      ? `${NEXT_PUBLIC_API_URL}${client.logo}`
                      : client.logo
                  }
                  alt={client.companyName}
                  height={500}
                  width={500}
                  className="max-w-full object-contain max-h-[60px] "
                />
              </span>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default TrustedPatner;
