import React from "react";
import Image from "next/image";
import { BloghighlightCardprops } from "@/types/Interface";
import Link from "next/link";
import { NEXT_PUBLIC_API_URL } from "@/config";
function BloghighlightCard({
  image,
  title,
  description,
  isButton,
  isDescription,
  subtitle,
  imagecss,
  titlecss,
  slug,
  
}: BloghighlightCardprops) {
  return (
    <Link href={`/blogs/${slug}`} className="flex flex-col gap-2 border-hover-section border h-auto p-2 md:p-5 ">
      <Image
        src={`${NEXT_PUBLIC_API_URL}${image}`}
        alt={title}
        height={500}
        width={500}
        className={`w-full relative  object-cover ${imagecss}`}
      />
      <p className="text-base font-medium text-text-secondary mt-2">{subtitle}</p>
      <h2 className={` font-semibold text-text-secondary  ${titlecss ? titlecss : "  text-2xl  md:text-3xl lg:text-4xl xl:text-5xl "}`}>{title}</h2>
      {isDescription && (
        <p className="text-base font-medium text-text-secondary line-clamp-3">
          {description}
        </p>
      )}
      {isButton && (
        <button
          className="bg-white mt-3 border px-8 py-2 w-fit border-primary text-primary hover:text-white hover:bg-primary text-base "
        >
          See Blog
        </button>
      )}
    </Link>
  );
}

export default BloghighlightCard;
