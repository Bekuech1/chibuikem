"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const Footer: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied">("idle");

  const socialLinks = [
    { label: "github", url: "https://github.com/Bekuech1" },
    {
      label: "linkedin",
      url: "https://www.linkedin.com/in/chibuikem-igboanugo-967485336",
    },
  ];

  const underlineVariants = {
    initial: { scaleX: 0, backgroundColor: "white" },
    hover: { scaleX: 1, backgroundColor: "white" },
  };

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Copy email to clipboard
  const copyEmail = () => {
    navigator.clipboard.writeText("chibuikemigboanugo.1@gmail.com");
    setCopyStatus("copied");

    setTimeout(() => {
      setCopyStatus("idle");
    }, 1000); // Reset after 1s
  };

  return (
    <>
      {/* Custom Cursor with Framer Motion */}
      <AnimatePresence>
        {isHoveringEmail && (
          <motion.div
            className="fixed pointer-events-none z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: copyStatus === "copied" ? 1.2 : 1,
              x: cursorPosition.x - 50,
              y: cursorPosition.y - 25,
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5,
              duration: copyStatus === "copied" ? 0.5 : 0.2,
            }}
          >
            <motion.div
              className="bg-black/60 text-white size-20 rounded-full flex items-center justify-center text-center border border-gray-200"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="geist text-sm">
                {copyStatus === "copied" ? "Done!" : "Click to copy"}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer
        className="w-full h-fit flex flex-col px-6 py-5 justify-center items-center gap-[56px] bg-[#3F1BCF] transition-all duration-[3600ms] ease-[cubic-bezier(0.23,1,0.32,1)]"
        id="contact"
      >
        <div className="w-full h-fit grid text-left gap-2 transition-all duration-700 ease-out">
          <motion.h4 className="berlin-sans md:text-[64px] text-[40px] font-normal leading-none text-white uppercase" whileHover="hover">
            say hello
          </motion.h4>
          <motion.div
            className="h-[0.1px] rounded-full mt-1 origin-left"
            variants={underlineVariants}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
          <motion.p
            className="geist md:text-[24px] text-[20px] font-normal leading-none text-white cursor-none"
            onMouseEnter={() => setIsHoveringEmail(true)}
            onMouseLeave={() => setIsHoveringEmail(false)}
            onClick={copyEmail}
          >
            <span>~ </span>chibuikemigboanugo.1@gmail.com
          </motion.p>
        </div>

        <section className="w-full h-[80px] bg-[#040404] flex items-center gap-[29px] md:pl-16 pl-6">
          {socialLinks.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              initial="initial"
              className="group inline-block"
            >
              <div className="flex size-fit items-center gap-2">
                <p className="geist text-[16px] font-normal leading-tight text-white uppercase">
                  {item.label}
                </p>
                <Image
                  src="/arrow-white.svg"
                  alt={`${item.label} arrow`}
                  className="size-[18px]"
                  width={18}
                  height={18}
                />
              </div>

              <motion.div
                className="h-[0.1px] rounded-full mt-1 origin-left"
                variants={underlineVariants}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
            </motion.a>
          ))}
        </section>
      </footer>
    </>
  );
};

export default Footer;
