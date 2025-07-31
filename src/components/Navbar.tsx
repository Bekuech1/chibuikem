"use client";

import React, { PropsWithChildren, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, Variants } from "framer-motion";

type NavbarProps = PropsWithChildren<{
  showButton?: boolean;
}>;

const Navbar: React.FC<NavbarProps> = () => {
  const [dropDownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropDownOpen);
  };

  // Animation variants
  const navbarVariants: Variants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dropdownVariants: Variants = {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const menuItemVariants: Variants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants: Variants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  };

  const linkVariants: Variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      <motion.nav 
        className="w-full flex justify-between items-center h-fit top-0 right-0 fixed md:px-20 px-6 py-4 md:py-2 bg-[#040404] z-50"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="geist capitalize font-bold text-[18px] leading-[100%] w-full xl:text-[24px] text-white"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          chibuikem igboanugo
        </motion.h1>
        
        <div className="w-full md:flex hidden justify-center">
          <motion.div 
            className="border border-[#373737] py-3 px-6 rounded-full size-fit"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <ul className="flex gap-6 md:gap-3">
              {["Projects", "Experience", "About", "Contact"].map((item, index) => (
                <motion.li key={item} variants={linkVariants} whileHover="hover">
                  <Link
                    href={`#${item.toLowerCase() === "experience" ? "experience" : item.toLowerCase() === "contact" ? "contact" : item.toLowerCase() === "projects" ? "projects" : item.toLowerCase()}`}
                    className="geist text-[16px] leading-[100%] text-white hover:text-white/70 transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="w-full flex justify-end">
          <motion.button 
            className="geist bg-white hover:bg-white/50 py-3 px-6 rounded-full text-[16px] font-bold leading-[100%] text-[#050505] md:block hidden transition-colors cursor-pointer"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Resume
          </motion.button>
          
          <motion.button 
            onClick={toggleDropdown} 
            className="md:hidden block"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.img
              src={dropDownOpen ? "/close-nav.svg" : "/navbtn.svg"}
              alt="Menu"
              animate={{ rotate: dropDownOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {dropDownOpen && (
          <motion.div
            className="fixed md:hidden block right-6 top-[70px] w-full max-w-[calc(100%-48px)] mx-auto bg-[#000000]/85 border border-[#373737] backdrop-blur-[16px] h-[500px] rounded-2xl shadow-lg z-40 "
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="flex flex-col h-full justify-between p-4">
              <ul className="flex flex-col">
                {["Projects", "Experience", "About", "Contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    className="pb-6"
                    custom={index}
                    variants={menuItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ x: 10 }}
                  >
                    <Link
                      href={`#${item.toLowerCase() === "experience" ? "experience" : item.toLowerCase() === "contact" ? "contact" : item.toLowerCase() === "projects" ? "projects" : item.toLowerCase()}`}
                      className="geist text-[16px] leading-[100%] text-white hover:text-white/50 transition-colors block font-normal"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <motion.button 
                className="geist bg-white hover:bg-white/50 py-3 px-6 rounded-full text-[16px] font-bold leading-[100%] text-[#050505] transition-colors mx-auto"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Resume
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;