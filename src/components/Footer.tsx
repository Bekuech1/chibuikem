"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full h-fit flex flex-col px-6 py-5 justify-center items-center gap-[56px] bg-[#3F1BCF]" id="contact">
      <div className="w-full h-fit grid text-left gap-1">
        <h4 className="berlin-sans md:text-[64px] text-[40px] font-normal leading-none text-white uppercase">
          say hello
        </h4>
        <p className="geist md:text-[24px] text-[20px] font-normal leading-none text-white">
          <span>~ </span>chibuikemigboanugo.1@gmail.com
        </p>
      </div>
      <section className="w-full h-[80px] bg-[#040404] flex items-center gap-[29px] md:pl-16 pl-6">
        <a href="http://">
          <div className="flex size-fit items-center gap-2">
            <p className="berlin-sans text-[16px] font-normal leading-tight text-white uppercase">
              github
            </p>
            <img src="/arrow-white.svg" alt="" className="size-[18px]" />
          </div>
        </a>
        <a href="http://">
          <div className="flex size-fit items-center gap-2">
            <p className="berlin-sans text-[16px] font-normal leading-tight text-white uppercase">
              Linkedin
            </p>
            <img src="/arrow-white.svg" alt="" className="size-[18px]" />
          </div>
        </a>
      </section>
    </footer>
  );
};

export default Footer;