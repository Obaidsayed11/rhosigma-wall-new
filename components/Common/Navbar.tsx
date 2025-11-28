"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { ChevronDown, Download } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const productItems = [
    { title: "Rhosigma Actuators", category: "rhosigma-valve" },
    { title: "Electric Actuator", category: "electric-actuator" }, // if exists
    { title: "Rhosigma Valve", category: "rhosigma-valve" },
    { title: "Motorized Valve", category: "motorized-valve" },
    { title: "Solenoid Valve", category: "solenoid-valve" },
    { title: "Position Indicators", category: "position-indicators" },
    { title: "Valve Positioner", category: "valve-positioner" },
    { title: "Valve Accessories", category: "valve-accessories" },
    { title: "NAMUR Solenoid Valve", category: "namur-solenoid-valve" },
  ];

  return (
    <nav
      className={`w-full sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      {/* Top Bar */}
      <div className="w-full bg-gradient-accent h-12 flex items-center">
        <div className="logistics-container py-2.5 px-4 flex items-center justify-center">
          <div className="flex items-center gap-3 sm:gap-6 md:gap-10 ">
            {/* Phone */}
            <Link
              className="group flex items-center gap-2 text-text-secondary hover:text-white/80 transition-all font-normal "
              href="tel:918655587403"
            >
              <Image
                height={16}
                width={16}
                alt="Phone"
                src="/phone.svg"
                className="xl:h-5 xl:w-5 sm:h-5 sm:w-5 flex-shrink-0"
              />
              <span className="text-white text-lg sm:text-sm md:text-base lg:text-lg xl:text-lg">
                <span className="hidden sm:inline">+91 </span>8655587403
              </span>
            </Link>

            {/* Divider */}
            <span className="text-white/50 text-sm sm:text-base">|</span>

            {/* Email */}
            <Link
              className="group flex items-center gap-2 text-text-secondary hover:text-white/80 transition-all font-normal "
              href="mailto:sales@rhosigma.in"
            >
              <Image
                height={16}
                width={16}
                alt="mail"
                src="/mail.svg"
                className="xl:h-5 xl:w-5 sm:h-5 sm:w-5 flex-shrink-0 "
              />
              <span className="text-white  sm:text-sm md:text-base lg:text-lg xl:text-lg truncate max-w-[150px] sm:max-w-none text-sm">
                sales@rhosigma.in
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
  <div className="logistics-container">
        <div className="flex items-center justify-between h-20 lg:h-20 xl:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/rhosigma-logo.svg"
              alt="Rhosigma Logo"
              height={900}
              width={1000}
              className="w-[140px] sm:w-[160px] lg:w-[170px] xl:w-[190px] transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 min-[1350px]:gap-1 xl:ml-40 lg:ml-40">
            <Link
              href="/"
              className={`relative inline-block px-3 min-[1350px]:px-5 xl:px-6 py-2 text-[16px] min-[1350px]:text-[18px] font-medium transition-all group ${
                path === "/"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              <span className="relative">
                Home
                <span
                  className={`absolute bottom-[-10] left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                    path === "/"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </Link>

            <Link
              href="/about"
              className={`relative inline-block px-3 min-[1350px]:px-5 xl:px-6 py-2 text-[16px] min-[1350px]:text-[18px] font-medium transition-all group lg:truncate lg:line-clamp-2 ${
                path === "/about"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              <span className="relative">
                About Us
                <span
                  className={`absolute  bottom-[-10] left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                    path === "/about"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </Link>

            {/* Products Dropdown */}
            {/* <div className="relative group inline-block">
              <button
                className={`flex items-center gap-1.5 px-5 xl:px-6 py-2 text-[18px] font-medium transition-all ${
                  path.startsWith("/products")
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                <span className="relative">
                  Products
                  <span
                    className={`absolute bottom-[-9] left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                      path.startsWith("/products")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

          
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                <div className="py-2">
                  {productItems.map((item, i) => (
                    <Link
                      key={i}
                      href={`/products/${item.category}`}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors border-l-3 border-transparent hover:border-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div> */}

              <Link
              href="/products"
              className={`relative inline-block px-3 min-[1350px]:px-5 xl:px-6 py-2 text-[16px] min-[1350px]:text-[18px] font-medium transition-all group ${
                path === "/products"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              <span className="relative">
               Products
                <span
                  className={`absolute  bottom-[-10] left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                    path === "/products"
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </span>
            </Link>

            {/* <Link
              href="/technology"
              className={`relative px-5 xl:px-6 py-2 text-[18px] font-medium transition-all group ${
                path === "/technology"
                  ? "text-primary"
                  : "text-gray-700 hover:text-primary"
              }`}
            >
              Technology
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform origin-left ${
                  path === "/technology" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link> */}
          </ul>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            {/* Catalogue Button */}
            <button
              onClick={() => setIsCatalogueOpen(true)}
              className="hidden lg:flex bg-transparent w-fit px-2 py-1 md:px-3 min-[1350px]:px-5 md:py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors text-xs min-[1350px]:text-sm md:text-base font-medium items-center gap-1 min-[1350px]:gap-2 lg:truncate lg:line-clamp-2"
            >
              <Download className="w-4 h-4" />
              <span className="hidden min-[1150px]:inline ">Download Catalogue</span>
            </button>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden lg:flex hover:bg-transparent w-fit px-2 py-1 md:px-3 min-[1350px]:px-5 md:py-3 border border-primary hover:text-primary bg-primary text-white transition-colors text-xs min-[1350px]:text-sm md:text-base font-medium items-center gap-1 min-[1350px]:gap-2"
            >
              <span className="hidden min-[1150px]:inline lg:truncate lg:line-clamp-2">Contact Us</span>
              <span className="min-[1150px]:hidden " >Contact</span>
            </Link>

            {/* Mobile Menu */}
            <SideBar>
              <button className="flex lg:hidden p-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-all">
                <RxHamburgerMenu className="text-2xl" />
              </button>
            </SideBar>
          </div>
        </div>
      </div>

      <CatalogueModal
        isOpen={isCatalogueOpen}
        onClose={() => setIsCatalogueOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
