import Link from "next/link";
import React from "react";
const NotFound = () => {
  return (
    <>
      <section
        className="w-full relative bg-hover-section logistics-container h-[600px]  bg-cover bg-center flex flex-col items-center justify-center gap-2 "
        style={{ backgroundImage: "url('/404page.png')" }}
      >
        <h2 className="text-7xl text-primary font-semibold ">Oops !</h2>
        <p className="text-base font-medium text-text-primary text-center mt-5">
          Oops! It looks like you&apos;ve taken a wrong turn. Don&apos;t worry,
          <br /> we&apos;ll help you find your way back to the right page. Let&apos;s get
          you back on track
        </p>

        <Link
          href={"/"}
          className="w-fit mt-10 relative h-auto px-5 cursor-pointer  py-2 bg-primary text-base text-white"
        >
          Back To Home
        </Link>
      </section>
    </>
  );
};

export default NotFound;
