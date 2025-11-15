import React from 'react'
import Button from './Button'
import Image from 'next/image'
function OurNetwork() {
  return (
    <section className='w-full relative h-auto  bg-gradient-to-l py-10 lg:py-10 from-10% from-[#DADADA]'>
        <div className='w-full relative h-auto logistics-container items-center justify-center  grid gap-5 md:grid-cols-2 lg:grid-cols-3'>

            <div className='flex flex-col gap-2 lg:gap-3  '>
                <h2 className=' text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-text-secondary '>Our Network</h2>
                <p className=' text-base xl:text-xl font-meidum text-text-secondary'>Logistics Network Across India</p>

                <p className=' line-clamp-3 text-base lg:text-lg xl:text-xl font-meidum text-text-secondary mt-1 lg:mt-3'>
                With a strong presence in major cities and industrial corridors, Lanjekar Logistics ensures your cargo reaches any corner of India, reliably and efficiently.
                </p>

                <h2 className=' text-base lg:text-lg xl:text-2xl mt-1 lg:mt-2 font-semibold text-text-secondary italic'>From Mumbai to Manipur, we’re the people behind shipments.</h2>

                <Button css={'px-3 lg:px-5 py-2 lg:py-3 mt-1 lg:mt-2 w-fit text-base font-medium text-primary cursor-pointer hover:bg-primary bg-transparent border border-primary hover:text-white '} text={'Get a Quote'} isIcons={true} />
            </div>

            <Image src={"/india-map.svg"} alt='india map' height={1000} width={1000} className='h-full w-full relative grid object-contain lg:object-cover lg:col-start-2 lg:col-end-4 lg:p-5 '/>
            
        </div>
    </section>
  )
}

export default OurNetwork