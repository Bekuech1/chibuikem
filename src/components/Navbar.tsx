"use client";

import React, { PropsWithChildren } from "react";
import Link from "next/link";

type NavbarProps = PropsWithChildren<{
  showButton?: boolean;
}>;

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="w-full flex justify-between items-center h-fit top-[17px] right-0 fixed md:px-20 px-6">
      <h1 className="geist capitalize font-bold text-[18px] leading-[100%] w-full xl:text-[24px] text-white">
        chibuikem igboanugo
      </h1>
      <div className="w-full md:flex hidden justify-center">
        <div className="border border-[#373737] py-3 px-6 rounded-full size-fit">
          <ul className="flex gap-6 md:gap-3">
            <li>
              <Link href="#works" className="geist text-[16px] leading-[100%]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#about" className="geist text-[16px] leading-[100%]">
                About
              </Link>
            </li>
            <li>
              <Link href="#skills" className="geist text-[16px] leading-[100%]">
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className="geist text-[16px] leading-[100%]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button className="geist bg-white hover:bg-white/50 py-3 px-6 rounded-full text-[16px] font-bold leading-[100%] text-[#050505] md:block hidden">
          Resume
        </button>
        <button>
          <img src="/navbtn.svg" className="md:hidden block"/>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
