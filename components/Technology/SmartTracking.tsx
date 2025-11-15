import React from 'react'
import Button from '../Common/Button'
import Image from 'next/image'
function SmartTracking() {
  return (
    <section className='w-full logistics-container py-10 lg:py-20 relative items-center justify-center h-auto grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3'>
        <div className='w-full relative h-auto flex flex-col gap-3 lg:gap-5 '>
            <h2 className=' text-xl lg:text-2xl font-medium text-text-secondary '>
            At <strong className=' font-medium text-primary '> Lanjekar Logistics </strong>, we empower businesses with cutting-edge real-time tracking technologies that provide full visibility into every shipmen
            </h2>

            <p className='text-base font-medium text-text-secondary '>Through a seamless blend of GPS systems, IoT devices, and live cloud dashboards, we ensure your cargo is monitored and managed with precision—every second of the journey.</p>


            <div className='w-full relative h-auto flex items-center gap-1'>
                <Button css={'text-base font-medium text-primary bg-transparent hover:text-white hover:bg-primary border  px-3 lg:px-5 py-2 lg:py-3 border-primary  '} text={'Get a Quote'} isIcons={true} />
            </div>
        </div> 
        <Image src="/smarttraking.webp" alt={'smart Tracking Dashbord'}  height={400} width={400} className="w-full relative h-auto flex" />
    </section>
  )
}

export default SmartTracking