"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname } from "next/navigation";
import { NEXT_PUBLIC_API_URL } from "@/config";

const ModelSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Enter Valid Email"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Phone number must be 10 or 11 digits"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function BlogContactForm() {
  const errorref = useRef<HTMLParagraphElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const url = usePathname();
  const route=useRouter()
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
      const token = await executeRecaptcha();

      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
        ...data,
        token,
        url,
      });
      reset();
      route.push("thank-you")
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
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="w-full sticky top-20 h-fit flex flex-col gap-2 p-5 bg-primary"
    >
      <span className="w-full relative h-auto flex flex-col gap-1.5">
        <h2 className="text-4xl font-medium text-white ">Let&apos;s Connect</h2>
        <p className="text-base font-medium text-white mb-5">
          Enhanced Solution for your Industry{" "}
        </p>
      </span>
      <span className="w-full relative h-auto flex flex-col gap-1">
        <input
          type="text"
          className="w-full text-white  relative px-3 py-3 h-auto border-b border-white placeholder:text-white"
          placeholder="Name*"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-white  font-medium  text-base ">
            {errors.fullName.message}
          </p>
        )}
      </span>
      <span className="w-full relative h-auto flex flex-col gap-1">
        <input
          type="text"
          className="w-full relative px-3 py-3 h-auto border-b border-white  text-white placeholder:text-white"
          placeholder="Phone*"
          {...register("phone")}
        />
        {errors.email && (
          <p className="text-white  font-medium  text-base ">
            {errors.email.message}
          </p>
        )}
      </span>
      <span className="w-full relative h-auto flex flex-col gap-1">
        <input
          type="text"
          className="w-full relative px-3 py-3 h-auto border-b border-white text-white  placeholder:text-white "
          placeholder="Email*"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-white  font-medium  text-base ">
            {errors.email.message}
          </p>
        )}
      </span>
      <textarea
        rows={3}
        className="w-full relative px-3 py-3 h-auto border-b border-white  text-white  placeholder:text-white"
        placeholder="message*"
        {...register("message")}
      />

      <button className="w-fit relative px-6 mt-3 py-2 bg-white h-auto flex text-center text-lg font-medium cursor-pointer text-primary">
        Submit
      </button>

      <p className="text-white font-medium text-base" ref={errorref}></p>
    </form>
  );
}

export default BlogContactForm;
