"use client";
import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";
import { ModelProps } from "@/types/Interface";
import { IoDocumentTextOutline } from "react-icons/io5";
import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { toast } from "sonner";



const ModelSchema = z.object({
  fullName: z.string().min(1 , "Enter Full Name"),
  email: z.string().email("Enter Valid Email"),
  phone: z
    .string()
    .regex(/^\d{10,11}$/, "Phone number must be 10 or 11 digits"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function Model({ children }: ModelProps) {
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
    console.log(data , "data logged")
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
  toast("Your form has been submitted.",{
    description : "We will get back to you soon!"
  })

setSubmitting(false)
      console.log(response, "submitted ");
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
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" max-w-[calc(100vw-30px)] sm:max-w-[500px] p-5 bg-white ">
        <DialogHeader>
          <DialogTitle className="text-4xl font-semibold text-primary">
            Get Quote
          </DialogTitle>
          <DialogDescription className="text-lg font-medium text-text-secondary">
            We will help you solve your logistics problems
          </DialogDescription>
        </DialogHeader>
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full relative h-auto flex flex-col gap-3 mt-2 "
        >
          <span className="w-full relat h-auto flex flex-col gap-0.5">
            <label
              htmlFor=""
              className="text-base font-medium text-text-secondary"
            >
              Name
            </label>

            <input
              type="text"
              className="w-full relative h-auto px-3 py-2 border border-hover-section text-text-secondary placeholder:text-base text-base"
              placeholder="Enter Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-sm font-medium text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </span>
          <span className="w-full relat h-auto flex flex-col gap-0.5">
            <label
              htmlFor=""
              className="text-base font-medium text-text-secondary"
            >
              Email
            </label>
            <input
              type="text"
              className="w-full relative h-auto px-3 py-2  border border-hover-section text-text-secondary placeholder:text-base text-base"
              placeholder="Enter Email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm font-medium text-red-400">
                {errors.email.message}
              </p>
            )}
          </span>
          <span className="w-full relat h-auto flex flex-col gap-0.5">
            <label
              htmlFor=""
              className="text-base font-medium text-text-secondary"
            >
              Phone
            </label>
            <input
              type="text"
              className="w-full relative h-auto px-3 py-2  border border-hover-section  text-text-secondary placeholder:text-base text-base"
              placeholder="Enter Phone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-sm font-medium text-red-400">
                {errors.phone.message}
              </p>
            )}
          </span>
          <span className="w-full relat h-auto flex flex-col gap-0.5">
            <label
              htmlFor=""
              className="text-base font-medium text-text-secondary"
            >
              Your Message
            </label>
            <textarea
              className="w-full relative h-auto px-3 py-2  border border-hover-section text-text-secondary placeholder:text-base text-base"
              rows={4}
              placeholder="Describe your requirements"
              {...register("message")}
            ></textarea>
          </span>

          <button className="w-fit text-white justify-self-end self-end cursor-pointer relative h-auto px-3 py-2  bg-green-600 flex items-center gap-2.5">
{submitting ? "Submitting..." : "Get Quote"}
            {/* Get Quote{" "} */}
            <IoDocumentTextOutline className="text-white text-[20px]" />
          </button>

          <p className="text-sm font-medium text-red-400" ref={errorref}></p>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default Model;
