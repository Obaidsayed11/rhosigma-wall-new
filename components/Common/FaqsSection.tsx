"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Button from "./Button";
import { FaqdataProp } from "@/types/Interface";

function FaqsSection({ data }: FaqdataProp) {
  return (
    <section className="w-full relative h-auto flex logistics-container  flex-col gap-2">
      <div className="w-full relative min-h-[250px] grid  grid-cols-1 lg:grid-cols-3 gap-2">
        <div className="w-full h-auto flex flex-col border  border-hover-section lg:col-start-1 lg:col-end-3">
          <Accordion type="single" collapsible>
            {data.map((item, index) => (
              <AccordionItem
                value={`item-${index}`}
                className="w-full relative h-auto border-hover-section   cursor-pointer hover:bg-hover-section px-4 py-1  "
                key={index}
              >
                <AccordionTrigger className=" text-base md:text-lg font-medium  text-text-secondary ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className=" text-sm md:text-base font-medium text-text-secondary ">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <Image
          src={"/Faqs-image.jpg"}
          alt="Faq image"
          height={500}
          width={500}
          className="w-full relative h-auto "
        />
      </div>
      <div className="w-full relative flex flex-col  sm:flex-row items-start sm:items-center justify-between gap-2 py-10 ">
        <span className="w-fit relative h-auto flex flex-col gap-1 md:gap-2">
          <h2 className=" text-lg md:text-2xl lg:text-3xl font-semibold text-text-secondary italic">
            Have a question or need a quote? Reach out to us
          </h2>
          <p className=" text-sm md:text-lg font-medium text-text-secondary">
            we’re ready to move your business forward
          </p>
        </span>
        <Button
          css="w-fit relative h-auto mt-2 bg-transparent border border-primary text-primary px-2 md:px-5 py-2 md:py-3 hover:bg-primary hover:text-white text-sm "
          text="Get a Quote"
          isIcons
        />
      </div>
    </section>
  );
}

export default FaqsSection;
