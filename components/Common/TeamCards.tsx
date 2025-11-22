import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

export default function TeamCards() {
  const [expanded, setExpanded] = useState({});

  const teamMembers = [
    {
      id: 1,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - TECHNICAL",
      bio: "He is 45 years of age with graduation in B.Com with main subject of account. He started his own proprietorship firm in 2010 and after decade of experience in business with valve automation, started a manufacturing unit of valve automation in 2017."
    },
    {
      id: 2,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - ADMINISTRATION",
      bio: "He is 39 years of age with graduation in BBA and after his graduation started a business in the field of fabrication in PVC and aluminium doors, partition and windows and after decade of experience in business. He is having decade of years experience to manage operations."
    },
    {
      id: 3,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - OPERATIONS",
      bio: "He is 42 years of age with MBA in Operations Management. He brings extensive experience in streamlining business processes and has successfully led multiple projects in manufacturing excellence. His expertise in supply chain management has been instrumental in company growth."
    },
    {
      id: 4,
      name: "MR. Saeed Lanjekar",
      role: "DIRECTOR - OPERATIONS",
      bio: "He is 42 years of age with MBA in Operations Management. He brings extensive experience in streamlining business processes and has successfully led multiple projects in manufacturing excellence. His expertise in supply chain management has been instrumental in company growth."
    },
  ];

  const toggleExpand = (id) => {
    setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-[60%] bg-gray-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
       
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={2500}
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
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="team-swiper"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col w-[80%] mx-auto mb-2">
                {/* Profile Image Circle */}
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-lg">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ')[1]?.[0] || member.name[0]}
                    </span>
                  </div>
                </div>

                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs md:text-sm text-primary font-semibold uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Bio */}
                <div className="text-sm text-gray-700 leading-relaxed flex-grow">
                  <p className={expanded[member.id] ? '' : 'line-clamp-3 sm:line-clamp-4'}>
                    {member.bio}
                  </p>
                  <button
                    onClick={() => toggleExpand(member.id)}
                    className="text-primary hover:text-primary/80 text-sm mt-3 font-medium transition-colors inline-block"
                  >
                    {expanded[member.id] ? '← Show less' : 'See more →'}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}