"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";
import { ChevronDown } from "lucide-react";
import CatalogueModal from "./CatalogueModal";

function SideBar({ children }: { children: React.ReactNode }) {
  const url = usePathname();
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);
  
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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-fit relative flex lg:hidden">{children}</button>
      </SheetTrigger>

      <SheetContent side="right" className="max-w-[600px] z-50 bg-white">
        <SheetHeader className="flex items-start justify-start ">
          <Image
            src={"/Logo.png"}
            alt="logistics logo"
            height={400}
            width={1000}
            className="w-[150px] relative object-contain "
          />
        </SheetHeader>
        <ul className="w-full relative h-auto flex flex-col gap-2 pt-5 pb-10">
          <Link
            href="/"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/" ? "text-primary" : "text-text-secondary"
            }`}
          >
            Home
          </Link>
          
          <Link
            href="/about"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/about" ? "text-primary" : "text-text-secondary"
            }`}
          >
            About
          </Link>

          {/* Products Dropdown - ADD <div> wrapper here */}
          <div className="relative w-full">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className={`w-full relative h-auto flex items-center justify-between py-3 px-5 border-t border-b border-hover-section ${
                url.startsWith("/products") ? "text-primary" : "text-text-secondary"
              }`}
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isProductsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <div
              className={`w-full bg-gray-50 border-l-2 border-primary overflow-hidden transition-all duration-300 ${
                isProductsOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {productItems.map((item, i) => (
                <Link
                  key={i}
                  href={`/products/${item.slug}`}
                  className="block px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary border-b border-gray-200 last:border-b-0"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* <Link
            href="/technologies"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/technologies" ? "text-primary" : "text-text-secondary"
            }`}
          >
            Technologies
          </Link> */}
           <div className="relative w-full">
            <button
              onClick={() => setIsCatalogueOpen(true)}
              className={`w-full relative h-auto flex items-center justify-between py-3 px-5 border-t border-b border-hover-section ${
                url.startsWith("/products") ? "text-primary" : "text-text-secondary"
              }`}
            >
              <span>Download Catalouge</span>
             
            </button>

          
          </div>

          <Link
            href="/contact"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/contact" ? "text-primary" : "text-text-secondary"
            }`}
          >
            Contact
          </Link>
        </ul>
      </SheetContent>
      <CatalogueModal isOpen={isCatalogueOpen} onClose={() => setIsCatalogueOpen(false)} />
    </Sheet>
  );
}

export default SideBar;