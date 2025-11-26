"use client"
import React, { useState } from "react";
import Image from "next/image";

function HomeAbout() {
  const images = [
    { src: "/who-1.jpg", alt: "Rhosigma Actuators" },
    { src: "/who-2.jpg", alt: "Electric Actuator" },
    { src: "/who-3.jpg", alt: "Valve Solutions" },
    { src: "/who-4.jpg", alt: "Automation Systems" },
  ];

   const data = [{
    id: 1,
    title: "Who We Are",
    content: "Rhosigma is a fast growing company and we focused to provide complete valve automation solution under one roof in pneumatic actuators as well as in electrical actuators with optional function as per client's requirement. We have decade of experience in valve automation and we understand the client's requirement and provide the solution with low budget and high performance quality of valves and automation with guarantee of each products."
  }];

    const [expanded, setExpanded] = useState({});
    
    const toggleExpand = (id) => {
      setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

  return (
    <section className="w-full relative logistics-container ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
       <div className="flex flex-col gap-4 lg:px-10 lg:py-10">
               {data && data.map((dat) => (
                 <React.Fragment key={dat.id}>
                   <h2 className="text-3xl lg:text-4xl font-semibold text-text-secondary">
                     {dat.title}
                   </h2>
                   <div className="text-base lg:text-lg font-medium text-text-secondary">
                     <p className={expanded[dat.id] ? '' : 'line-clamp-4 sm:line-clamp-5 md:line-clamp-6 lg:line-clamp-6'}>
                       {dat.content}
                     </p>
                     {/* <button
                       onClick={() => toggleExpand(dat.id)}
                       className="text-primary hover:text-primary/80 text-sm mt-2 font-medium transition-colors"
                     >
                       {expanded[dat.id] ? 'Show less' : 'See more...'}
                     </button> */}
                     <ul className="mt-4 space-y-3 text-text-secondary text-base lg:text-lg font-medium">
  <li className="flex items-start gap-2">
    <span className="text-primary mt-1">✔</span>
    <span>10+ years of expertise in valve automation systems</span>
  </li>

  <li className="flex items-start gap-2">
    <span className="text-primary mt-1">✔</span>
    <span>Complete in-house pneumatic & electric actuator solutions</span>
  </li>

  <li className="flex items-start gap-2">
    <span className="text-primary mt-1">✔</span>
    <span>Customized automation options based on client needs</span>
  </li>

  <li className="flex items-start gap-2">
    <span className="text-primary mt-1">✔</span>
    <span>High-performance, budget-friendly valves guaranteed</span>
  </li>
</ul>

                   </div>
                 </React.Fragment>
               ))}
             </div>
        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6 -mb-30 h-[100%]">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-gradient-to-br from-white to-gray-50  shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all w-[100%] h-[80%]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;