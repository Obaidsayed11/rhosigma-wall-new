"use client";
import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GrLinkTop } from "react-icons/gr";

import Model from "./Model";

function SideGetQuote() {
  function ScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <section className="w-fit fixed rotate-90 top-[80%]  h-auto flex gap-5 -right-19 md:-right-26 z-50 ">
      <Model>
        <span className="w-fit cursor-pointer font-bold relative bg-primary text-white px-2 md:px-5 py-3 text-xl  items-center gap-2  flex  h-auto  ">
          Get a Quote
          <IoDocumentTextOutline className="text-[20px] " />
        </span>
      </Model>
      <button
        className=" px-3 py-2 relative cursor-pointer h-auto flex items-center bg-primary w-fit "
        onClick={ScrollTop}
      >
        <GrLinkTop className="text-[30px] -rotate-90 text-white" />
      </button>
    </section>
  );
}

export default SideGetQuote;
