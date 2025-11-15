import React from 'react'
import Button from '@/components/Common/Button'
import Link from 'next/link'
function page() {
  return (
    <section className='w-full h-[50vh] flex items-center justify-center flex-col gap-5 logistics-container relative  font-medium text-primary '>
        <h1 className='text-5xl sm:text-7xl font-medium text-primary '>Thank You</h1>
<Link href="/">
        <Button css='text-base font-meidum text-primary bg-white border border-primary w-[50vw]  hover:bg-primary hover:text-white' text='Home' isIcons={true}/>
</Link>
    </section>
  )
}

export default page