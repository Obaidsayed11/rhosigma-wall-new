"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";

import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname, useRouter } from "next/navigation";
import { NEXT_PUBLIC_API_URL } from "@/config";

const ModelSchema = z.object({
  fullName: z.string().min(1 , "Enter Full Name"),
  email: z.string().email("Enter Valid Email"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Phone number must be 10 or 11 digits"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function FormSection() {
  const [submitting , setSubmitting] = useState(false)
  const errorref = useRef<HTMLParagraphElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const url = usePathname();
  const route = useRouter();

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

      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/contact-us`,
        {
          ...data,
          token,
          url,
        }
      );
      reset();
      setSubmitting(false)
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
    <section className="w-full relative py-10 lg:py-20  flex flex-col-reverse md:grid logistics-container items-center justify-center grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10 xl:gap-20 ">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="w-full border border-hover-section p-5 xl:p-5 h-full relative flex  gap-10 flex-col"
      >
        <h2 className="text-2xl font-medium text-text-secondary">
          Request a Custom Logistics Solution Today
        </h2>

        <section className="w-full relative h-auto grid grid-cols-2 gap-2 lg:gap-5 ">
          <span className="w-full relative h-auto flex flex-col gap-1 col-span-2">
            <input
              type="text"
              className="w-full relative h-auto py-2  px-4 border  border-hover-section "
              placeholder="Full Name Here *"
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
              className="w-full relative h-auto py-2  border-hover-section px-4 border "
              placeholder="Enter Email *"
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
              className="w-full relative h-auto py-2  border-hover-section px-4 border    "
              placeholder="Enter phone *"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm font-medium text-red-400">
                {errors.phone.message}
              </p>
            )}
          </span>
          <span className="col-span-2 flex flex-col gap-1">
            <textarea
              className="w-full relative h-auto py-2  px-4 border-hover-section border  "
              placeholder="Enter Message"
              {...register("message")}
              rows={3}
            />
          </span>
        </section>

        <button className="w-fit relative text-base border border-transparent  hover:border-primary px-6 py-2  text-white bg-primary cursor-pointer hover:text-primary hover:bg-transparent">
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <Image
        src={"/ship-image.jpg"}
        alt="ship image"
        height={500}
        width={500}
        className="w-full  min-h-full relative object-cover max-h-[300px] md:max-h-[405px]  "
      />
    </section>
  );
}

export default FormSection;
