import React from "react";
import BloghighlightCard from "./BloghighlightCard";
import { BlogsProps } from "@/types/Interface";

function Bloghighlight({ blogs }: BlogsProps) {
  return (
    <section className="w-full logistics-container  relative h-auto py-10 lg:py-20 grid grid-cols-1 lg:grid-cols-2 ">
      {blogs[0] && (
        <BloghighlightCard
          image={blogs[0].image}
          title={blogs[0].title}
          subtitle={blogs[0].readTime}
          description={blogs[0].description}
          isButton={true}
          isDescription={true}
          imagecss="h-[70%] object-cover"
          slug={blogs[0].slug}
        />
      )}

      <div className="w-full relative grid grid-cols-2  h-full ">
        {blogs.slice(1, 4).map((blog, index) => (
          <BloghighlightCard
            image={blog.image}
            title={blog.title}
            subtitle={blog.readTime}
            slug={blog.slug}
            isButton={false}
            isDescription={false}
            imagecss=" h-[170px]"
            titlecss="text-base "
            key={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Bloghighlight;
