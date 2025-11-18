"use client";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const shippinggroups = [
  {
    image:
      "/courousal-1.jpg",
    title: "Road Transport",
  },
  {
    image:
     "/courousal-2.jpg",
    title: "Air Cargo",
  },
  {
    image:
     "/courousal-3.jpg",
    title: "Sea Freight",
  },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=1920&h=1080&fit=crop",
  //   title: "Rail Cargo",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1920&h=1080&fit=crop",
  //   title: "Express Delivery",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&h=1080&fit=crop",
  //   title: "Warehousing",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&h=1080&fit=crop",
  //   title: "Cold Chain",
  // },
  // {
  //   image:
  //     "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop",
  //   title: "Last Mile",
  // },
];

function Hero() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-white">
        {/* Full Width Swiper Section */}
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          animate={{ opacity: 1 }}
          className="w-full relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            loop={true}
            // pagination={{
            //   clickable: true,
            //   dynamicBullets: false,
            // }}
            className="w-full h-[600px] md:h-[700px] lg:h-[800px]"
          >
            {shippinggroups.map((group, slideIndex) => (
              <SwiperSlide key={slideIndex}>
                <div className="relative w-full h-full">
                  {/* Background Image */}
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  {/* Text overlay - centered */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
                      <motion.h1
                        className="text-4xl text-white small:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-medium leading-[1.1]"
                        initial={{ transform: "translateY(-50px)", opacity: 0 }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        transition={{
                          duration: 0.8,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      >
                        Unleash Innovation With{" "}
                        <span className="text-tertiary">Rhosigma</span>
                      </motion.h1>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 30px !important;
        }

        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #2563eb;
          width: 40px;
          border-radius: 6px;
        }
      `}</style>
    </>
  );
}

export default Hero;
