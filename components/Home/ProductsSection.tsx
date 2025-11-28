import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Product {
  title: string;
  url: string;
}

interface TechnologySectiondataProps {
  data: Product[];
}

function ProductsSection({ data }: TechnologySectiondataProps) {
  // Split equally into 3 columns
  const columns: Product[][] = [[], [], []];

  data.forEach((item, index) => {
    columns[index % 3].push(item);
  });

  return (
    <section className="w-full h-auto xl:-mt-14">
      <div className="logistics-container flex flex-col gap-10">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2 ">
          Our Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((product, productIndex) => (
                <Link
                  key={productIndex}
                  href={product.url}
                  className="
                    group 
                    bg-white/5 
                    hover:bg-white/10 
                    border border-white/10
                   
                    p-4 
                    flex 
                    items-center 
                    justify-between
                    hover:-translate-y-1
                    relative text-[14px] md:text-base text-white font-normal group transition-transform duration-300 ease-in-out transform hover:translate-x-2
                  "
                >
                  <span
                    className="
                    relative 
                    text-slate-300 
                    group-hover:text-white 
                    transition-all 
                    duration-300 
                    text-sm sm:text-base
                    block
                  "
                  >
                    {product.title}

                    {/* underline animation across whole width */}
                    <span
                      className="
                          absolute 
                          left-0 
                          -bottom-[2px] 
                          h-[2px] 
                          w-0 
                          bg-white 
                          transition-all 
                          duration-300 
                          group-hover:w-full
                          block
                        "
                    ></span>
                  </span>

                  <ChevronRight
                    width={20}
                    height={20}
                    className="
                      min-w-5 min-h-5 
                      text-blue-500
                      group-hover:text-gray-400
                      group-hover:translate-x-1
                      transition-all 
                      duration-300
                    "
                  />
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
