"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function CategoryProductList({ category, products }: any) {
  if (!products || products.length === 0) {
    notFound();
  }

  const categoryTitle = products[0].category;

  const [visibleCount, setVisibleCount] = useState(3);
  const visibleProducts = products.slice(0, visibleCount);

  const showMore = () => setVisibleCount((prev) => prev + 3);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{categoryTitle}</li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {categoryTitle}
          </h1>
          <p className="text-lg text-gray-600">
            Explore our range of {categoryTitle.toLowerCase()} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product: any) => (
            <Link
              key={product.id}
              href={`/products/${category}/${product.slug}`}
              className="group bg-white shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-semibold">
                  View Details
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < products.length && (
          <div className="text-center mt-10">
            <button
              onClick={showMore}
              className="hover:bg-transparent w-fit px-2 py-1 md:px-5 md:py-3 border border-primary hover:text-primary bg-primary text-white transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
