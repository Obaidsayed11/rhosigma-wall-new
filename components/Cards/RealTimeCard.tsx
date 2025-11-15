import React from 'react'
import Image from 'next/image'

import { RealTimeCardprops } from '@/types/Interface'

function RealTimeCard({image,description}:RealTimeCardprops) {
  return (
        <div className='w-full relative h-auro  gap-3  flex flex-col border border-hover-section p-3 sm:p-5 '>
                <Image src={image} alt='Icon  ' height={50} width={50} className=' h-[35px] sm:h-[35px] w-[35px] sm:w-[35px]'  />
                <p className='text-base font-medium text-text-secondary '>{description}</p>
        </div>
  )
}

export default RealTimeCard