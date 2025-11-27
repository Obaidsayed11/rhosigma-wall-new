"use client";
import React, { useRef, useState } from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { toast } from "sonner";

const ModelSchema = z.object({
  fullName: z.string().min(1 , "Enter Full Name"),
  email: z.string().email("Enter Valid Email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function ContactForm() {

  const [submitting , setSubmitting] = useState(false)

  const errorref = useRef<HTMLParagraphElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const url = usePathname();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ModelType>({
    resolver: zodResolver(ModelSchema),
  });

  async function onSubmit(data: ModelType) {
    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }
    try {
      setSubmitting(true)
      const token = await executeRecaptcha();
console.log(token , "token")
      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/contact-us`,
        {
          ...data,
          token,
          url,
        }
      );
      reset();
        toast("Your form has been submitted." , {
    description : "We will get back to you soon!"
  })
      setSubmitting(false)
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
    <form
      action={""}
      onSubmit={handleSubmit(onSubmit)}
      className="flex items-start h-fit flex-col gap-5 p-5 lg:p-7 border border-hover-section w-full mt-5 md:mt-0"
    >
      <div className="w-full relative h-auto flex flex-col gap-2">
        <h2 className="text-3xl font-semibold text-text-secondary">
          Get in Touch
        </h2>
        <p className="text-base font-medium  mb-3 text-text-secondary">
          you can reach to us anytime
        </p>

        <span className="w-full relative h-auto flex flex-col gap-1 col-span-2">
          <input
            type="text"
            className="w-full relative h-auto py-2 lg:py-4 px-4 border  border-hover-section "
            placeholder="Full Name Here "
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-sm font-medium text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </span>
        <span className="w-full relative h-auto flex flex-col  col-span-2 lg:col-span-1">
          <input
            type="text"
            className="w-full relative h-auto py-2 lg:py-4 border-hover-section px-4 border "
            placeholder="Enter Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm font-medium text-red-400">
              {errors.email.message}
            </p>
          )}
        </span>
        <span className="w-full relative h-auto flex flex-col col-span-2 lg:col-span-1">
          <input
            type="text"
            className="w-full relative h-auto py-2 lg:py-4 border-hover-section px-4 border    "
            placeholder="Enter phone"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-sm font-medium text-red-400">
              {errors.phone.message}
            </p>
          )}
        </span>
        <span className="w-full relative h-auto flex flex-col">
          <textarea
            className="w-full relative text-base  border border-hover-section px-5 py-3 text-text-secondary h-auto  "
            id=""
            rows={4}
            {...register("message")}
            placeholder="Your Message Here"
          ></textarea>
        </span>

        <button className="w-full  cursor-pointer relative px-2 py-3 h-auto text-center bg-primary text-white text-base font-medium hover:bg-white hover:text-primary  border border-transparent hover:border-primary  ">
          {submitting ? "Submitting..." : "Submit"}
        </button>

        <p ref={errorref} className="text-base font-medium"></p>

      </div>
      <p className="flex items-center justify-center text-center flex-wrap text-text-secondary mx-auto ">
        by contacting us, you agree to our{" "} <br/>
         Terms of service & Privacy Policy
        {/* <Link
          href="/privacy-policy"
          className="text-text-secondary font-semibold "
        >
          {" "}
          Terms of service & Privacy Policy
        </Link> */}
      </p>
    </form>
  );
}

export default ContactForm;
