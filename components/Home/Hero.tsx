"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const shippinggroups = [
  {
    image: "/courousal-1.jpg",
    title: "Road Transport",
  },
  {
    image: "/courousal-2.jpg",
    title: "Air Cargo",
  },
  {
    image: "/courousal-3.jpg",
    title: "Sea Freight",
  },
];

function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white xl:mt-10 xl:mb-20">
      <div className="relative flex flex-col-reverse px-4 py-12 mx-auto lg:block lg:flex-col lg:py-24 xl:py-32 md:px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl xl:gap-10">
        
        {/* Image/Swiper Section - Left Side on Desktop */}
        <div className="z-0 flex justify-around h-full -mx-4 overflow-hidden lg:pt-16 lg:pb-12 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[700px]  overflow-hidden shadow-2xl"
          >
            <Swiper
              modules={[Autoplay, EffectFade]}
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
              className="w-full h-full"
            >
              {shippinggroups.map((group, slideIndex) => (
                <SwiperSlide key={slideIndex}>
                  <div className="relative w-full h-full">
                    <img
                      src={group.image}
                      alt={group.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-bold drop-shadow-lg">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Content Section - Right Side on Desktop */}
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-10 lg:max-w-screen-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0"
          >
            <div className="max-w-xl mb-6">
              <div >
                {/* <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                  Innovation Leader
                </span> */}
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl sm:leading-tight ">
                Unleash Innovation{" "}
                <br className="hidden md:block" />
                With{" "}
                <span className="inline-block  bg-clip-text text-gradient-accent p-1">
                  Rhosigma
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg leading-relaxed">
                Experience cutting-edge valve automation solutions with our decade of expertise. 
                We provide complete pneumatic and electrical actuator systems tailored to your requirements.
              </p>
            </div>
            {/* <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center h-12 px-8 font-semibold tracking-wide text-white transition duration-200 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:shadow-outline focus:outline-none transform hover:scale-105"
                >
                  Get Started
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <a
                  href="/about"
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-600 hover:text-blue-800 group"
                >
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div> */}

            {/* Form */}
           
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;