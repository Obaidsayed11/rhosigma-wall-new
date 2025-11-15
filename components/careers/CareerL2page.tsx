"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useParams, usePathname, useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { CareersProps } from "@/types/Interface";

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

function CareerL2page() {
  const router = useRouter();
  const url = usePathname();
  const { slug } = useParams<{ slug: string }>();
  const errormessage = useRef<HTMLParagraphElement | null>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [career, setCareer] = useState<CareersProps>();

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

  const onSubmit = async (submitdata: ModelType) => {

    console.log(submitdata , "submittted data ")
    if (!executeRecaptcha) {
      alert("ReCAPTCHA not loaded");
      return;
    }

    try {
      const token = await executeRecaptcha();
      const formData = new FormData();
      formData.append("fullName", submitdata.fullName);
      formData.append("phone", submitdata.phone);
      formData.append("email", submitdata.email || "");
      formData.append("file", submitdata.file);
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
      const axiosError = error as AxiosError<{ message?: string }>;
      console.error(
        "There was an error submitting the form:",
        axiosError?.response?.data || error
      );
      if (errormessage.current) {
        errormessage.current.innerText =
          axiosError?.response?.data?.message || "Something went wrong.";
      }
      reset();
      setTimeout(() => {
        if (errormessage.current) {
          errormessage.current.innerText = "";
        }
      }, 6000);
    }
  };

  const getCareer = useCallback(async () => {
    try {
      const response = await axios.get<{ career: CareersProps }>(
        `${NEXT_PUBLIC_API_URL}/careers/${slug}`
      );
      console.log(response.data.career);
      setCareer(response.data.career);
    } catch (error) {
      console.error("Career page error:", error);
    }
  }, [slug]);

  useEffect(() => {
    getCareer();
  }, [getCareer]);

  return (
    <div className="max-w-5xl mx-auto p-6  my-10 sm:p-10 text-text-secondary border border-hover-section py-10">
      <h1 className="text-3xl font-semibold text-primary mb-4">
        {career?.position}
      </h1>
      <div className="flex flex-wrap justify-between mb-6 text-sm text-text-secondary border-b border-hover-section pb-5">
        <p>
          <strong>Location:</strong> {career?.location}
        </p>
        <p>
          <strong>Required Experience:</strong> {career?.experience}
        </p>
      </div>

      <div className="mb-6 border-b border-hover-section pb-5">
        <h2 className="font-semibold text-lg mb-2">Job Description:</h2>
        <p>{career?.description}</p>
      </div>
      {career?.requiredSkill && (
        <div className="mb-6 border-b border-hover-section pb-5">
          <h2 className="font-semibold text-lg mb-2">Required Skills:</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm">
            {/* {Array(6)
            .fill(career?.requiredSkill)
            .map((skill, i) => (
              <div key={i} className="flex items-center">
                • {skill}
              </div>
            ))} */}
            {career?.requiredSkill}
          </div>
        </div>
      )}
      {/* 
      <div className="mb-6 border-b border-hover-section pb-5">
        <h2 className="font-semibold text-lg mb-2">Responsibilities:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Develop and maintain high-quality software applications.</li>
          <li>
            Collaborate with cross-functional teams to define and implement new
            features.
          </li>
          <li>Conduct code reviews and ensure adherence to best practices.</li>
          <li>Troubleshoot and resolve software defects and issues.</li>
        </ul>
      </div>

      <div className="mb-6 border-b border-hover-section pb-5">
        <h2 className="font-semibold text-lg mb-2">Qualifications:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Bachelor’s degree in Computer Science or related field.</li>
          <li>
            Proficiency in programming languages such as Java, Python, or C++.
          </li>
          <li>Experience with agile development methodologies.</li>
          <li>Strong problem-solving skills and attention to detail.</li>
        </ul>
      </div> */}

      <div
        className="mb-6 border-b border-hover-section pb-5 "
        dangerouslySetInnerHTML={{ __html: `${career?.content}` }}
      />

      <div className="bg-gray-50  rounded-md  ">
        <h2 className="text-lg font-semibold mb-4">
          Join us in shaping the future of our industry.
        </h2>
        <form
          className="space-y-4"
          action={""}
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="w-full relative h-auto flex flex-col">
            <input
              type="text"
              placeholder="Full Name Here"
              className="w-full border border-gray-300 px-4 py-3 "
              {...register("fullName")}
            />

            {errors.fullName && (
              <p className="text-base font-medium text-red-400">
                {errors.fullName.message}
              </p>
            )}
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            <span className="w-full relative h-auto flex flex-col">
              <input
                type="email"
                placeholder="youmail@email.com"
                className="flex-1 border border-gray-300 px-4 py-3 "
                {...register("email")}
              />
              {errors.email && (
                <p className="text-base font-medium text-red-400">
                  {errors.email.message}
                </p>
              )}
            </span>
            <span className="w-full relative h-auto flex flex-col">
              <input
                type="tel"
                placeholder="+91 - 98765 43210"
                className="flex-1 border border-gray-300 px-4 py-3 "
                {...register("phone")}
              />
              {errors.phone && (
                <p className="text-base font-medium text-red-400">
                  {errors.phone.message}
                </p>
              )}
            </span>
          </div>
          <textarea
            placeholder="Your message here"
            className="w-full border border-gray-300 px-4 py-3  h-24 resize-none"
          />
          <div className="flex flex-col sm:flex-row text-start sm:items-center justify-between">
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
            <button
              type="submit"
              className="mt-4 sm:mt-0 bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CareerL2page;
