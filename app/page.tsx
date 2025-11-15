import "./globals.css";
import Hero from "@/components/Home/Hero";
import OurShippingMethods from "@/components/Home/OurShippingMethods";
import ServicesWeOffer from "@/components/Home/ServicesWeOffer";
import SectionWrapper from "@/components/Common/SectionWrapper";
import TrustedPatner from "@/components/Common/TrustedPatner";
import AboutSection from "@/components/About/AboutSection";
import WhyChooseUs from "@/components/Common/WhyChooseUs";
import IndustriesWeServe from "@/components/Common/IndustriesWeServe";
import TechnologySection from "@/components/Common/TechnologySection";
import { CheckCircle, Lightbulb, Cog } from "lucide-react";
import {
  ServicesweOfferCardprops,
  WhyChooseCardProps,
} from "@/types/Interface";
import { mergeMetadata } from "./layout";
import OurProducts from "@/components/Home/OurShippingMethods";
import HomeAbout from "@/components/Home/HomeAbout";
import GlobalLeader from "@/components/Home/GlobalLeader";
import ProductsSection from "@/components/Home/ProductsSection";

const ServiceweOffer: ServicesweOfferCardprops[] = [
  {
    title: "Logistics & Transportation",
    subtitle: "Reliable Freight, Across Every Route",
    descrtiption:
      "Whether by road, rail, air, or sea Lanjekar Logistics offers fully integrated freight solutions that connect your cargo to every corner of India and beyond. From first-mile pickup to final delivery, we handle each consignment with precision, care, and complete visibility.",
    image: "/logistics-transportation.webp",
    direction: false,
    slug: "",
  },
  {
    title: "Warehousing & Cold Storage",
    subtitle: "Safe. Scalable. Temperature-Controlled.",
    descrtiption:
      "Our advanced warehousing infrastructure supports cold chain storage, dry storage, and real-time inventory control. Whether you're managing perishables, pharmaceuticals, or industrial goods, we keep your products protected and perfectly preserved every step of the way.",
    image: "/warehousing-solution.webp",
    slug: "",
    direction: true,
  },
  {
    title: "Supply Chain Solutions",
    subtitle: "Streamlined from Source to Shelf",
    descrtiption:
      "Optimize your business with our end-to-end supply chain solutions in India. From procurement to distribution, we streamline logistics, reduce costs, and improve delivery speed for reliable, efficient operations across all sectors.",
    direction: false,
    image: "/supply-chain.webp",
    slug: "",
  },
  {
    title: "Last-Mile Delivery",
    subtitle: "Speed That Reaches the Final Doorstep",
    descrtiption:
      " Ensure fast and accurate deliveries with our last-mile logistics services. We offer real-time tracking and smart routing to guarantee timely doorstep delivery across India, enhancing customer satisfaction for e-commerce and retail brands.",
    direction: true,
    image: "/last-mile.webp",
    slug: "",
  },

  {
    title: "Technology Integration",
    subtitle: "Smarter Systems for Smarter Logistics",
    descrtiption:
      "Revolutionize logistics with real-time tracking, route optimization, and smart dashboards. Our advanced tech solutions offer full supply chain visibility, helping businesses boost efficiency, reduce costs, and make data-driven decisions with confidence.",
    direction: false,
    image: "/technology-solution.webp",
    slug: "",
  },
];

const WhyChooseUsSection: WhyChooseCardProps[] = [
  {
    image: "/real-time-icon.svg",
    title: "Real-Time Tracking",
    description:
      "Stay updated with live tracking and instant notifications for complete transparency.",
  },
  {
    image: "/cost-effective.svg",
    title: "Cost-Effective Solutions",
    description:
      "Reduce logistics expenses with smart routing and efficient delivery systems",
  },

  {
    image: "/eco-friendly.svg",
    title: "Eco-Friendly Logistics",
    description:
      "Lower carbon footprint through sustainable transport and green practices.",
  },

  {
    image: "/pan-india.svg",
    title: "Pan-India Reach",
    description:
      "Reliable delivery across all regions—from metros to remote areas.",
  },

  {
    image: "/customer-care.svg",
    title: "Customer-Centric Approach",
    description: "Customized logistics support tailored to your business needs",
  },
];

