"use client";
import Link from "next/link";
import React, { useRef } from "react";
import Image from "next/image";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname, useRouter } from "next/navigation";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { Phone } from "lucide-react";

const ModelSchema = z.object({
  email: z.string().email("Enter Valid Email"),
});

type ModelType = z.infer<typeof ModelSchema>;

function Footer() {
  const errorref = useRef<HTMLParagraphElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const url = usePathname();
  const route = useRouter();

  const { register, handleSubmit, reset } = useForm<ModelType>({
    resolver: zodResolver(ModelSchema),
  });

  async function onSubmit(data: ModelType) {
    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }
    try {
      const token = await executeRecaptcha();

      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/newslatter`, {
        ...data,
        token,
        url,
      });
      reset();
      route.push("thank-you");
      console.log(response, "sumnited ");
    } catch (error) {
      console.log(error);
      if (errorref.current) {
        errorref.current.textContent =
          "Captcha verification failed. Please call us  on +91 79776 46886.";
      }
      setTimeout(() => {
        if (errorref.current) {
          errorref.current.textContent = "";
        }
      }, 6000);
    }
  }

 return (
<footer className="w-full relative h-auto flex bg-white flex-col gap-1">
  <section className="w-full relative logistics-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-20">

    {/* COLUMN 1 — Logo + Why Us */}
    <div className="flex flex-col gap-5">
      <Image
        src="/rhosigma-logo.svg"
        alt="Logo"
        width={400}
        height={100}
        className="object-contain xl:ml-[-6]"
      />

      {/* <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary">
        Why Rhosigma?
      </h2> */}

      <p className="text-text-secondary text-sm md:text-base leading-relaxed font-normal">
        Rhosigma having years of experience in valve automation and having production knowledge for any types of valves automation.
        And understanding of customers requirement and providing solution with lower budget.
      </p>
    </div>

    {/* COLUMN 2 — Useful Links */}
    <div className="flex flex-col gap-5 xl:ml-20">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary">
        Useful Links
      </h2>

      <div className="flex flex-col gap-2">

        <Link href="/home" className="group text-text-secondary text-sm md:text-base font-normal w-fit transition-all">
          <span className="relative block">
            Home
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="/about" className="group text-text-secondary text-sm md:text-base font-normal w-fit transition-all">
          <span className="relative block">
            About Us
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="/contact" className="group text-text-secondary text-sm md:text-base font-normal w-fit transition-all">
          <span className="relative block">
            Contact
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="/about/#certifications" className="group text-text-secondary text-sm md:text-base font-normal w-fit transition-all">
          <span className="relative block">
            Carriers
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <Link href="/faqs" className="group text-text-secondary text-sm md:text-base font-normal w-fit transition-all">
          <span className="relative block">
            FAQ's
            <span className="absolute left-0 -bottom-[2px] h-[2px] w-0 bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

      </div>
    </div>

    {/* COLUMN 3 — Contact + Social */}
    <div className="flex flex-col gap-5 ">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary">
        Have a Question?
      </h2>

      <p className="text-primary text-sm md:text-base font-semibold">
        Services 24/7
      </p>

      <div className="flex flex-col gap-2">

        <Link href="tel:+917573903976"
          className="group text-text-secondary hover:text-primary text-sm md:text-base font-normal flex items-center gap-3 transition-all w-fit"
        >
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center">
            <Image height={20} width={20} alt="Phone" src="/phone.svg" />
          </div>

          <span className="relative after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full text-sm">
            +91 75739 03976 / 
          </span>
           <span  className="relative after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full text-sm">91 - 8655587403</span>
        </Link>

        <Link href="mailto:info@rhosigma.in"
          className="group text-text-secondary hover:text-primary text-sm md:text-base font-normal flex items-center gap-3 transition-all w-fit"
        >
          <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center">
            <Image height={20} width={20} alt="mail" src="/mail.svg" />
          </div>

          <span className="relative after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
            info@rhosigma.in
          </span>
        </Link>

      </div>

      <div className="flex items-center gap-3 pt-2">
        {[
          "/facebook.svg",
          "/linkedIn.svg",
          "/instagram.svg",
          "/twitterx.svg"
        ].map((icon, idx) => (
          <Link
            key={idx}
            href="#"
            className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] hover:opacity-90 transition-opacity flex items-center justify-center"
          >
            <Image height={20} width={20} alt="social" src={icon} />
          </Link>
        ))}
      </div>
    </div>

    {/* COLUMN 4 — Address */}
    <div className="flex flex-col gap-5">
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary">
        Rhosigma
      </h2>

      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
        602-B, Virani Business Center, Opp Bharat Gears Limited,
        Kausa Mumbra, Thane 400612.
      </p>

      {/* <h3 className="font-semibold text-text-secondary text-base md:text-lg pt-2">
        Branch Office
      </h3>

      <p className="text-text-secondary text-sm md:text-base leading-relaxed">
        602-B, Virani Business Center, Opp Bharat Gears Limited,
        Kausa Mumbra, Thane 400612.
      </p> */}
    </div>

  </section>

  <section className="w-full logistics-container pt-5 pb-4 flex flex-wrap gap-5 items-center justify-center lg:justify-between mt-5 border-t border-text-primary">
    {/* <Image
      src={"/lanjekar-white-icon.png"}
      alt="logistics image"
      height={400}
      width={400}
      className="w-[30px] h-[30px] object-contain"
    /> */}

    <div className="w-fit px-10  flex flex-col lg:flex-row items-center gap-3 md:gap-5 justify-start border-primary">
      <p className="text-sm lg:text-base font-medium text-text-secondary text-start">
      Copyright © {new Date().getFullYear()} Rhosigma Engineering & Automation PVT. LTD. - All Rights Reserved
    </p>

      {/* <Link
        className="group flex items-center gap-3 text-sm lg:text-base text-text-secondary hover:text-primary transition-all"
        href={"tel:8655587403"}
      >
        <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center">
          <Image height={20} width={20} alt="Phone" src={"/phone.svg"} />
        </div>

        <span className="relative after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
          91 - 8655587403
        </span>
      </Link>

      <Link
        className="group flex items-center gap-3 text-sm lg:text-base text-text-secondary hover:text-primary transition-all"
        href={"mailto:sales@rhosigma.in"}
      >
        <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center">
          <Image height={20} width={20} alt="mail" src={"/mail.svg"} />
        </div>

        <span className="relative after:absolute after:left-0 after:-bottom-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
          sales@rhosigma.in
        </span>
      </Link> */}

    </div>

    <p className="text-sm lg:text-base font-medium text-text-secondary text-start">
    Designed & Maintained by <span  className="text-text-primary text-md font-bold">
      <a href="https://sovorun.com/">
      Sovorun
      </a></span> 
    </p>
  </section>
</footer>

);
}

export default Footer;
