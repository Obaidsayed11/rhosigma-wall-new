"use client";
import React, { useRef, ChangeEvent, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { ApplyJobProps } from "@/types/Interface";

// Zod schema
const ModelSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Enter Valid Email"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  file: z
    .any()
    .refine((file) => file instanceof File, "Resume is required")
    .refine(
      (file) => file?.size <= 2 * 1024 * 1024,
      "File size must not exceed 2 MB"
    ),
});

type ModelType = z.infer<typeof ModelSchema>;

function ApplyJob({ children, position }: ApplyJobProps) {
  const router = useRouter();
  const url = usePathname();
  const errormessage = useRef<HTMLParagraphElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ModelType>({
    resolver: zodResolver(ModelSchema),
  });

  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("file", file, { shouldValidate: true });
      setFileName(file.name);
    }
  };

  async function onSubmit(submitData: ModelType) {
    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }

    try {
      const token = await executeRecaptcha();
      const formData = new FormData();
      formData.append("fullName", submitData.fullName);
      formData.append("email", submitData.email);
      formData.append("phone", submitData.phone);
      formData.append("file", submitData.file);
      formData.append("position", position);
      formData.append("token", token);
      formData.append("url", url);

      const response = await axios.post(
        `${NEXT_PUBLIC_API_URL}/career-form`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      reset();
      router.push("/thank-you");
    } catch (error: unknown) {
      console.error("Error submitting the form:", error);

      const message =
        axios.isAxiosError(error) && error.response?.data
          ? error.response.data
          : "An unexpected error occurred.";

      if (errormessage.current) {
        errormessage.current.innerText = String(message);
      }

      reset();

      setTimeout(() => {
        if (errormessage.current) {
          errormessage.current.innerText = "";
        }
      }, 6000);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="w-fit relative ">{children}</DialogTrigger>
      <DialogContent className="p-10  max-w-[600px]">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="w-full relative h-auto grid grid-cols-2 gap-5"
        >
          <span className="w-full relative h-auto flex flex-col">
            <input
              type="text"
              className="w-full  relative h-auto py-2 border border-hover-section px-4  placeholder:text-base placeholder:text-text-secondary"
              placeholder="Enter Name"
              {...register("fullName")}
            />
            {errors.fullName && (
              <p className="text-base font-medium text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </span>
          <span className="w-full relative h-auto flex flex-col">
            <input
              type="text"
              className="w-full relative h-auto py-2 border border-hover-section px-4  placeholder:text-base placeholder:text-text-secondary"
              placeholder="Enter Phone"
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-base font-medium text-red-400">
                {errors.phone.message}
              </p>
            )}
          </span>
          <span className="w-full relative h-auto flex flex-col col-span-2">
            <input
              type="text"
              className="w-full relative h-auto py-2 border border-hover-section px-4  placeholder:text-base placeholder:text-text-secondary "
              placeholder="Enter Email "
              {...register("email")}
            />
            {errors.email && (
              <p className="text-base font-medium text-red-400">
                {errors.email.message}
              </p>
            )}
          </span>

          <div className="w-full relative h-auto flex items-center justify-between gap-2 col-span-2">
            <span className="w-full relative h-auto flex flex-col">
              <label className="text-sm flex items-center gap-2">
                <input
                  type="file"
                  accept="application/pdf"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="px-4 py-2 bg-hover-section rounded cursor-pointer">
                  Upload Resume
                </span>
                <span className="text-gray-500">{fileName}</span>
                {errors.file && (
                  <p className="text-base font-medium text-red-400">
                    {errors.file.message}
                  </p>
                )}
              </label>
            </span>

            <button className=" cursor-pointer w-fit px-10 py-2 relative h-auto flex text-base font-medium bg-green-600 text-white">
              Apply
            </button>

            <p
              className="text-base font-medium text-white"
              ref={errormessage}
            ></p>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ApplyJob;
