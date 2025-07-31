"use client";

import React from "react";

import About from "../components/About";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Works from "../components/Works";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div className="flex flex-col">
      <main className="h-screen bg-[#040404] flex justify-center relative">
        <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] bg-[#3F1BCF52] blur-[80px]"></div>
        <div className="absolute md:top-[100px] top-[200px] sm:size-[600px] size-[360px] rounded-[50%] border border-[#3F1BCF52]"></div>
        <div className="flex flex-col items-start z-10 w-full gap-10 relative overflow-y-auto scrollbar-hide scroll-smooth">
          <Navbar />
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