const GlobalLeadersData = [
  {
    icon: <CheckCircle className="w-10 h-10 text-primary" />,
    title: "Quality Control",
    description:
      "The implementation of strict quality control in all aspects, in order to meet customer needs",
  },
  {
    icon: <Lightbulb className="w-10 h-10  text-primary" />,
    title: "R & D capabilities",
    description:
      "We have a strong R & D department and experienced engineers. We can design and make OEM/ODM",
  },
  {
    icon: <Cog className="w-10 h-10  text-primary" />,
    title: "Food & Beverage",
    description:
      "Your satisfaction is the best reward for us. We are looking forward to your visit for common development.",
  },
];

const prodcutsData = [
    {
        title: "Rack and Pinion Actuator",
        url: "/home"
    },
    {
        title: "Scotch Yoke Actuatorr",
        url: "/home"
    },
    {
        title: "PTL Series Electrical Actuator",
        url: "/home"
    },
    {
        title: "PVQ explosion proof electric actuator",
        url: "/home"
    },
    {
        title: "PHQ explosion proof electric actuator",
        url: "/home"
    },
    {
        title: "aum multi turn electrical actuator",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated 3 Pcs Ball Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated 2 Pcs Ball Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated 3 Way / 4 Way Ball Valve Screwed End / Flanged End.",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated Wafer Type Ball Valver",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated FEP / PFA Lined Ball Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated UPVC Ball Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Rotary Actuator Operated PP Ball Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Rubber Lined Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Rubber Lined Double Flange Type Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Rubber Lined Lug Type Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Spherical Disc Valve 150# & 300#",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated FEP / PFA Lined Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated PTFE Lined Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Aluminium Pressure Die Cast Butterly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Wafer Type Metal Seated Damper Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Double Flange Fabricated Damper Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated UPVC Wafer Type Butterfly Valve",
        url: "/home"
    },
    {
        title: "Pneumatic Actuator Operated Wafer Type / TC End Butterfly Valve For Pharma Application.",
        url: "/home"
    },
    {
        title: "Electrical On/off, Modulating, Intergral Starter UPVC Ball Valve",
        url: "/home"
    },
    {
        title: "Motorized 2 Pcs Ball Valve Flanged End ASA 150#/300#",
        url: "/home"
    },
    {
        title: "Motorized 2 Pcs FEP / PFA Lined Ball Valve Flanged End",
        url: "/home"
    },
    {
        title: "Motorized 3 WAY / 4 WAY BALL VALVE",
        url: "/home"
    },
    {
        title: "Motorized 3 pcs ball valve Screwed end / Flanged end ASA 150# / 300#",
        url: "/home"
    },
    {
        title: "Motorized PP Ball Valve",
        url: "/home"
    },
    {
        title: "Motorized Wafer type Ball Valve",
        url: "/home"
    },
    {
        title: "Elecrical On/off, Moudlating And Intergral Starter FEP / PFA Lined Butterfly Valve",
        url: "/home"
    },
    {
        title: "Electrical On/Off, Modulating And Integral Starter Spherical Disc Valve 150# & 300#",
        url: "/home"
    },
    {
        title: "Motorized Double Flange Butterfly Valve",
        url: "/home"
    },
    {
        title: "Motorized Wafer type Butterfly Valve",
        url: "/home"
    },
    {
        title: "Motorize Rubber Seated Lug type Butterfly Valve",
        url: "/home"
    },
    {
        title: "Electrical ON/OFF, Modulating And Integral Started PTFE Lined Butterfly Valve",
        url: "/home"
    },
    {
        title: "Modulating and Integral Starter Double Flange Fabricated Damper Valve",
        url: "/home"
    },
    {
        title: "Motorized aluminium butterfly valve",
        url: "/home"
    },
    {
        title: "Motorized UPVC Wafer Type Butterfly Valve",
        url: "/home"
    },
    {
        title: "2 2 way pilot operated diaphragm type solenoid valve",
        url: "/home"
    },
    {
        title: "2/2 Way Semi lift Diaphragm Solenoid Valve",
        url: "/home"
    },
    {
        title: "2/2 Way Pilot operated piston type steam solenoid valve",
        url: "/home"
    },
    {
        title: "Aluminium Flame Proof Type Solenoid Valvese",
        url: "/home"
    },
    {
        title: "2/2 Way Direct Acting Solenoid Valve",
        url: "/home"
    },
    {
        title: "2/2 Way Pneumatic Single & Double Acting Operated Angle Type On/Off Control Valve",
        url: "/home"
    },
    {
        title: "Model APL2N (Micro Limit Switches)",
        url: "/home"
    },
    {
        title: "Model APL3N (Micro Limit Switches)",
        url: "/home"
    },
    {
        title: "Model APL4N (Micro Limit Switches)",
        url: "/home"
    },
    {
        title: "Model ITS 100 (Micro Limit Switches)",
        url: "/home"
    },
    {
        title: "Yt-1000 Electro Pneumatic Valve Positioner",
        url: "/home"
    },
    {
        title: "L8A-100 Electro Pneumatic Valve Positioner",
        url: "/home"
    },
    {
        title: "PSP-25 Series Smart Positioner",
        url: "/home"
    },
    {
        title: "Quarter Turn Manual Over Ride / Gear Box",
        url: "/home"
    },
    {
        title: "Air Filter Regulator",
        url: "/home"
    },
    {
        title: "5/2 Way Single / Double Coil",
        url: "/home"
    },
    {
        title: "3/2 Way Single / Double Coil",
        url: "/home"
    },
    {
        title: "Electrical ON/OFF, Modulating And ntegral Starter Wafer Type Metal Seated Damper Valve",
        url: "/home"
    },
    {
        title: "Electrical on/off, modulating and integral starter Wafer Type / TC End Butter Valve For Pharma Application",
        url: "/home"
    },
];




