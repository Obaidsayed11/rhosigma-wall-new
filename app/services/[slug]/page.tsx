import React from 'react'
import ServicesPage from '@/components/Servicespage/ServicePage'

const  metacontent=[
  {
    title:"Logistics and Transportation Services in India | Lanjekar Logistics",
    discription:"Discover reliable logistics and transportation services across India with Lanjekar Logistics. We ensure safe, on-time delivery of cargo and freight nationwide.",
    slug:"logistics-transportation"
  },
  {
    title:"Warehousing & Cold Storage Solutions in India | Lanjekar Logistics",
    discription:"Lanjekar Logistics offers secure warehousing and cold storage services across India. Ideal for perishable goods, retail, and industrial inventory management.",
    slug:"warehousing-cold-storage"
  },
  {
    title:"End-to-End Supply Chain Solutions in India | Lanjekar Logistics",
    discription:"Streamline your operations with Lanjekar Logistics’ supply chain solutions. We offer integrated logistics, warehousing, and distribution services across India.",
    slug:"supply-chain-solutions"
  },
   {
    title:" Last-Mile Delivery Services in India | Lanjekar Logistics",
    discription:"Lanjekar Logistics provides fast and reliable last-mile delivery services across India. Ensure on-time, secure deliveries to your customers' doorstep.",
    slug:"last-mile-delivery"
  },
    {
    title:"Advanced Technology Integration for Logistics | Lanjekar Logistics",
    discription:"Lanjekar Logistics leverages cutting-edge technology integration to enhance logistics efficiency. Our solutions include real-time tracking, automation, and data-driven insights.",
    slug:"technology-integration"
  },
  
]



export async function generateMetadata({
  params,
}: {
  params: any;
}) {

  const { slug } = await params;

  const currentpagemeta=await metacontent.find((item,index)=>{
    console.log(item.slug==slug,slug,item.slug)
    return item.slug==slug;
  })


  console.log(currentpagemeta ,"this is Data ")
  


  return { 
    title: `${currentpagemeta?.title}`||"",
    description:`${currentpagemeta?.discription}`||"",
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    openGraph: {
      title: `${currentpagemeta?.title}`||"",
      description:
        `${currentpagemeta?.discription}`||"",
      url: `/services/${slug}`,
      images: [
        {
          url: `https://lanjekarlogistics.com/opengraph-image.png`,
          width: 4800,
          height: 2520,
        },
      ],
      locale: "en_us",
      siteName: "Lanjekar Logistics",
    },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}


function page() {
  return (
    <ServicesPage/>
  )
}

export default page