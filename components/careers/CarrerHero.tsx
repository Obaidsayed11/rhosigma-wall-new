
"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

function CarrerHero() {
  return (
 <section className="w-full relative flex items-center justify-center overflow-hidden h-[60vh] sm:h-[70vh]">
  {/* Background */}
  <div className="absolute inset-0 w-full h-full">
    <Image
      src="/courousal-2.jpg"
      alt="About Rhosigma"
      fill
      priority
      className="object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b 
      from-black/80 via-black/60 to-black/80"></div>

    {/* Pattern Overlay */}
    <div className="absolute inset-0 bg-[url('/courousal-3.jpg')] 
      bg-cover opacity-10 mix-blend-overlay"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 logistics-container py-24 md:py-32 text-center">
    {/* Breadcrumbs */}
    <nav className="flex items-center justify-center gap-2 mb-6 text-sm md:text-base">
      <Link href="/" className="text-white hover:text-gray-300 transition font-medium">
        Home
      </Link>
      <ChevronRight className="w-4 h-4 text-gray-300" />
      <span className="text-white font-semibold">Careers</span>
    </nav>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
    >
      They call us the{" "}
      <span className="text-primary">people</span>
      <br /> behind Valves
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
    >
      Discover the passion, expertise, and innovation that drives Rhosigma to
      deliver world-class valve automation solutions.
    </motion.p>

    {/* Soft Glow Decorations */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="hidden md:block absolute top-20 left-10 w-24 h-24 bg-primary/30 rounded-full blur-3xl"
    />
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="hidden md:block absolute bottom-16 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"
    />
  </div>
</section>

  );
}

export default CarrerHero;