import React from "react";

export interface CustomButton {
  css: string;
  text: string;
  isIcons: boolean;
}

export interface ShippingMethodsCardProps {
  image: string;
  title: string;
  description: string;
  number: string;
}

export interface SectionWrapperprops {
  title: string;
  description: string;
  children: React.ReactNode;
  css: string;
}

export interface ServicesweOfferCardprops {
  image: string;
  title: string;
  subtitle: string;
  descrtiption: string;
  direction: boolean;
  slug:string,
  toGoL2Page?:boolean
  GoL2BtnText?:string

}

export interface WhyChooseCardProps {
  image: string;
  title: string;
  subtitle?: string;
  subtitlecss?: string;
  description?: string;
  css?: string;
  descriptioncss?: string;
  children?: React.ReactNode;
}

export interface IndustriesCardprops {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
  linkurl?: string;
  url: boolean;
  linktext?: string;
}

export interface VissionMisionCardprops {
  image: string;
  title: string;
  description: string;
}

export interface WhyLogisticsCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}



export interface CertificationCardprops {
  certificationimage: string;
  iconimage: string;
  title: string;
  registerdyear: string;
}

export interface RealTimeCardprops {
  image: string;
  description: string;
}

export interface BloghighlightCardprops {
  image: string;
  title: string;
  subtitle: string;
  description?: string;
  isButton: boolean;
  isDescription: boolean;
  imagecss: string;
  titlecss?: string;
  slug:string
}

export interface BlogBestProps {
  image: string;
  subtitle: string;
  title: string;
  description:string;
  slug:string
}

export interface newletterprops {
  title: string;
  description: string;
}

export interface ModelProps {
  children: React.ReactNode;
}

//

export interface ServiceWeOfferProps {
  data: ServicesweOfferCardprops[];
}

export interface WhyChooseUsProps {
  data: WhyChooseCardProps[];
  isquoteShow: boolean;
}

export interface WhyLogisticsProps {
//   data: WhyChooseCardProps[];
  isQuotebtn: boolean;
}


export interface BlogpageBannerprops{
  firstchunktitle:string,
  maintitle:string,
  lastchunktitle?:string  
  btntext?:string
}

export interface Category {
  _id: string;
  name: string;
}

export interface Blog {
  slug: string;
  image: string;
  author: { name: string };
  readTime: string;
  updatedAt: string;
  createdAt: string;
  title: string;
  description: string;
}

export interface BlogsProps{
  blogs:Blog[]
}


export interface BlogPost {
  _id: string;
  title: string;
  image: string;
  banner: string;
  description: string;
  content: string;
  readTime: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  indexing: string;
  blogSchema: string;
  author: {
    name: string;
  };
  action: string;
  createdAt: string;
  updatedAt: string;

}

export interface CareersProps {
  position: string;
  type?: string;
  location?: string;
  shift?: string;
  experience?: string;
  salary?: string;
  description?: string;
  content?: string;
  slug?: string;
  metaTitle?: string;
  metaDescription?: string;
  business?: any;
  createdAt?: Date;
  updatedAt?: Date;
  requiredSkill:string
}
export interface CareersCardProps {
  image: string;
  title: string;
  location?: string;
  description?: string;
  experience?: string;
}

export interface TestimonialProps {
  logo?: string;
  companyName: string;
  designation: string;
  personName: string;
  rating: number;
  subtitle:string,
  reviewDate: string;
  comment?: string |undefined;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CertificateProps{
  name:string,
  registerYear:string,
  logo:string
}


export interface CertificateDataProps{
  data:CertificateProps[]
}
export interface CareersDataProps{
  data:CareersProps[]
}

export interface ClientsProps{
  companyName:string,
  logo:string
}

export interface FaqProp{
  question:string,
  answer:string,
}


export interface FaqdataProp{
  data:FaqProp[]
}

export interface TestimonialDataProps {
  data:TestimonialProps[]

}



export interface ApplyJobProps{
  children:React.ReactNode,
  position:string,
}

export interface IndustriesWeServeprops{
  image:string,
  title:string,
  subtitle:string,
  description:string,
  url:boolean
}
export interface TechnologySectiondataProps{
  data:IndustriesCardprops[]
}

export interface IndustriesWeServeDataprops{
  data:IndustriesWeServeprops[]
}


// global leader interface


export interface GLobalLeaderprops{
 icon: | any,
  title:string,

  description:string,

}

export interface GLobalLeaderDataprops{
  data:GLobalLeaderprops[]
}


export interface GLobalLeaderDataprops{
  data:GLobalLeaderprops[]
}


export interface GlobalLeaderCardprops {
 icon: any;
  title: string;

  description: string;
 
}
