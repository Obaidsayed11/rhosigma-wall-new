// 'use client'
// import React, { useEffect, useState } from 'react'
// import CareersCard from './CareersCard'
// import { CareersProps } from '@/types/Interface';
// import { NEXT_PUBLIC_API_URL } from '@/config';
// import axios from 'axios';

// function CareerPageSection() {
// //  const [careers, setCareers] = useState<CareersProps[]>([]);

//   // async function fetchCareers() {
//   //   try {
//   //     const response = await axios.get(`${NEXT_PUBLIC_API_URL}/careers`);
//   //     console.log(response.data);
//   //     setCareers(response.data.careers);
//   //   } catch (error) {
//   //     console.log(error, "careers section error");
//   //   }
//   // }

//   // useEffect(()=>{
//   //   fetchCareers()
//   // },[])
//       const careersData: CareersProps[] = [
//   {
//     position: "React Native Developer",
//     type: "Full-Time",
//     location: "Mumbai, India",
//     shift: "Day Shift",
//     experience: "1-3 Years",
//     salary: "₹4,50,000 - ₹6,00,000 / year",
//     description: "Responsible for developing and maintaining cross-platform mobile applications.",
//     content:
//       "We are looking for a skilled React Native Developer to build high-quality mobile applications. You will collaborate with designers, backend developers, and product teams.",
//     slug: "react-native-developer",
//     metaTitle: "React Native Developer Job Opening | Careers",
//     metaDescription:
//       "Join our team as a React Native Developer. Develop high-quality cross-platform applications.",
//     business: "Tech Development",
//     requiredSkill:
//       "React Native, Redux, REST APIs, JavaScript, TypeScript, Git",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     position: "MERN Stack Developer",
//     type: "Full-Time",
//     location: "Bangalore, India",
//     shift: "Day Shift",
//     experience: "2-4 Years",
//     salary: "₹5,00,000 - ₹8,00,000 / year",
//     description: "Work on full-stack web applications using MongoDB, Express, React, and Node.js.",
//     content:
//       "As a MERN Developer, you will build scalable backend APIs and modern frontend systems. Strong understanding of database design and UI/UX principles is a plus.",
//     slug: "mern-stack-developer",
//     metaTitle: "MERN Stack Developer Job Opening | Careers",
//     metaDescription:
//       "We are hiring MERN Stack Developers with experience in building scalable web applications.",
//     business: "Web Development",
//     requiredSkill:
//       "MongoDB, Express.js, React.js, Node.js, REST APIs, JWT, Git",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     position: "UI/UX Designer",
//     type: "Full-Time",
//     location: "Remote",
//     shift: "Flexible",
//     experience: "1-2 Years",
//     salary: "₹3,00,000 - ₹5,00,000 / year",
//     description: "Design user-friendly mobile and web interfaces with modern design tools.",
//     content:
//       "We are looking for a creative designer with experience in Figma, Adobe XD, and prototyping. Must understand user flows and mobile-first design.",
//     slug: "ui-ux-designer",
//     metaTitle: "UI/UX Designer Job Opening | Careers",
//     metaDescription:
//       "Apply now for the UI/UX Designer position. We value creativity and design excellence.",
//     business: "Design Department",
//     requiredSkill:
//       "Figma, Adobe XD, Wireframing, Prototyping, UX Research",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     position: "Backend Developer (Node.js)",
//     type: "Full-Time",
//     location: "Hyderabad, India",
//     shift: "Day Shift",
//     experience: "2-5 Years",
//     salary: "₹6,00,000 - ₹9,00,000 / year",
//     description: "Develop robust and scalable backend services using Node.js and MongoDB.",
//     content:
//       "We are seeking a Node.js Developer with experience in API development, authentication, and working with large data systems.",
//     slug: "backend-developer-nodejs",
//     metaTitle: "Backend Developer Node.js Job Opening | Careers",
//     metaDescription:
//       "Join our backend engineering team as a Node.js Developer to build scalable APIs.",
//     business: "Backend Engineering",
//     requiredSkill:
//       "Node.js, Express.js, MongoDB, Redis, APIs, Git, Docker",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     position: "Digital Marketing Executive",
//     type: "Full-Time",
//     location: "Pune, India",
//     shift: "Morning Shift",
//     experience: "0-2 Years",
//     salary: "₹2,50,000 - ₹4,00,000 / year",
//     description: "Responsible for executing digital marketing strategies for brand growth.",
//     content:
//       "The candidate should have basic knowledge of SEO, Google Ads, Social Media Campaigns, and content planning.",
//     slug: "digital-marketing-executive",
//     metaTitle: "Digital Marketing Executive Job Opening | Careers",
//     metaDescription:
//       "Apply for the Digital Marketing Executive position. Freshers with good communication skills are welcome.",
//     business: "Marketing",
//     requiredSkill:
//       "SEO, SEM, Google Analytics, Social Media Marketing, Keyword Research",
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

//   const [careers, setCareers] = useState<CareersProps[]>(
// careersData
// );


