'use client'
import React from "react";
import { BlogpageBannerprops } from "@/types/Interface";
import { IoMdArrowDown } from "react-icons/io";
import {motion} from "motion/react"

function BlogpageBanner({
  firstchunktitle,
  maintitle,
  lastchunktitle,
  btntext
}: BlogpageBannerprops) {

  function scrollToSecond(){
    window.scrollTo({
      top:800,
      behavior:'smooth'
    })
  }

  return (
    <section className="w-full relativ h-auto z-30  py-10 md:py-20 flex items-center  logistics-container text-center justify-center flex-col gap-5">
      <motion.h1 className="  text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-text-primary text-center gap-3 flex px-3 lg:px-10 items-center justify-center flex-wrap  font-semibold"  initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.4,ease:"easeInOut", type:"spring"}}>
        {firstchunktitle}
        <span className="text-primary">{maintitle}</span> {lastchunktitle}
      </motion.h1>
      <motion.p className=" text-base lg:text-lg font-medium text-text-secondary"  initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.4,ease:"easeInOut", type:"spring"}}>
        Leading Valve company in india
      </motion.p>

      <motion.button className="w-fit  items-center  relative h-auto px-3 lg:px-5 py-1 lg:py-2 text-primary cursor-pointer flex bg-transparent hover:bg-primary hover:text-white  border border-primary gap-2" onClick={scrollToSecond}  initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:.4,ease:"easeInOut", type:"spring"}}>
        {btntext  ? btntext : "Explore Blogs"}
        <IoMdArrowDown className="text-[20px] " />
      </motion.button>
    </section>
  );
}

export default BlogpageBanner;
