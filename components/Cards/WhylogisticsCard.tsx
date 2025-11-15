import React from 'react'
import Image from 'next/image'
import { WhyLogisticsCardProps } from '@/types/Interface'
function WhylogisticsCard({
  image,
  title,
  subtitle,
  description,
}: WhyLogisticsCardProps) {
  return (
   <section
        className={`flex items-start flex-col border border-secondary  rounded-lg gap-2 px-10 py-10   w-full   `}
      >
        <span className="w-full relative flex items-start  gap-4 ">
          <Image
            src={image}
            alt="Logo"
            height={300}
            width={300}
            className="w-[100px] h-[70px] object-contain"
          />
  
          <span className="flex flex-col w-full realtive h-auto">
            <h2 className="text-base font-semibold text-webtext">{title}</h2>
            <p className={`font-semibold text-text-primary text-sm `}>
              {subtitle}
            </p>
          </span>
        </span>
        <p className="text-p18 font-normal text-webtext line-clamp-2">
          {description}
        </p>
      </section>
  )
}

export default WhylogisticsCard