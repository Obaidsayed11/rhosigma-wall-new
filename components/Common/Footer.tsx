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
    <footer className="w-full relative h-auto flex bg-accent flex-col gap-1">
      <section className="w-full relative logistics-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10 lg:py-20">
        {/* COLUMN 1 — Logo + Why Us */}
        <div className="flex flex-col gap-5">
          <Image
            src="/rhosigma-logo.svg"
            alt="Logo"
            width={400}
            height={100}
            className="object-contain"
          />

          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-primary">
            Why Lanjekar?
          </h2>

          <p className="text-text-secondary text-sm leading-relaxed font-normal">
            Lanjekar Logistics has years of experience in logistics, warehousing
            and end-to-end supply chain solutions. Our understanding of customer
            requirements helps us deliver fast, reliable & cost-effective
            logistics.
          </p>
        </div>

        {/* COLUMN 2 — Useful Links */}
        <div className="flex flex-col gap-5">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-primary">
            Useful Links
          </h2>

          <div className="flex flex-col gap-3">
            <Link
              href="/about"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              Products
            </Link>
            <Link
              href="/team"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/where-to-install"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              Where To Install
            </Link>
            <Link
              href="/certification"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              Our Certification
            </Link>
            <Link
              href="/contact"
              className="text-text-primary hover:text-primary text-sm font-normal transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* COLUMN 3 — Contact + Social */}
        <div className="flex flex-col gap-5">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-primary">
            Have a Question?
          </h2>

          <p className="text-blue-300 text-sm font-semibold">Services 24/7</p>

          <div className="flex flex-col gap-3">
            <Link
              href="tel:+917573903976"
              className="text-text-secondary hover:text-primary text-sm font-normal flex items-center gap-3 transition-colors"
            >
              <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center flex-shrink-0">
                <Image
                  height={20}
                  width={20}
                  alt="Phone"
                  src="/phone.svg"
                  className="text-white text-lg"
                />
              </div>

              <span className="whitespace-nowrap">+91 75739 03976</span>
            </Link>

            <Link
              href="mailto:info@lanjekarlogistics.com"
              className="text-text-secondary hover:text-primary text-sm font-normal flex items-center gap-3 transition-colors"
            >
             <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center flex-shrink-0">
                <Image
                  height={20}
                  width={20}
                  alt="mail"
                  src="/mail.svg"
                  className="text-white text-lg"
                />
              </div>
              info@lanjekarlogistics.com
            </Link>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Link
              href="#"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Image
                  height={20}
                  width={20}
                  alt="facebook"
                  src="/facebook.svg"
                  className="text-white text-lg"
                />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] hover:opacity-90 transition-opacity flex items-center justify-center"
            >
              <Image
                  height={20}
                  width={20}
                  alt="linkedIn"
                  src="/linkedIn.svg"
                  className="text-white text-lg"
                />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] hover:opacity-90 transition-opacity flex items-center justify-center"
            >
             <Image
                  height={20}
                  width={20}
                  alt="instagram"
                  src="/instagram.svg"
                  className="text-white text-lg"
                />
            </Link>
            <Link
              href="#"
              className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] hover:opacity-90 transition-opacity flex items-center justify-center"
            >
             <Image
                  height={20}
                  width={20}
                  alt="twitter"
                  src="/twitterx.svg"
                  className="text-white text-lg"
                />
            </Link>
          </div>
        </div>

        {/* COLUMN 4 — Address */}
        <div className="flex flex-col gap-5">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-text-secondary">
            Lanjekar Logistics
          </h2>

          <p className="text-text-primary text-sm font-normal leading-relaxed">
            Plot No. 10, Transport Nagar, Near XYZ Road, Wagholi, Pune – 412207,
            Maharashtra, India
          </p>

          <h3 className="font-semibold text-text-secondary pt-2">
            Branch Office
          </h3>

          <p className="text-text-primary text-sm font-normal leading-relaxed">
            ABC Business Park, 2nd Floor, Office 12, Pimpri, Pune – 411018,
            India
          </p>
        </div>
      </section>

      <section className="w-full relative logistics-container pt-5 pb-4 h-auto flex flex-wrap gap-5 items-center justify-center lg:justify-between mt-5 border-t border-text-primary">
        <Image
          src={"/lanjekar-white-icon.png"}
          alt="logistics image"
          height={400}
          width={400}
          className="w-[30px] h-[30px] object-contain"
        />

        <div className="w-fit relative px-10 xl:px-20 h-auto flex flex-col lg:flex-row items-center gap-3 md:gap-5 border-r border-l justify-center border-white">
          <Link
            className="flex items-center gap-3 text-sm lg:text-base text-text-secondary hover:text-primary transition-colors font-normal"
            href={"tel:8655587403"}
          >
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center flex-shrink-0">
              <Image
                height={20}
                width={20}
                alt="Phone"
                src={"/phone.svg"}
                className="text-white text-lg"
              />
            </div>
            91 - 8655587403
          </Link>
          <Link
            className="flex items-center gap-3 text-sm lg:text-base text-text-secondary hover:text-primary transition-colors font-normal"
            href={"mailto:sales@lanjekarlogistics.com"}
          >
            <div className="w-10 h-10 rounded-[10px] bg-gradient-to-r from-[#0d9de0] to-[#2e5bab] flex items-center justify-center flex-shrink-0">
                <Image
                height={20}
                width={20}
                alt="mail"
                src={"/mail.svg"}
                className="text-white text-lg"
              />
            </div>
            sales@lanjekarlogistics.com
          </Link>
        </div>

        <p className="text-sm lg:text-base font-medium text-text-secondary text-center">
          Copyright © {new Date().getFullYear()} Lanjekar Logistics - All Rights
          Reserved
        </p>
      </section>
    </footer>
  );
}

export default Footer;
