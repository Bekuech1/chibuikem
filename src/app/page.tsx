"use client";

import React, { useState, useEffect } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Works from "../components/Works";
import Footer from "../components/Footer";

export default function Home() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Prevent scroll when dropdown is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isDropdownOpen]);

  return (
    <div className="flex flex-col">
      <main className="h-screen flex justify-center relative overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src="/bg.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        {/* <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] bg-[#3F1BCF52] blur-[80px]"></div>
        <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] border border-[#3F1BCF52]"></div> */}
        <div 
          className={`flex flex-col items-start z-10 w-full gap-10 relative scrollbar-hide scroll-smooth bg-[#040404]/50 ${
            isDropdownOpen ? 'overflow-hidden' : 'overflow-y-auto'
          }`}
        >
          <Navbar 
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
          <div className="w-full grid gap-10 px-6 sm:px-20">
            <Hero />
            <Works />
          </div>
          <Experience />
          <About />
          <Footer />
        </div>
      </main>
    </div>
  );
}