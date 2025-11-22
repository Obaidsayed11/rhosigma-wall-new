import React from "react";
import Image from "next/image";

function HomeAbout() {
  const images = [
    { src: "/product-1.jpg", alt: "Rhosigma Actuators" },
    { src: "/product-2.jpg", alt: "Electric Actuator" },
    { src: "/product-3.jpg", alt: "Valve Solutions" },
    { src: "/product-4.jpg", alt: "Automation Systems" },
  ];

  return (
    <section className="w-full relative logistics-container py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Content */}
        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
          </div>
          <p className="text-base lg:text-lg font-medium text-gray-700 leading-relaxed">
            Rhosigma is a fast growing company and we focused to provide complete valve automation solution under one roof in Rhosigma actuators as well as in electrical actuators with optional function as per client's requirement. We have decade of experience in valve automation and we understand the client's requirement and provide the solution with low budget and high performance quality of valves and automation with guarantee of each products.
          </p>
          <div className="flex gap-4 mt-4">
            <button className="px-6 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>
        </div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-gradient-to-br from-white to-gray-50  shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all w-[100%]"
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