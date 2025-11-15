"use client";
import React, {  useEffect } from "react";
import BlogpageBanner from "@/components/blogs/Blogpagebanner";
import Bloghighlight from "@/components/blogs/Bloghighlight";
import BestOfContent from "@/components/blogs/BestOfContent";
import Newletter from "@/components/Common/Newletter";
import axios from "axios";
import { useState } from "react";
import { NEXT_PUBLIC_API_URL } from "@/config";
import { Blog } from "@/types/Interface";
function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  async function fetchBLogs() {
    try {
      const response = await axios.get(`${NEXT_PUBLIC_API_URL}/blogs`);
      setBlogs(response.data.blogs);
      console.log(response.data)
    } catch (error) {
      console.log(error, "error message");
    }
  }
  useEffect(() => {
    fetchBLogs();
  }, []);

  return (
    <>
      <BlogpageBanner
        firstchunktitle={"They call us the"}
        maintitle={"people"}
        lastchunktitle="behind shipments"
      />
      <Bloghighlight blogs={blogs} />
      <BestOfContent blogs={blogs}/>
      <Newletter
        title={"Sign up for our newsletter"}
        description={
          "By clicking Sign Up you're confirming that you agree with our Terms and Conditions."
        }
      />
    </>
  );
}

export default BlogPage;
