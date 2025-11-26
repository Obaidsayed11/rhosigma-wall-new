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
   
  },
  {
    image: "/courousal-2.jpg",
  
  },
  {
    image: "/courousal-3.jpg",
   
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
<section className="w-full relative   overflow-hidden h-[60vh] sm:h-[70vh]">
      {/* Full Screen Swiper Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b 
      from-black/80 via-black/60 to-black/80">
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
          className="w-full h-full "
        >
          {shippinggroups.map((group, slideIndex) => (
           <SwiperSlide key={slideIndex}>
  <div className="relative w-full h-full">
    <img
      src={group.image}
     
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-gradient-to-b 
    from-black/80 via-black/60 to-black/80 pointer-events-none"></div>

    {/* Optional: keep the top fade if needed */}
    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}

    <div className="absolute bottom-6 left-6 right-6">
      {/* <h3 className="text-white text-2xl font-bold drop-shadow-lg">
        {group.title}
      </h3> */}
    </div>
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>

      {/* Text Content Overlay - Right Side */}
      <div className="relative z-10 h-full flex items-center justify-end px-4 md:px-8 lg:px-16 xl:mr-30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl lg:max-w-lg"
        >
          <div className="max-w-xl mb-6">
            <div >
              {/* <span className="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                Innovation Leader
              </span> */}
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl sm:leading-tight ">
              Unleash Innovation{" "}
              <br className="hidden md:block" />
              With{" "}
              <span className="inline-block  bg-clip-text text-gradient-accent p-1">
                Rhosigma
              </span>
            </h2>
            <p className="text-base text-white md:text-lg leading-relaxed">
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
    </section>
  );
}

export default Hero;