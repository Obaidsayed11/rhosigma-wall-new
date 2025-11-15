"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
function Navbar() {
  const path = usePathname();
  return (
    <nav className="w-full sticky top-0 z-50  h-fit bg-background  border-t border-b  border-gray-300  ">
      <section className="w-full relative h-auto flex items-center justify-between gap-1 logistics-container">
        <Link href={"/"}>
          <Image
            src={"/rhosigma-logo.svg"}
            alt="lanjekar Logo"
            height={900}
            width={1000}
            className="Logo of Logistics max-w-[160px] lg:max-w-[150px] xl:max-w-[180px]  "
          />
        </Link>
        <ul className="w-fit relative h-auto hidden lg:flex items-center justify-center    ">
          <Link
            href={"/"}
            className={` text-base  border-l px-5 py-3 xl:px-8 xl:py-5 c border-gray-300  cursor-pointer  ${
              path == "/"
                ? " text-primary  font-semibold"
                : " text-text-secondary font-medium"
            } `}
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className={`  text-base  border-l px-5 py-3 xl:px-8 xl:py-5 c border-gray-300  cursor-pointer  ${
              path == "/about"
                ? " text-primary  font-semibold"
                : " text-text-secondary font-medium"
            } `}
          >
            About us
          </Link>
          <Link
            href={"/services"}
            className={`  text-base  border-l px-5 py-3 xl:px-8 xl:py-5 c border-gray-300  cursor-pointer  ${
              path == "/services"
                ? " text-primary  font-semibold"
                : " text-text-secondary font-medium"
            } `}
          >
            Services
          </Link>

          <Link
            href={"/technology"}
            className={`  text-base  border-l border-r px-5 py-3 xl:px-8 xl:py-5 c border-gray-300  cursor-pointer  ${
              path == "/technology"
                ? " text-primary  font-semibold"
                : " text-text-secondary font-medium"
            } `}
          >
            Products
          </Link>
        </ul>

        <section className=" relative flex items-center justify-center">
          <Link
            href={"/contact"}
            className="border-r border-l px-2  py-1 xl:px-4  hidden md:flex  xl:py-2  border-gray-300  cursor-pointer"
          >
            {/* <Button
              css={
                "font-medium text-base  border   border-text-secondary hover:bg-primary hover:text-white hover:border-hover-section  text-text-primary bg-transparent  px-4 py-2  cursor-pointer  text-text-secondary  "
              }
              text={"Contact us"}
              isIcons={false}
            /> */}
            <button className="font-medium text-base  border   border-text-secondary hover:bg-primary hover:text-white hover:border-hover-section  text-text-primary bg-transparent  px-4 py-2  cursor-pointer    ">
              Contact us{" "}
            </button>
          </Link>
          <SideBar>
            <span className="border-r border-l px-6 py-4  flex lg:hidden   border-gray-300  cursor-pointer">
              <RxHamburgerMenu className="text-[20px] " />
            </span>
          </SideBar>
        </section>
      </section>
    </nav>
  );
}

export default Navbar;
