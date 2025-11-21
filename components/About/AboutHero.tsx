import React from "react";
import BlogpageBanner from "../blogs/Blogpagebanner";
import Image from "next/image";
import { motion } from "motion/react"

function AboutHero() {
  return (
    <section className="w-full relative  flex  items-start justify-center  mb-5 lg:mb-20 py-16 md:py-24 lg:py-28 xl:py-32  h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[100vh]  ">
      <BlogpageBanner
        firstchunktitle={"They call us the"}
        maintitle={"people"}
        lastchunktitle="behind Valves "
        btntext="Who We Are"
      />
      <motion.section initial={{opacity:0,scale:0}} animate={{scale:1,opacity:1}} transition={{duration:.5,type:'spring', ease:'easeInOut'}}  className="w-full h-full absolute top-0 left-0 logistics-container  lg:gap-y-10 right-0 grid grid-cols-2">
        <span className="w-full relative h-auto grid items-center justify-start ">
          <Image
            src={"/quarter-turn-actuator-2.png"}
            alt="about image 1"
            height={500}
            width={500}
            className=" max-h-[80vh]  md:max-h-[130px] lg:max-h-[150px] xl:max-h-[250px] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[200px] object-cover"
          />
        </span>

        <span className="w-full relative h-auto grid items-center justify-end ">
          <Image
            src={"/about-hero-2.png"}
            alt=""
            height={400}
            width={400}
            className=" max-h-[80vh]  md:max-h-[130px] lg:max-h-[150px] xl:max-h-[250px] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[200px] object-cover "
          />
        </span>

        <span className="w-full relative h-auto grid items-center justify-start  lg:px-10">
          <Image
          src={"/about-hero-3.png"}
            alt=""
            height={400}
            width={400}
            className=" max-h-[80vh]  md:max-h-[130px] lg:max-h-[150px] xl:max-h-[250px] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[200px] object-cover "
          />
        </span>

        <span className="w-full relative h-auto grid items-center justify-end  lg:px-10 ">
          <Image
            src={"/about-hero-5.png"}
            alt=""
            height={400}
            width={400}
            className=" max-h-[80vh]  md:max-h-[130px] lg:max-h-[150px] xl:max-h-[250px] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[200px] object-cover "
          />
        </span>

        <span className="w-full relative h-auto  hidden sm:grid items-center justify-center col-span-2  ">
          <Image
             src={"/about-hero-4.png"}
            alt=""
            height={400}
            width={400}
            className=" max-h-[80vh]  md:max-h-[130px] lg:max-h-[150px] xl:max-h-[250px] max-w-[60px] sm:max-w-[80px] md:max-w-[100px] lg:max-w-[130px] xl:max-w-[200px] object-cover "
          />
        </span>
      </motion.section>
    </section>
  );
}

export default AboutHero;
