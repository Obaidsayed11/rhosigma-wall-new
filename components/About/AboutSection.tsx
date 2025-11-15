import React from "react";
import Image from "next/image";
import Button from "../Common/Button";
function AboutSection() {
  return (
    <section className="w-full relative h-auto flex flex-col  logistics-container items-center justify-center gap-6">
      <Image
        src={"/about-image.jpg"}
        className="w-full relative max-h-[600px] object-top object-cover"
        height={1400}
        width={1300}
        alt="about image"
      />

      <p className="font-medium text-text-secondary text-sm md:text-base lg:text-lg text-center line-clamp-4 md:line-clamp-5">
        We’re more than a logistics company—we’re a trusted partner in your
        journey to scale, thrive, and lead. From first-mile pickups to last-mile
        deliveries, we tailor every solution to meet your business goals with
        unmatched precision. Our operations are built around speed,
        transparency, and efficiency—ensuring your goods get where they need to
        be, exactly when they’re needed. We don’t just move packages; we move
        possibilities.
      </p>
      <p className="font-medium text-text-secondary text-sm md:text-base lg:text-lg text-center lg:flex hidden ">
        At the heart of our service is a deep understanding that logistics is
        about people as much as products. That’s why we bring care and
        reliability to every delivery, treating your cargo like it’s our own.
        Whether it’s a critical medical shipment, fresh produce, or high-volume
        e-commerce orders, we empower your business with a logistics experience
        that’s smart, scalable, and truly dependable.
      </p>
      <Button
        css="bg-transparent w-fit px-3 md:px-5 py-2 md:py-3 border border-primary text-primary hover:bg-primary hover:text-white  "
        text="Get a Quote"
        isIcons={true}
      />
    </section>
  );
}

export default AboutSection;
