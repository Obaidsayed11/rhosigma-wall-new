'use client'
import React from 'react'
import Image from 'next/image'
import { BsChevronCompactDown } from "react-icons/bs";
function ServicesBanner() {


  function scrollToSecond(){
      window.scrollTo({
      top: 900,
      behavior: "smooth",
    });
  }

  return (
    <section className='w-full relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[90vh] '>
        <Image src={'/service-banner-image.png'} alt='Service banner Image' height={1500} width={1500} className='w-full relative h-full object-cover'/>
        <BsChevronCompactDown className=' text-[40px] md:text-[60px]  animate-bounce cursor-pointer lg:text-[80px] xl:text-[100px]  text-white absolute bottom-10  left-[47%] right-[50%]' onClick={scrollToSecond}/>
    </section>
  )
}

export default ServicesBanner