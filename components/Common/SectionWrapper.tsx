import { SectionWrapperprops } from "@/types/Interface";
import React from "react";

function SectionWrapper({ title, description, children ,css }: SectionWrapperprops) {
  return (
    <section className={`w-full relative h-auto flex flex-col gap-10 py-10 lg:py-20 ${css} `}>
      <div className="flex flex-col gap-2 lg:gap-4 items-center justify-center  logistics-container ">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl text-text-primary  text-center">
          {title}
        </h2>
        <p className="w-full relative h-auto text-base sm:text-base md:text-base  font-medium  text-text-secondary text-center ">
          {description}
        </p>
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