const IndustriesWeServedata = [
  {
    image: "/ecommerce-icon.svg",
    title: "E-Commerce",
    subtitle: "Fast, Flexible, and Fulfillment-Focused",
    description:
      "End-to-end logistics from warehouse to doorstep with last-mile delivery and reverse logistics",
    url: false,
  },
  {
    image: "/pharma-icon.svg",
    title: "Pharma & Healthcare",
    subtitle: "Safe Handling. Cold Chain Integrity.",
    description:
      "Safe transport of sensitive medical supplies with temperature-controlled logistics.",
    url: false,
  },
  {
    image: "/food-icon.svg",
    title: "Food & Beverage",
    subtitle: "Freshness Delivered, Always",
    description:
      "Cold chain solutions to maintain freshness from farm to fork.",
    url: false,
  },
  {
    image: "/agricultural-icon.svg",
    title: "Agriculture & Perishables",
    subtitle: "From Farms to Cities, Fast and Fresh",
    description:
      "Efficient transport and cold storage to minimize spoilage and boost value.",
    url: false,
  },
  {
    image: "/retail-icon.svg",
    title: "Retail & Consumer Goods",
    subtitle: "Efficient Movement, Maximum Shelf Life",
    description:
      "Streamlined inventory flow for timely shelf replenishment and customer satisfaction.",
    url: false,
  },
  {
    image: "/mfg-icon.svg",
    title: "Mfg. & Industrial Goods",
    subtitle: "Heavy Duty Logistics, Handled Smoothly",
    description:
      "WBulk cargo handling and route optimization for seamless manufacturing logistics.",
    url: false,
  },
];
const TechnologySectiondata = [
  {
    image: "/real-time-icon.svg",
    title: "Real Time Tracking",
    subtitle: "",
    description:
      "Monitor shipments in real time with GPS tracking and live dashboards. Get instant alerts on location, delays, and delivery status—ensuring full visibility and control at every step of your logistics journey.",
    linktext: "Know more",
    linkurl: "/technology",
    url: true,
  },
  {
    image: "/cold-chain.svg",
    title: "Cold Chain Monitoring",
    subtitle: "",
    description:
      "IoT sensors and temperature loggers protect perishable goods in transit. Stay compliant with automated alerts and reports that ensure products remain within safe temperature ranges—preserving freshness from origin to destination",
    linktext: "Know more",
    linkurl: "/technology",
    url: true,
  },

  {
    image: "/warehouse-mg.svg",
    title: "Warehouse Mgmt. Systems",
    subtitle: "",
    description:
      "Our WMS software improves accuracy and reduces errors in warehouse operations. From slotting to scanning, manage inventory and logistics efficiently with real-time visibility into inbound, outbound, and storage processes",
    linktext: "Know more",
    linkurl: "/technology",
    url: true,
  },
];

