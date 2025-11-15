import React from 'react'
import { newletterprops } from '@/types/Interface'

function Newletter({title,description}:newletterprops) {
  return (
    <section className='w-full logistics-container  mb-10  relative h-auto grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] items-center justify-center  gap-3 bg-primary py-5 px-2 lg:py-7 '>
        <h2 className=' text-3xl lg:text-4xl font-medium text-white px-2 lg:px-10' >{title}</h2>
        <div className='w-full relative h-auto flex flex-col gap-2 px-2 lg:px-10'>

            <span className='w-full relative h-auto flex gap-5 '>
                <input type="text" className='w-full relative border bg-white border-white placeholder:text-primary h-auto px-4 py-3 text-base font-medium' placeholder='Enter Your Email' />
                <button className='w-fit relative px-10 text-nowrap py-2 text-base font-medium bg-white text-primary cursor-pointer '>Sign Up</button>
            </span>


            <p className=' text-sm  lg:text-sm font-medium text-white'>{description}</p>
        </div> 
    </section>
  )
}

export default Newletter