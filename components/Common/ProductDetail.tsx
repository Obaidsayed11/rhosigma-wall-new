"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ProductDataProps } from "@/lib/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, FreeMode } from "swiper/modules";
import { ChevronLeft, ChevronRight, DownloadCloudIcon, DownloadIcon } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface ProductDetailProps {
  product: ProductDataProps;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const mainSwiperRef = useRef<any>(null);

  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current && mainSwiperRef.current.slideTo) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  const handlePrevClick = () => {
    if (mainSwiperRef.current && mainSwiperRef.current.slidePrev) {
      mainSwiperRef.current.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (mainSwiperRef.current && mainSwiperRef.current.slideNext) {
      mainSwiperRef.current.slideNext();
    }
  };

  const hasMultipleImages = product.images.length > 1;

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8 text-xs sm:text-sm">
          <ol className="flex items-center space-x-2 flex-wrap">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            {/* <li className="text-gray-400">/</li>
            <li>
              <a href="/products" className="text-gray-500 hover:text-gray-700">
                Products
              </a>
            </li> */}
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium line-clamp-1">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* IMAGE GALLERY */}
          <div className="w-full">
            {/* Main Image Swiper */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Thumbs, Autoplay]}
                onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                autoplay={
                  hasMultipleImages
                    ? {
                        delay: 3000,
                        disableOnInteraction: false,
                      }
                    : false
                }
                thumbs={{
                  swiper:
                    thumbsSwiper && !thumbsSwiper.destroyed
                      ? thumbsSwiper
                      : null,
                }}
                loop={hasMultipleImages}
                className="rounded-lg shadow-lg bg-white overflow-hidden"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="relative aspect-square w-full">
                      <Image
                        src={img}
                        alt={`${product.title} - ${idx + 1}`}
                        fill
                        className="object-contain p-2 sm:p-6 lg:p-10"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Thumbnail Gallery */}
          {/* Thumbnail Gallery */}
{hasMultipleImages && (
  <div className="relative mt-4 flex items-center justify-center mx-auto w-full max-w-md xl:max-w-[500px]">
    <button
      onClick={handlePrevClick}
      className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition z-10 flex-shrink-0"
    >
      <ChevronLeft className="w-5 h-5" />
    </button>

    <div className="flex-1 mx-2 sm:mx-3 overflow-hidden">
      <Swiper
        modules={[FreeMode, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={8}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress
        breakpoints={{
          640: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
        }}
      >
        {product.images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleThumbnailClick(idx)}
              className={`
                relative 
                aspect-square 
                w-full
                rounded-lg 
                overflow-hidden 
                cursor-pointer 
                transition-all 
                duration-200
                ${
                  activeIndex === idx
                    ? "border-2 border-primary"
                    : "border-2 border-gray-200"
                }
              `}
            >
              <Image
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                fill
                className="object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <button
      onClick={handleNextClick}
      className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 transition z-10 flex-shrink-0"
    >
      <ChevronRight className="w-5 h-5" />
    </button>
  </div>
)}
          </div>

          {/* PRODUCT INFORMATION */}
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8">
              {product.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="flex-1 bg-primary text-white px-6 py-3 hover:bg-[#0d9de0] transition font-semibold">
                Request Quote
              </button>
              {product.brochureUrl && (
                <a
                  href={product.brochureUrl}
                  download
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300  hover:bg-gray-50 transition font-semibold"
                >
                  {/* <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg> */}
                  <DownloadIcon />
                  Download Brochure
                </a>
              )}
            </div>

            {/* FEATURES */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2 inline-block">
                Key Features
              </h2>
              <ul className="grid gap-2 sm:gap-3 mt-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SPECIFICATIONS */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 border-b-2 border-primary pb-2 inline-block">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mt-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      {product.specifications.map((spec, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0 ? "bg-gray-50" : "bg-white"
                          }
                        >
                          <td className="px-3 sm:px-6 py-2 font-semibold text-gray-900 text-sm sm:text-base w-1/2">
                            {spec.label}
                          </td>
                          <td className="px-3 sm:px-6 py-2 text-gray-700 text-sm sm:text-base w-1/2">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
