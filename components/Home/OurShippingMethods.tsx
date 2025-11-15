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
    title: "Road Transport",
    description:
      "We specialize in hassle-free cargo movement across India's highways and urban routes. With a powerful fleet and smart logistics planning, we ensure timely deliveries from major cities to the most remote regions. Trust us to get your goods there safely and on schedule.",
    number: "01",
  },
  {
    image: "/card02.jpg",
    title: "Air Cargo",
    description:
      "Need speed? Our air freight solutions are built for urgent and high-value shipments. Through our network of metro and tier-2 airports, we guarantee express delivery backed by strong logistics coordination and aviation partnerships.",
    number: "02",
  },
  {
    image: "/card03.jpg",
    title: "Sea Freight",
    description:
      "For large-scale international or coastal shipping, our sea freight services offer seamless handling, documentation, and coordination. We connect you to major Indian ports and global routes with efficiency and reliability.",
    number: "03",
  },
  {
    image: "/card04.jpg",
    title: "Rail Cargo",
    description:
      "Our rail logistics move your bulk cargo across India's extensive rail network fast and affordably. We integrate with road support for a smooth, end-to-end delivery experience that's both cost-effective and environmentally conscious",
    number: "04",
  },
  {
    image: "/card04.jpg",
    title: "Express Delivery",
    description:
      "Fast and reliable express delivery services for time-sensitive shipments. Our dedicated team ensures your packages reach their destination with speed and care.",
    number: "05",
  },
  {
    image: "/air.webp",
    title: "Warehousing",
    description:
      "Secure storage solutions with state-of-the-art facilities. We provide flexible warehousing options tailored to your inventory needs.",
    number: "06",
  },
  {
    image: "/sea.webp",
    title: "Cold Chain",
    description:
      "Temperature-controlled logistics for perishable goods. Maintain product integrity from pickup to delivery with our advanced cold chain systems.",
    number: "07",
  },
  {
    image: "/rail.webp",
    title: "Last Mile",
    description:
      "Efficient last-mile delivery connecting warehouses to your customers' doorsteps. We ensure safe and timely final-leg transportation.",
    number: "08",
  },
];

// Function to chunk array into groups of 4

function OurProducts() {
  return (
    <section className="w-full relative h-auto">
      <div className="w-full mx-auto bg-amber-500">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={4}
          watchSlidesProgress={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
        >
          {shippinggroups.map((group, slideIndex) => (
            <SwiperSlide key={slideIndex} >
              <div className=" relative border-r border-gray-200 border-b border-t h-full flex flex-col">
                <div className="relative w-full h-[180px] sm:h-[300px] lg:h-[350px]">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full hover:bg-gray-50 transition-colors ease-in-out relative h-auto flex flex-col gap-3 md:gap-4 py-4 lg:py-5 px-5 flex-grow">
                  <span className="w-full relative h-auto flex items-center justify-between gap-1">
                    <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
                      {group.title}
                    </h2>
                    <p className="text-sm md:text-2xl font-semibold text-text-primary">
                      {group.number}
                    </p>
                  </span>
                  <p className="text-sm md:text-base font-medium text-gray-600 line-clamp-4">
                    {group.description}
                  </p>
                  <button className="bg-transparent w-fit px-2 py-1 md:px-5 md:py-3 border border-primary text-blue-600 hover:bg-blue-600 hover:text-white transition-colors rounded text-sm md:text-base font-medium flex items-center gap-2">
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

export default OurProducts;