export const metadata = mergeMetadata({
  title: "Logistics Services Across India | Lanjekar Logistics",
  description:
    "Lanjekar Logistics offers professional logistics services across India. We ensure safe, timely delivery of cargo, freight, and custom transport solutions.",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Logistics Services Across India | Lanjekar Logistics",
    description:
      "Lanjekar Logistics offers professional logistics services across India. We ensure safe, timely delivery of cargo, freight, and custom transport solutions.",
    url: "/",
  },
  alternates: {
    canonical: `/`,
  },
});

export default function Home() {
  return (
    <>
      <Hero />
      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Where to install"}
        description={"Ideal Installation Locations for Products."}
      >
        <OurProducts />
      </SectionWrapper>

 <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"About Us"}
        description={"Crafting Excellence in Valve Automation."}
      >
        <HomeAbout />
      </SectionWrapper>

      {/* <SectionWrapper
        css=""
        title={"Services we offer"}
        description={"Smart Logistics, Seamless Delivery"}
      >
        <ServicesWeOffer data={ServiceweOffer} />
      </SectionWrapper> */}
 <SectionWrapper
        css=""
        title={"Global Leadership in Valve Automation"}
        description={"Striving for global leadership, fostering enduring customer relations, delivering technical online support, and daily advancements in customized products. Our vision includes expanding our network to offer swift and efficient local support, ensuring excellence in industrial valve automation worldwide."}
      >
        <GlobalLeader data={GlobalLeadersData} />
      </SectionWrapper>

      <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"clients-references"}
        description={
          "WE WANT TO HELP YOU TO FIND THE RIGHT DECISION!"
        }
      >
        <TrustedPatner />
      </SectionWrapper>

      {/* <SectionWrapper
        css=""
        title={"About Us"}
        description={"Driven by Purpose. Powered by Innovation."}
      >
        <AboutSection />
      </SectionWrapper> */}

      {/* <SectionWrapper
        css="bg-[#FFFFFF]"
        title={"Why choose us"}
        description={"Efficiency, Innovation, and Trust in Every Mile"}
      >
        <WhyChooseUs data={WhyChooseUsSection} isquoteShow={false} />
      </SectionWrapper> */}

      {/* <SectionWrapper
        css=""
        title={"Industries we serve"}
        description={"Customized Logistics for Every Industry"}
      >
        <IndustriesWeServe data={IndustriesWeServedata} />
      </SectionWrapper> */}

      {/* <SectionWrapper
        css=""
        title={"Our Technology"}
        description={"Smart Tools for Smarter Logistics"}
      >
        <TechnologySection data={TechnologySectiondata} />
      </SectionWrapper> */}

        <SectionWrapper
        css="bg-primary xl:mt[-30]"
        title={""}
        description={""}
      >
        <ProductsSection data={prodcutsData} />
      </SectionWrapper> 
    </>
  );
}
