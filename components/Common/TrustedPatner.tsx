'use client'
import React, {  useEffect, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { ClientsProps } from "@/types/Interface";

const clientData = [
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },
  {
   logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },

  {
   logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },
  {
    logo: "/logo.png",
    alt: "",
    companyName: "oss"
  },
];

function TrustedPatner() {
  const [clients,setClients]=useState<ClientsProps[]>([])
   async function fetchclient() {
    try{
      const response =await axios.get(`${NEXT_PUBLIC_API_URL}/clients`)
      console.log(response.data.Clients)
      setClients(response.data.Clients)
    }
    catch(error){
      console.log(error,'error')
    }
   }
   
   useEffect(()=>{
    fetchclient()
   },[])

  return (
    <>
      <section className="w-full relative h-auto hidden md:grid grid-cols-6 items-center justify-center logistics-container">
        
        {clientData.map((client, index) => (
          <span className=" border h-full py-5 md:py-10 px-5 md:px-10 flex items-center justify-center border-gray-200 " key={index}>
            {/* <Image
              src={`${NEXT_PUBLIC_API_URL}${client.logo}`}
              alt={client.companyName}
              height={500}
              width={500}
              className=" max-w-full  object-contain max-h-[100px] grayscale  "
            /> */}
              <Image
              src={client.logo}
              alt={client.companyName}
              height={500}
              width={500}
              className=" max-w-full  object-contain max-h-[100px] grayscale  "
            />
          </span>
        ))}
      </section>


      <section className="w-full relative h-auto md:hidden block items-center justify-center logistics-container">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints= {{
            300: {
                slidesPerView: 3,
            },
        }}
          modules={[Pagination]}
          className="mySwiper w-full  relative h-auto  logistics-container "
        >
          {clients.map((client, index) => (
            <SwiperSlide key={index}>
              <span className=" border h-[100px]   py-5 md:py-10 px-5 md:px-10 flex items-center justify-center border-gray-200 " >
                <Image
                src={`${NEXT_PUBLIC_API_URL}${client.logo}`}
                  alt={client.companyName}
                  height={500}
                  width={500}
                  className=" max-w-full  object-contain max-h-[60px] grayscale  "
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
