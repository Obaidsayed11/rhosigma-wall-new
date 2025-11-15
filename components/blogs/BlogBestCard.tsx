import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogBestProps } from '@/types/Interface'
function BlogBestCard({title,subtitle,image, description ,slug}:BlogBestProps) {
  return (
    <Link href={`/blogs/${slug}`} className=' flex flex-col   md:grid md:grid-cols-[auto_1fr] gap-2 p-3 lg:p-5 items-center border border-hover-section justify-center '>
            <Image src={image} alt={title} height={500} width={500} className=' w-full md:w-[100px] h-[130px] md:h-[110px] object-cover '/>
            <span className='w-full relative h-auto flex flex-col gap-1'>
                <p className=' text-xs sm:text-sm lg:text-base text-text-secondary font-medium'>{subtitle}</p>
                <h2 className=' text-base lg:text-lg font-medium text-text-primary line-clamp-2 md:line-clamp-3'>{title}</h2>
                <p className='text-base  line-clamp-2 font-medium text-text-secondary '>
                    {description}
                </p>
            </span>
    </Link>
  )
}

export default BlogBestCard