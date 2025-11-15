'use client'
import React  from 'react'


import CertificationCard from '../Cards/CertificationCard'

import { NEXT_PUBLIC_API_URL } from '@/config'
import { CertificateDataProps} from '@/types/Interface'
function CertificationSection({data}:CertificateDataProps) {

  return (
    <section className='w-full relative h-auto grid grid-cols-2 lg:grid-cols-4 logistics-container'>
      
        {
          data.map((item,index)=>(
            <CertificationCard certificationimage={`${NEXT_PUBLIC_API_URL}${item.logo}`} iconimage={'/color-logo.png'} title={item.name} registerdyear={item.registerYear} key={index}/>

          ))
        }
            {/* <CertificationCard certificationimage={'/certificate-1.png'} iconimage={'/color-logo.png'} title={'Certificate Name'} registerdyear={'2014'}/>
            <CertificationCard certificationimage={'/certificate-1.png'} iconimage={'/color-logo.png'} title={'Certificate Name'} registerdyear={'2014'}/>
            <CertificationCard certificationimage={'/certificate-1.png'} iconimage={'/color-logo.png'} title={'Certificate Name'} registerdyear={'2014'}/>
            <CertificationCard certificationimage={'/certificate-1.png'} iconimage={'/color-logo.png'} title={'Certificate Name'} registerdyear={'2014'}/> */}
    </section>  
  )
}

export default CertificationSection