// console.log(careers,"carrier")




  
//   return (
//     <section className='w-full relative h-auto flex flex-col gap-3  logistics-container mb-10'>
//       {
//         careers.map((item,index)=>(
//           <CareersCard salary={item.salary} slug={item.slug} location={item.location} key={index} position={item.position} description={item.description}  createdAt={item.createdAt} requiredSkill={item.requiredSkill} />
//         ))
//       }
     
//     </section>
//   )
// }

// export default CareerPageSection


'use client'
import React, { useState } from 'react'
import CareersCard from './CareersCard'
import { CareersProps } from '@/types/Interface';

function CareerPageSection() {

  // Static dataset for now
  const careersData: CareersProps[] = [
    {
      position: "React Native Developer",
      type: "Full-Time",
      location: "Mumbai, India",
      shift: "Day Shift",
      experience: "1-3 Years",
      salary: "₹4,50,000 - ₹6,00,000 / year",
      description: "Responsible for developing and maintaining cross-platform mobile applications.",
      content:
        "We are looking for a skilled React Native Developer to build high-quality mobile applications. You will collaborate with designers, backend developers, and product teams.",
      slug: "react-native-developer",
      metaTitle: "React Native Developer Job Opening | Careers",
      metaDescription:
        "Join our team as a React Native Developer. Develop high-quality cross-platform applications.",
      business: "Tech Development",
      requiredSkill:
        "React Native, Redux, REST APIs, JavaScript, TypeScript, Git",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      position: "MERN Stack Developer",
      type: "Full-Time",
      location: "Bangalore, India",
      shift: "Day Shift",
      experience: "2-4 Years",
      salary: "₹5,00,000 - ₹8,00,000 / year",
      description: "Work on full-stack web applications using MongoDB, Express, React, and Node.js.",
      content:
        "As a MERN Developer, you will build scalable backend APIs and modern frontend systems. Strong understanding of database design and UI/UX principles is a plus.",
      slug: "mern-stack-developer",
      metaTitle: "MERN Stack Developer Job Opening | Careers",
      metaDescription:
        "We are hiring MERN Stack Developers with experience in building scalable web applications.",
      business: "Web Development",
      requiredSkill:
        "MongoDB, Express.js, React.js, Node.js, REST APIs, JWT, Git",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      position: "UI/UX Designer",
      type: "Full-Time",
      location: "Remote",
      shift: "Flexible",
      experience: "1-2 Years",
      salary: "₹3,00,000 - ₹5,00,000 / year",
      description: "Design user-friendly mobile and web interfaces with modern design tools.",
      content:
        "We are looking for a creative designer with experience in Figma, Adobe XD, and prototyping. Must understand user flows and mobile-first design.",
      slug: "ui-ux-designer",
      metaTitle: "UI/UX Designer Job Opening | Careers",
      metaDescription:
        "Apply now for the UI/UX Designer position. We value creativity and design excellence.",
      business: "Design Department",
      requiredSkill:
        "Figma, Adobe XD, Wireframing, Prototyping, UX Research",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      position: "Backend Developer (Node.js)",
      type: "Full-Time",
      location: "Hyderabad, India",
      shift: "Day Shift",
      experience: "2-5 Years",
      salary: "₹6,00,000 - ₹9,00,000 / year",
      description: "Develop robust and scalable backend services using Node.js and MongoDB.",
      content:
        "We are seeking a Node.js Developer with experience in API development, authentication, and working with large data systems.",
      slug: "backend-developer-nodejs",
      metaTitle: "Backend Developer Node.js Job Opening | Careers",
      metaDescription:
        "Join our backend engineering team as a Node.js Developer to build scalable APIs.",
      business: "Backend Engineering",
      requiredSkill:
        "Node.js, Express.js, MongoDB, Redis, APIs, Git, Docker",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      position: "Digital Marketing Executive",
      type: "Full-Time",
      location: "Pune, India",
      shift: "Morning Shift",
      experience: "0-2 Years",
      salary: "₹2,50,000 - ₹4,00,000 / year",
      description: "Responsible for executing digital marketing strategies for brand growth.",
      content:
        "The candidate should have basic knowledge of SEO, Google Ads, Social Media Campaigns, and content planning.",
      slug: "digital-marketing-executive",
      metaTitle: "Digital Marketing Executive Job Opening | Careers",
      metaDescription:
        "Apply for the Digital Marketing Executive position. Freshers with good communication skills are welcome.",
      business: "Marketing",
      requiredSkill:
        "SEO, SEM, Google Analytics, Social Media Marketing, Keyword Research",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  const [careers] = useState<CareersProps[]>(careersData);

  return (
    <section className="w-full relative h-auto flex flex-col gap-3 logistics-container mb-10">
      {careers.map((item, index) => (
        <CareersCard
          key={index}
          position={item.position}
          description={item.description}
          salary={item.salary}
          location={item.location}
          slug={item.slug}
          createdAt={item.createdAt}
          requiredSkill={item.requiredSkill}
        />
      ))}
    </section>
  );
}

export default CareerPageSection;
