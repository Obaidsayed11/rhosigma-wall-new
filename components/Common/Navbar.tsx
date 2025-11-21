"use client";
import React, { Children, useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideBar from "./SideBar";
import Catalogue from "./Catalougue";
import CatalogueModal from "./CatalogueModal";
function Navbar() {
  const path = usePathname();
  const [currentDateTime, setCurrentDateTime] = useState({
    date: "",
    time: "",
    day: "",
  });

  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      const date = now.toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setCurrentDateTime({
        date,
        time,
        day: dayNames[now.getDay()],
      });
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const productItems = [
    { title: "Rhosigma Actuators", slug: "rhosigma-actuators" },
    { title: "Electric Actuator", slug: "electric-actuator" },
    { title: "Rhosigma Valve", slug: "rhosigma-valve" },
    { title: "Motorized Valve", slug: "motorized-valve" },
    { title: "Solenoid Valve", slug: "solenoid-valve" },
    { title: "Position Indicators", slug: "position-indicators" },
    { title: "Valve Positioner", slug: "valve-positioner" },
    { title: "Valve Accessories", slug: "valve-accessories" },
    { title: "NAMUR Solenoid Valve", slug: "namur-solenoid-valve" },
  ];

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About us" },
    { href: "/services", label: "Services" },
    { href: "/technology", label: "Technology" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50  h-fit bg-background  border-t border-b  border-gray-300  ">
      <div className="w-full bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-gray-100">
        <div className="logistics-container py-2 px-4 flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-medium">{currentDateTime.day}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{currentDateTime.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-medium tabular-nums">
              {currentDateTime.time}
            </span>
          </div>
        </div>
      </div>
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

          <div className="relative group">
            <button
              className={`
          text-base border-l border-r px-5 py-3 xl:px-8 xl:py-5 border-gray-300 cursor-pointer
          ${
            path.startsWith("/products")
              ? "text-primary font-semibold"
              : "text-text-secondary font-medium"
          }
        `}
            >
              Products
            </button>

            {/* Dropdown */}
            <div
              className="
            absolute top-15 left-0 w-46 bg-white shadow-lg border border-gray-300 rounded-md
            opacity-0 invisible group-hover:opacity-100 group-hover:visible
            transition-all duration-300 z-50
          "
            >
              {productItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/products/${item.slug}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
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
            <section className=" relative flex items-center justify-center">
          <div className="border-r border-l px-2  py-1 xl:px-4  hidden md:flex  xl:py-2  border-gray-300  cursor-pointer">
            <button
              className="font-medium text-base  border   border-text-secondary hover:bg-primary hover:text-white hover:border-hover-section  text-text-primary bg-transparent  px-4 py-2  cursor-pointer    "
              onClick={() => setIsCatalogueOpen(true)}
            >
              <Catalogue />
            </button>
          </div>
        </section>

          <SideBar>
            <span className="border-r border-l px-6 py-4  flex lg:hidden   border-gray-300  cursor-pointer">
              <RxHamburgerMenu className="text-[20px] " />
            </span>
          </SideBar>
        </section>
      </section>
      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
