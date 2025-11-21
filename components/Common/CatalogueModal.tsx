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
import { IoDocumentTextOutline } from "react-icons/io5";
import axios from "axios";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { toast } from "sonner";

const ModelSchema = z.object({
  fullName: z.string().min(1, "Enter Full Name"),
  email: z.string().email("Enter Valid Email"),
  phone: z.string().regex(/^\d{10,11}$/, "Phone number must be 10 or 11 digits"),
  city: z.string().min(1, "Enter City"),
  company: z.string().min(1, "Enter Your Company"),
  message: z.string().nullable(),
});

type ModelType = z.infer<typeof ModelSchema>;

function CatalogueModal({ isOpen, onClose }) {
  const [submitting, setSubmitting] = useState(false);
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
      setSubmitting(true);

      const token = await executeRecaptcha();

      await axios.post(`${NEXT_PUBLIC_API_URL}/contact-us`, {
        ...data,
        token,
        url,
      });

      toast("Your form has been submitted.", {
        description: "We will get back to you soon!",
      });

      reset();
      setSubmitting(false);
      onClose(false); // close modal

    } catch (error) {
      console.log(error);
      if (errorref.current) {
        errorref.current.textContent =
          "Captcha verification failed. Please call us on +91 79776 46886.";
      }
      setTimeout(() => {
        if (errorref.current) errorref.current.textContent = "";
      }, 6000);
    }
  }

return (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-[95vw] sm:max-w-[500px] md:max-w-[600px] p-3 sm:p-6 bg-white max-h-[95vh] overflow-y-auto">
      <DialogHeader className="space-y-1 sm:space-y-2">
        <DialogTitle className="text-xl sm:text-3xl md:text-4xl font-semibold text-primary">
          Get Quote
        </DialogTitle>
        <DialogDescription className="text-sm sm:text-lg font-medium text-text-secondary">
          Instant Quote for Your Needs
        </DialogDescription>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-2.5 sm:gap-4 mt-2 sm:mt-3"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <label className="text-xs sm:text-base font-medium text-text-secondary">
            Name
          </label>
          <input
            type="text"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            placeholder="Enter Name"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-xs text-red-500 mt-0.5">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <label className="text-xs sm:text-base font-medium text-text-secondary">
            Email
          </label>
          <input
            type="text"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            placeholder="Enter Email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-0.5">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <label className="text-xs sm:text-base font-medium text-text-secondary">
            Phone
          </label>
          <input
            type="text"
            className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
            placeholder="Enter Phone"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-500 mt-0.5">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* City and Company - Side by side on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
          {/* City */}
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <label className="text-xs sm:text-base font-medium text-text-secondary">
              City
            </label>
            <input
              type="text"
              className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter City"
              {...register("city")}
            />
            {errors.city && (
              <p className="text-xs text-red-500 mt-0.5">
                {errors.city.message}
              </p>
            )}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <label className="text-xs sm:text-base font-medium text-text-secondary">
              Company
            </label>
            <input
              type="text"
              className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent"
              placeholder="Enter Company"
              {...register("company")}
            />
            {errors.company && (
              <p className="text-xs text-red-500 mt-0.5">
                {errors.company.message}
              </p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-0.5 sm:gap-1">
          <label className="text-xs sm:text-base font-medium text-text-secondary">
            Your Message
          </label>
          <textarea
            rows={3}
            className="px-2.5 py-1.5 sm:px-3 sm:py-2.5 border border-hover-section text-text-secondary text-sm sm:text-base rounded focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent resize-none"
            placeholder="Describe your requirements"
            {...register("message")}
          ></textarea>
        </div>

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={submitting}
          className="self-end px-4 sm:px-6 py-1.5 sm:py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white flex items-center gap-1.5 sm:gap-2 rounded font-medium transition-colors text-sm sm:text-base"
        >
          {submitting ? "Submitting..." : "Download Catalougue"}
          <IoDocumentTextOutline className="text-white text-[16px] sm:text-[20px]" />
        </button>

        {/* Error Message */}
        {errorref && <p ref={errorref} className="text-xs sm:text-sm text-red-500"></p>}
      </form>
    </DialogContent>
  </Dialog>
);
}

export default CatalogueModal;
