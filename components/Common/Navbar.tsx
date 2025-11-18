"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
function Navbar() {
  const path = usePathname();

  const productItems = [
    { title: "Rhosigma Acutators", url: "/rhosigma-acutators" },
    { title: "Electric Acutator", url: "/electric-acutator" },
    { title: "Rhosigma Valve", url: "/rhosigma-valve" },
    { title: "Motorized Valve", url: "/motorized-valve" },
    { title: "Solenoid Valve", url: "/solenoid-valve" },
    { title: "Position Indicators", url: "/position-indicators" },
    { title: "Valve Positioner", url: "/valve-positioner" },
    { title: "Valve Accessories", url: "/valve-accessories" },
    { title: "Namur Solenoid Valve", url: "/namur-solenoid-valve" },
  ];

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
          {/* <Link
            href={"/services"}
            className={`  text-base  border-l px-5 py-3 xl:px-8 xl:py-5 c border-gray-300  cursor-pointer  ${
              path == "/services"
                ? " text-primary  font-semibold"
                : " text-text-secondary font-medium"
            } `}
          >
            Services
          </Link> */}

          <div className="relative group">
            <Link
              href={"/products"}
              className={`
      text-base border-l border-r px-5 py-3 xl:px-8 xl:py-5 border-gray-300 cursor-pointer
      ${
        path == "/products"
          ? "text-primary font-semibold"
          : "text-text-secondary font-medium"
      }
    `}
            >
              Products
            </Link>

            {/* Dropdown */}
            <div
              className="
      absolute top-10 left-0 w-56 bg-white shadow-lg border border-gray-300 rounded-md
      opacity-0 invisible group-hover:opacity-100 group-hover:visible
      transition-all duration-300 z-50
    "
            >
              {productItems.map((item, i) => (
  <Link
    key={i}
    href={`/products?item=${item.url.replace("/", "")}`}
    className="
      block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black
    "
  >
    {item.title}
  </Link>
))}

            </div>
          </div>
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
