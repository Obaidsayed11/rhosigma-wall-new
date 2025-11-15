"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";

import BlogContactForm from "../Common/BlogContactForm";
import { notFound, useParams } from "next/navigation";
import axios from "axios";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { Blog, BlogPost } from "@/types/Interface";
import Link from "next/link";
function BlogL2page() {
  const { slug } = useParams();
  const [blog, setBlog] = useState<BlogPost>();
  const [relatedBlog, setRelatedBlog] = useState<Blog[]>([]);
  const [doc,setDoc]=useState<Document | null>(null)
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [tableOFContent, setTableOfContent] = useState<
    { title: string; id: string }[]
  >([]);
  async function fetchBlog() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/blogs/${slug}`);
      console.log(response.data.blog);
      setRelatedBlog(response.data.relatedBlogs);
      setBlog(response.data.blog);

      const tempHeadings: { title: string; id: string }[] = [];
      const parser = new DOMParser();
      const doc = parser.parseFromString(
        response.data.blog.content,
        "text/html"
      );

      doc.querySelectorAll("h2").forEach((heading, index) => {
        const id = `heading-${slug}-${index}`;
        heading.id = id;
        if (heading instanceof HTMLElement) {
          heading.style.color = "black";
          heading.style.fontWeight = "500";
          tempHeadings.push({ title: heading.textContent || "", id });
        }
        setDoc(doc)
      });

      setTableOfContent(tempHeadings);
    } catch (error) {
      console.log(error, "error messeges");
      notFound()
    }
  }

  useEffect(() => {
    fetchBlog();
  }, []);

   useEffect(() => {
    const handleScroll = () => {
      // This runs on every scroll
      const sections = document.querySelectorAll("h2, h3");

      let currentSectionId = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSectionId = section.id;
        }
      });

      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };


  return (
    <section className="w-full relative h-auto flex flex-col py-10 gap-0 logistics-container">
      <section className="w-full relative h-auto grid grid-cols-1 lg:grid-cols-[.3fr_1fr] xl:grid-cols-[.5fr_2fr_1fr] gap-10">
        <div className="w-full relative lg:sticky lg:top-20 hidden md:flex  flex-col gap-3 h-fit " >
          <h2 className="text-2xl text-text-primary font-medium ">
            Table of Cotent
          </h2>

          <ul className="w-full relative h-auto flex flex-col gap-1.5">
            {tableOFContent.map((item, index) => (
              <li
                onClick={() => scrollToElement(item.id)}
                className={`text-base cursor-pointer  ${activeSection ? 'text-semibold text-text-primary underline':'font-medium text-text-secondary hover:underline'} `}
                key={index}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>

        <section className="w-full relative h-auto flex flex-col gap-6 ">
          <h1 className=" text-3xl xl:text-4xl 2xl:text-6xl font-medium text-text-primary">
            {blog?.title}
          </h1>

          <div className="flex items-center gap-4">
            <Image
              src={`/userProfileimage.jpg`}
              alt={`${blog?.slug}`}
              height={500}
              width={500}
              className="w-[60px] h-[60px]"
            />
            <span className="w-fit relative gap-x-4 gap-y-1 h-auto grid grid-cols-2">
              <h2 className="text-base  font-medium text-text-primary col-span-3">
                {blog?.author.name}
              </h2>
              <p className="text-sm font-normal text-text-secondary ">
                {new Date(`${blog?.createdAt}`).toUTCString().slice(1, 10)}
              </p>
              <p className="text-sm font-normal text-text-secondary ">
                {blog?.readTime}
              </p>
            </span>
          </div>

          <div className="flex flex-col gap-[20px] py-10 border-t-2 border-b-2 border-hover-section ">
            <h2 className="text-p30  text-primary leading-[1.2]  font-semibold">
              {blog?.title}
            </h2>
            {blog?.image && (
              <Image
                src={`${NEXT_PUBLIC_API_URL}${blog.image || ""}`}
                alt={`${blog.title} - Sovorun `}
                height={500}
                width={768}
                className="rounded-md w-full object-cover h-[300px] md:h-[350px]"
              />
            )}

            <div
              className="mt-2  text-primaryColor "
              id="editor-content"
              dangerouslySetInnerHTML={{ __html:  doc?.body.innerHTML || "" }}
            />

            {/* <section className="w-full relative h-auto flex items-center justify-between gap-2">
              <div className="w-full relative h-auto flex flex-col gap-1 ">
                <h2 className="text-lg font-medium text-text-primary">
                  Share this post
                </h2>
                <span className="flex items-center justify-start gap-2">
                  <RiLinkM className="text-[35px] font-medium text-text-primary p-2 bg-hover-section rounded-full" />
                  <FaLinkedin className="text-[35px] font-medium text-text-primary p-2 bg-hover-section rounded-full" />
                  <RiTwitterXLine className="text-[35px] font-medium text-text-primary p-2 bg-hover-section rounded-full" />
                  <BsFacebook className="text-[35px] font-medium text-text-primary p-2 bg-hover-section rounded-full" />
                </span>
              </div>
            </section> */}
          </div>
        </section>

        <section className="col-start-1 col-end-2  lg:col-start-1 lg:col-end-3 xl:col-start-3 xl:col-end-4 max-w-full  md:max-w-[400px] lg:w-full">
          <BlogContactForm />
        </section>
      </section>

      <section className="w-full relative mt-10 h-auto grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid items-start gap-3">
        {relatedBlog.map((item, index) => (
          <Link
            href={`/blogs/${item.slug}`}
            className="w-full relative group h-full flex flex-col gap-2 p-3 border border-hover-section"
            key={index}
          >
            <Image
              src={`${NEXT_PUBLIC_API_URL}${item.image}`}
              alt={item.title}
              height={300}
              width={300}
              className="w-full  h-[120px] sm:h-[160px] "
            />

            <h2 className=" text-lg sm:text-xl group-hover:underline font-medium text-text-primary ">{item.title}</h2>
            <p className=" text-text-secondary  group-hover:underline font-medium text-base line-clamp-2">{item.description}</p>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default BlogL2page;
