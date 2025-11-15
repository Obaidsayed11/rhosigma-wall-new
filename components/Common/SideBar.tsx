"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
} from "@/components/ui/sheet";

function SideBar({ children }: { children: React.ReactNode }) {
  const url = usePathname();
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
          <Link
            href="/services"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/services" ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            Services
          </Link>
          <Link
            href="/techology"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/techology" ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            Technologies
          </Link>

          <Link
            href="/contact"
            className={`w-full relative h-auto flex items-start py-3 px-5 border-t border-b border-hover-section ${
              url == "/techology" ? "text-text-primary" : "text-text-secondary"
            }`}
          >
            Contact
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
