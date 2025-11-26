"use client";

import React from "react";
import Image from "next/image";
import useFancybox from "@/app/context/useFancybox";

const shippinggroups = [
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
  { image: "/certificate-1.png", title: "certificate" },
];

export default function CertificatesPage() {
  const [fancyboxRef] = useFancybox(); // attach fancybox to container

  return (
    <section className="w-full relative h-auto flex justify-center py-10">
      <div
        ref={fancyboxRef}   // ⭐ apply here, NOT on each <a>
        className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* 3×3 GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {shippinggroups.map((item, index) => (
            <a
              key={index}
              href={item.image}
              data-fancybox="certificates"
              data-caption={item.title}
              className="block w-full"
            >
              <div className="w-full h-[250px] sm:h-[300px] md:h-[320px] lg:h-[350px] bg-white border border-hover-section p-4 flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-contain cursor-pointer"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
