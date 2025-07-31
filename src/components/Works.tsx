"use client";

import React from "react";
import { motion } from "framer-motion";

const Works = () => {
  const selectedWorks = [
    {
      name: "Meetro",
      techStacks: [
        { name: "React" },
        { name: "Tailwind" },
        { name: "Axios" },
        { name: "Zustand" },
        { name: "Framer Motion" },
      ],
      liveLink: "https://Meetro.vercel.app",
      githubLink:
        "https://github.com/Victorthedev/Music-For-You-Frontend-Spotify",
      previewImage: "/meetro.png",
      year: "2025",
    },
    {
      name: "Chibuikem I.",
      techStacks: [
        { name: "Next" },
        { name: "Tailwind" },
        { name: "Framer Motion" },
      ],
      liveLink: "https://blog-platform.com",
      githubLink: "https://github.com/your-username/blog-platform",
      previewImage: "/bekuechi.png",
      year: "2025",
    },
    {
      name: "Groovz",
      techStacks: [
        { name: "React" },
        { name: "Tailwind" },
        { name: "Axios" },
        { name: "Zustand" },
      ],
      liveLink: "https://Groovz.app.vercel",
      githubLink:
        "https://github.com/Victorthedev/Music-For-You-Frontend-Spotify",
      previewImage: "/groovz.png",
      year: "2024",
    },
    {
      name: "Bandage",
      techStacks: [{ name: "React" }, { name: "CSS" }, { name: "Redux" }],
      liveLink: "https://bandage-8ou6.vercel.app",
      githubLink: "https://github.com/Bekuech1/bandage",
      previewImage: "/bandage.png",
      year: "2024",
    },
    {
      name: "Nesky",
      techStacks: [{ name: "React" }, { name: "Tailwind" }],
      liveLink: "https://nesky.vercel.app",
      githubLink: "https://github.com/Bekuech1/Nesky",
      previewImage: "/nesky.png",
      year: "2024",
    },
    {
      name: "Bookworm",
      techStacks: [
        { name: "React" },
        { name: "CSS" },
        { name: "Axios" },
        { name: "Redux" },
      ],
      liveLink: "https://game-fe-6-fyqb.vercel.app",
      githubLink: "https://github.com/GenesysLearnable/BOOKS-FE_4",
      previewImage: "/bookworm.png",
      year: "2024",
    },
  ];

  return (
    <div className="w-full gap-5 grid" id="projects">
      <h2 className="berlin-sans uppercase font-bold md:text-[40px] text-[20px] leading-[100%]">
        Featured Projects
      </h2>
      {selectedWorks.map((work, index) => (
        <div
          key={index}
          className="flex md:flex-row flex-row-reverse lg:gap-16 gap-4 items-start p-6 w-full h-fit border-t border-[#403D49]"
        >
          <h5 className="geist font-normal text-[16px] leading-[100%] sm:block hidden">
            {work.year}
          </h5>
          <div className="grid w-full h-fit gap-4">
            <section className="grid size-fit gap-2">
              <h6 className="geist font-bold md:text-[20px] text-[18px] leading-[100%]">
                {work.name}
              </h6>
              <div className="flex flex-wrap md:gap-4 gap-1 mt-2">
                {work.techStacks.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="size-fit rounded-full border-[2px] md:py-[6px] md:px-3 p-2 border-[#403D49]"
                  >
                    <p className="geist font-normal text-[14px] leading-[100%] text-white">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </section>
            <img
              src={work.previewImage}
              alt={`${work.name} Preview`}
              className="md:h-[312px] md:w-[587px] h-[150px] w-[260px] rounded-xl"
            />
            <div className="flex gap-4 mt-2">
              <motion.a
                href={work.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <div className="flex size-fit items-center gap-2 bg-white hover:bg-white/50 py-[6px] px-3 rounded-full">
                  <p className="geist md:text-[16px] text-sm font-semibold leading-tight text-black">
                    Github
                  </p>
                  <img src="/links.svg" alt="" className="size-[10px]" />
                </div>
              </motion.a>
              <motion.a
                href={work.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
              >
                <div className="flex size-fit items-center gap-2 bg-white hover:bg-white/50 py-[6px] px-3 rounded-full cursor-pointer">
                  <p className="geist md:text-[16px] text-sm font-semibold leading-tight text-black">
                    Link
                  </p>
                  <img src="/links.svg" alt="" className="size-[10px]" />
                </div>
              </motion.a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Works;
