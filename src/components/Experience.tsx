import React from "react";

const Experience: React.FC = () => {
  return (
    <div className="grid md:gap-10 gap-6 mx-auto w-full max-w-[600px] px-6" id="experience">
      <h1 className="berlin-sans uppercase font-bold md:text-[40px] text-[20px] leading-[100%] text-center">
        Experience
      </h1>
      <div className="flex w-full justify-between items-center md:gap-20 gap-6">
        <div className="grid gap-6 w-full">
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-[#B2B2B2] w-fit">
            March, 2025 - Present
          </p>
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-[#B2B2B2] w-fit">
            August, 2024 - June, 2025
          </p>
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-[#B2B2B2] w-fit">
            December, 2023 - Present
          </p>
        </div>
        <div className="grid gap-6 w-full">
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-white w-fit text-right">
            Frontend Developer at Meetro
          </p>
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-white w-fit text-right">
            Frontend Developer at Rivala
          </p>
          <p className="geist font-normal sm:text-[16px] text-[12px] leading-[100%] text-white w-fit text-right">
            Freelance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
