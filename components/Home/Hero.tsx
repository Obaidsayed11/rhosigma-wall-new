"use client";
import React from "react";
import Image from "next/image";
import Button from "../Common/Button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

function Hero() {
  const images = [
    "/quarter-turn-actuator-2.png",
    "/quarter-turn-actuator-3.png",
    "/quarter-turn-actuator-2.png",
    "/quarter-turn-actuator-3.png",
  ];

  return (
    <>
      <section className="group overflow-hidden xl:h-[800px] bg-white ">
        <div className="w-full absolute top-0  h-[60%] "></div>
        <div className="w-full relative min-h-fit md:min-h-[80vh] lg:min-h-[100vh]  flex flex-col gap-2 py-10">
          <motion.h1
            className=" text-4xl text-text-primary   small:text-5xl  sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-meidum    text-center leading-[1]  "
            initial={{ transform: "translateY(-100%)", opacity: 0 }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
          >
            Unleash Innovation With Rhosigma
          </motion.h1>

          <motion.div
            initial={{ transform: "translateY(100%)", opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut", type: "tween" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            className="w-full relative h-auto flex items-start gap-1 justify-center -mt-1 sm:-mt-5 lg:-mt-10 xl:-mt-10"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: false }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              loop={true}
              loopAdditionalSlides={2}
              speed={800}
              pagination={false}
              allowTouchMove={false}
              watchSlidesProgress={true}
              className="w-[500px] h-[500px]"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={image}
                    alt="Container image"
                    height={1300}
                    width={1300}
                    className="w-[500px] object-cover relative h-[500px] floating"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          {/* <div className="w-full relative  h-auto flex  items-center justify-center flex-col gap-5 lg:gap-10 xl:gap-20 lg:-mt-40  xl:-mt-54 -mt-10 sm:-mt-20 md:-mt-28">
            <Button
              css={
                "bg-white text-primary  font-medium text-base lg:text-lg cursor-pointer w-fit py-2 px-3 lg:py-3 lg:px-5 hover:bg-primary hover:text-white "
              }
              text={"Get a Quote"}
              isIcons={true}
            />
            <p className=" line-clamp-3 lg:line-clamp-5 text-sm sm:text-base lg:text-lg xl:text-xl font-medium  text-text-secondary text-center">
              At Lanjekar Logistics, we specialize in delivering reliable,
              efficient, and secure transportation solutions across PAN India.
              With a strong commitment to excellence and customer satisfaction,
              we ensure that every shipment reaches its destination safely and
              on time.
              <br />
              What sets us apart is our team of highly trained drivers and logistics professionals who handle every consignment with precision and care. Whether it&apos;s industrial cargo, retail goods, or customized freight solutions, we bring years of experience and dedication to every mile we cover.
            </p>
          </div> */}
        </div>
      </section>

      <style jsx global>{`
        .floating {
          animation: floating 3s ease-in-out infinite;
        }

        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .swiper-pagination {
          display: none !important;
        }

        .swiper-slide {
          opacity: 0 !important;
        }

        .swiper-slide-active {
          opacity: 1 !important;
        }

        .swiper-slide-duplicate-active {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}

export default Hero;