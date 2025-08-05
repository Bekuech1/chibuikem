import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const underlineVariants = {
    initial: { scaleX: 0 },
    hover: { scaleX: 1 },
  };

  return (
    <section className="w-full lg:flex grid lg:gap-[30%] gap-8 items-center lg:py-14 md:mt-15 mt-20">
      <div className="">
        <h1 className="berlin-sans uppercase font-bold md:text-[60px] text-[36px] leading-[130%]">
          frontend
        </h1>
        <h1 className="pl-12 berlin-sans uppercase font-bold md:text-[60px] text-[36px] leading-[130%]">
          developer
        </h1>
      </div>
      <div className="max-w-[352px] h-fit grid gap-8">
        <p className="geist text-[14px] font-normal leading-tight text-white">
          Hi, I'm Chibuikem Igboanugo — a dedicated frontend developer with 2
          years of hands-on experience building responsive, user-centric web
          applications. I’m passionate about crafting clean, efficient
          interfaces that elevate the user experience. I'm always eager to
          learn, explore emerging web technologies, and bring creative ideas to
          life. Outside of work, you'll often find me diving into open-source
          projects or experimenting with new tools to sharpen my skills.
        </p>
        <div className="flex gap-4 size-fit">
          <motion.a
            href="https://github.com/Bekuech1"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
            className="block"
          >
            <div className="flex size-fit items-center gap-2">
              <p className="geist text-[16px] font-normal leading-tight text-white uppercase">
                Github
              </p>
              <img src="/arrow-white.svg" alt="" className="size-[18px]" />
            </div>
            <motion.div
              className="h-[1px] bg-white rounded-full mt-1 origin-left"
              variants={underlineVariants}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/chibuikem-igboanugo-967485336"
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
            className="block"
          >
            <div className="flex size-fit items-center gap-2">
              <p className="geist text-[16px] font-normal leading-tight text-white uppercase">
                Linkedin
              </p>
              <img src="/arrow-white.svg" alt="" className="size-[18px]" />
            </div>
            <motion.div
              className="h-[0.1px] bg-white rounded-full mt-1 origin-left"
              variants={underlineVariants}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
