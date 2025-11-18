
// WhyChooseRhCard.tsx - Updated component with numbered icon instead of image

import React from "react";
import { WhyChooseRhCardProps } from "@/types/Interface";

function WhyChooseRhCard({
  number, // NEW: Add this prop instead of image
  title,
  description,
  css,
  descriptioncss,
  children,
  subtitle,
  subtitlecss,
}: WhyChooseRhCardProps) {
  return (
    <div
      className={`w-full relativeh-auto hover:bg-hover-section transition-colors ese flex py-3 lg:py-6 px-2 lg:px-5 border border-gray-200 gap-2 xl:gap-5 items-center justify-start ${css} `}
    >
      {/* REPLACED: Image with numbered icon */}
      <div className="h-[50px] w-[50px] flex-shrink-0 rounded-full bg-blue-50 flex items-center justify-center">
        <span className="text-xl font-bold text-primary">
          {number}
        </span>
      </div>

      <span className="w-full relative flex flex-col gap-1 xl:gap-2 text-text-secondary">
        <h2
          className={` text-lg md:text-2xl font-bold  text-text-secondary" `}
        >
          {title}
        </h2>

      {
       subtitle &&
        <p className={` text-base md:text-lg font-semibold ${subtitlecss}  `}>{subtitle}</p>
      }

        <p
          className={`text-text-secondary font-medium line-clamp-2  lg:line-clamp-3 text-sm xl:text-base ${
            descriptioncss ? descriptioncss : "text-text-secondary"
          }  `}
        >
          {description}
        </p>
      </span>
      {children}
    </div>
  );
}

export default WhyChooseRhCard;