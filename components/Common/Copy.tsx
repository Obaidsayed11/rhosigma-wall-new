"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ProductDataProps } from "@/lib/productsData";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

interface ProductDetailProps {
  product: ProductDataProps;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  // State to track the active index, primarily updated by the main Swiper
  const [activeIndex, setActiveIndex] = useState(0);

  // Ref for the main Swiper instance to control it externally
  const mainSwiperRef = useRef<any>(null);

  // Function to handle thumbnail click
  const handleThumbnailClick = (index: number) => {
    if (mainSwiperRef.current && mainSwiperRef.current.slideTo) {
      mainSwiperRef.current.slideTo(index);
    }
  };

  // Function to handle navigation from external buttons
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

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.title}</li>
          </ol>
        </nav>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* IMAGE GALLERY */}
          <div>
            {/* Main Image Swiper */}
            <Swiper
              modules={[Navigation, Thumbs, Autoplay]}
              // Assign ref to get the Swiper instance
              onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              // onSlideChange for updating active thumbnail border
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              loop={true} // Keep loop for smooth transitions
              className="rounded-lg shadow-lg bg-white"
            >
              {product.images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative aspect-square w-full">
                    <Image
                      src={img}
                      alt={`${product.title} - ${idx + 1}`}
                      fill
                      className="object-contain p-10"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Swiper with External Navigation Buttons */}
            <div className="relative mt-4 mx-auto">
              <Swiper
                modules={[FreeMode, Thumbs]}
                onSwiper={setThumbsSwiper}
                spaceBetween={0}
                slidesPerView={3}
                freeMode={true}
                watchSlidesProgress
                // Add a custom class for custom navigation if needed
                className="my-thumbnail-swiper"
              >
                {product.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      onClick={() => handleThumbnailClick(idx)}
                      className={`
                        relative aspect-square w-24 h-24 border-2 rounded-lg overflow-hidden cursor-pointer
                        hover:border-primary transition-all duration-150
                        ${
                          activeIndex === idx
                            ? "border-primary ring-2 ring-primary"
                            : "border-gray-200"
                        }
                      `}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover p-1"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons for Thumbnails */}
              <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-2">
                <button
                  onClick={handlePrevClick}
                  className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none pointer-events-auto"
                  aria-label="Previous thumbnail"
                >
                  {/* Heroicons 'chevron-left' */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNextClick}
                  className="p-2 bg-white rounded-full shadow-md text-gray-700 hover:bg-gray-100 focus:outline-none pointer-events-auto"
                  aria-label="Next thumbnail"
                >
                  {/* Heroicons 'chevron-right' */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT INFORMATION */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <p className="text-lg text-gray-700 mb-8">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="grid gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* SPECIFICATIONS */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-gray-50" : "bg-white"
                        }
                      >
                        <td className="px-6 py-3 font-semibold text-gray-900">
                          {spec.label}
                        </td>
                        <td className="px-6 py-3 text-gray-700">
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
  );
}