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
  const chunkSize = 19;
  const columns: Product[][] = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    columns.push(data.slice(i + 0, i + chunkSize));
  }

  return (
    <section className="w-full  h-auto ">
      <div className="logistics-container flex flex-col gap-10  mt[-10]">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
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
                    rounded-xl 
                    p-4 
                    flex 
                    items-center 
                    justify-between
                    transition-all 
                    duration-300 
                    hover:-translate-y-1
                  "
                >
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                    {product.title}
                  </span>

                  <ChevronRight
                    className="
                      w-5 h-5 
                      text-slate-500 
                      group-hover:text-blue-500 
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
