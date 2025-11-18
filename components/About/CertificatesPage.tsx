"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const shippinggroups = [
  {
    image: "/certificate-1.png",
    title: "WTP Plants",
    description:
      "We design and implement advanced Water Treatment Plants (WTP) that ensure clean, safe, and compliant water for industrial and municipal needs.",
    number: "01",
  },
  {
    image: "/certificate-1.png",
    title: "Water Treatment Plants",
    description:
      "Our water treatment solutions provide efficient purification, filtration, and recycling systems for industries, residential complexes, and commercial setups.",
    number: "02",
  },
  {
    image: "/certificate-1.png",
    title: "Sugar - Paper Industries",
    description:
      "We supply specialized machinery and integrated process solutions tailored for sugar mills and paper manufacturing industries.",
    number: "03",
  },
  {
     image: "/certificate-1.png",
    title: "STP Plant",
    description:
      "Our Sewage Treatment Plants (STP) offer effective wastewater purification using modern biological and chemical treatment technologies.",
    number: "04",
  },
  {
   image: "/certificate-1.png",
    title: "Power Plants",
    description:
      "We provide engineering support, equipment supply, and complete solutions for thermal, hydro, and renewable energy power plants.",
    number: "05",
  },
  {
    image: "/certificate-1.png",
    title: "Paper Industries",
    description:
      "From raw material handling to process automation, we offer end-to-end solutions for efficient and high-quality paper manufacturing.",
    number: "06",
  },
  {
     image: "/certificate-1.png",
    title: "Chemical Plant",
    description:
      "Our chemical plant solutions ensure safe, compliant, and optimized processing for various chemical production applications.",
    number: "07",
  },
  {
    image: "/certificate-1.png",
    title: "Pharmaceutical Plant",
    description:
      "We deliver GMP-compliant pharmaceutical plant setups with precision equipment, cleanroom systems, and end-to-end production support.",
    number: "08",
  },
];


// Function to chunk array into groups of 4

function CertificatesPage() {

  
 return (
    // 1. MODIFIED: Use w-full and responsive padding/max-width instead of w-[900px]
    <section className="w-full relative h-auto flex justify-center py-10"> 
      
      {/* Container to center and apply max-width on large screens */}
      <div className="w-full mx-auto flex justify-center max-w-screen-xl px-4 sm:px-6 lg:px-8"> 
        
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30} // Increased spaceBetween for visual separation, especially on mobile
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
            // Good for mobile, showing 1.5 items for a "peek" effect
            320: {
              slidesPerView: 1.2, 
            },
            // Tablet: Show 2 items
            640: {
              slidesPerView: 2,
            },
            // Small Desktop/Large Tablet: Show 3 items
            768: {
              slidesPerView: 3,
            },
            // Large Desktop/XL: Keep 3 items
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {[...shippinggroups, ...shippinggroups].map((group, slideIndex) => (
            <SwiperSlide key={slideIndex}>
              {/* Added padding/margin to the slide content for visual separation */}
              <div className="relative h-full flex flex-col p-2"> 
                
                {/* 2. MODIFIED: Use w-full and relative heights for responsiveness. 
                   Removed the rigid xl:w-[400px]. The height is now set using 
                   responsive height classes to control the certificate size.
                */}
                <div className="relative w-full h-[250px] sm:h-[350px] lg:h-[450px] mx-0">
                  <img
                    src={group.image}
                    // The alt tag is commented out, but should be added for accessibility
                    // alt={group.title} 
                    // Use object-contain to ensure the certificate image fits entirely
                    className="w-full h-full object-contain" 
                  />
                </div>
                
                {/* Optional Content Block (currently commented out in your code) 
                  You can uncomment this if you decide to use the text content.
                */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Styles for pagination and navigation buttons remain the same */
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

export default CertificatesPage;
