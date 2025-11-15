'use client'
import React, { useEffect, useState } from 'react'
import CareersCard from './CareersCard'
import { CareersProps } from '@/types/Interface';
import { NEXT_PUBLIC_API_URL } from '@/config';
import axios from 'axios';

function CareerPageSection() {
 const [careers, setCareers] = useState<CareersProps[]>([]);

  async function fetchCareers() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
      console.log(response.data);
      setCareers(response.data.careers);
    } catch (error) {
      console.log(error, "careers section error");
    }
  }

  useEffect(()=>{
    fetchCareers()
  },[])
  return (
    <section className='w-full relative h-auto flex flex-col gap-3  logistics-container mb-10'>
      {
        careers.map((item,index)=>(
          <CareersCard salary={item.salary} slug={item.slug} location={item.location} key={index} position={item.position} description={item.description}  createdAt={item.createdAt} requiredSkill={item.requiredSkill} />
        ))
      }
     
    </section>
  )
}

export default CareerPageSection
