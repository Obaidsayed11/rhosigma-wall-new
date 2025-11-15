"use client";
import React, { useRef, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname } from "next/navigation";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";

const ModelSchema = z.object({
  fullName: z.string(),
  email: z.string().email("Enter Valid Email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function FaqsForm() {
  const [isCopy, setIsCopy] = useState<string>();
  async function CopyToBoard(value: string) {
    try {
         await navigator.clipboard.writeText(value);
      setIsCopy(value);
      setTimeout(() => {
        setIsCopy("");
      }, 1000);
    } catch (error) {
      console.log(error, "error happen ");
    }
  }

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
      const token = await executeRecaptcha();

      const response = await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
        ...data,
        token,
        url,
      });
      reset();
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
      className="w-full relative h-fit p-5 border border-hover-section  flex flex-col gap-2 "
    >
      <h2 className="text-2xl font-semibold text-primary">Need Assistance ?</h2>
      <p className="text-basen font-medium text-text-secondary mb-3">
        Reach out to our support team and we’ll help you right away.
      </p>
      <span className="flex  flex-col gap-0">
        <input
          type="text"
          className="w-full relative  h-auto py-2 px-3 border   border-hover-section     "
          placeholder="Full Name"
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className="text-base font-medium text-primary ">
            {errors.fullName.message}
          </p>
        )}
      </span>
      <span className="w-full relative h-auto flex flex-col gap-0">
        <input
          type="text"
          className="w-full relative h-auto  py-2 px-3 border border-hover-section   "
          placeholder="Mobile Number"
          {...register("phone")}
        />
           {errors.phone && (
          <p className="text-base font-medium text-primary ">
            {errors.phone.message}
          </p>
        )}
      </span>
      <span className="w-full flex flex-col gap-0">
      <input
        type="text"
        className="w-full relative h-auto py-2 px-3 border border-hover-section   "
        placeholder="Email"
        {...register("email")}
      />
      {errors.email &&
       <p className="text-base font-medium text-primary ">
            {errors.email.message}
          </p>
      }
      </span>

      <textarea
        rows={3}
        className="w-full relative h-auto py-2 px-2 border border-hover-section  "
        id=""
        placeholder="Your Question"
        {...register("message")}
      ></textarea>

      <button className="text-white mb-3  bg-primary px-10 py-3 cursor-pointer">
        Submit
      </button>

      <div className="w-full relative h-auto flex flex-col gap-3">
        <h2 className=" text-xl lg:text-2xl font-medium text-primary">
          Lanjekar Support Team
        </h2>
        <span className="w-full relative flex flex-col gap-1">
          <h2 className=" text-sm md:text-base font-medium text-text-primary">
            Customer Support:
          </h2>
          <p className="text-text-secondary font-medium text-base flex items-center gap-2">
            support@lanjekarlogistics.com
            {isCopy === "support@lanjekarlogistics.com" ? (
              <IoCheckmarkDone className="text-[20px] text-text-secondary cursor-pointer " />
            ) : (
              <FaRegCopy
                className="text-[20px] text-text-secondary cursor-pointer "
                onClick={() => CopyToBoard("support@lanjekarlogistics.com")}
              />
            )}
          </p>
        </span>
        <span className="w-full relative flex flex-col gap-1">
          <h2 className="text-sm md:text-base font-medium text-text-primary">
            WhatsApp:
          </h2>
          <p className="text-text-secondary font-medium text-base flex items-center gap-2">
            (+91) 98765 43210
            {isCopy === "(+91) 98765 43210" ? (
              <IoCheckmarkDone className="text-[20px] text-text-secondary cursor-pointer " />
            ) : (
              <FaRegCopy
                className="text-[20px] text-text-secondary cursor-pointer "
                onClick={() => CopyToBoard("(+91) 98765 43210")}
              />
            )}
          </p>
        </span>

        <p className="text-sm font-medium text-text-primary">
          © {new Date().getFullYear()} Lanjekar Logistics Pvt. Ltd. All Rights
          Reserved
        </p>
      </div>
    </form>
  );
}

export default FaqsForm;
