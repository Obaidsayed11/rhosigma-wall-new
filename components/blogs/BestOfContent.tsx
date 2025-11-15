import React from "react";
import BlogBestCard from "./BlogBestCard";
import { BlogsProps } from "@/types/Interface";

function BestOfContent({ blogs }: BlogsProps) {
  return (
    <section className="w-full relative h-auto flex flex-col py-10 gap-5 logistics-container ">
      <h2 className="text-lg font-medium  flex items-center  gap-2  text-text-primary">
        <span className="px-1 py-4 bg-primary "></span>
        Best Of Logistics
      </h2>

      <div className="w-full relative h-auto grid grid-cols-2 xl:grid-cols-3 ">
        {blogs.map((blog, index) => (
          <BlogBestCard
            image={"/rail-image.png"}
            subtitle={blog.readTime}
            title={blog.title}
            description={blog.description}
            slug={blog.slug}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default BestOfContent;
