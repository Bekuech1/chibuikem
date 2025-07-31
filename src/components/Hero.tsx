import React from "react";

const Hero = () => {
  return (
    <section className="w-full lg:flex grid lg:gap-[30%] gap-8 items-center lg:py-14 md:mt-15 mt-20">
      <div className="">
        <h1 className="berlin-sans uppercase font-bold md:text-[60px] text-[36px] leading-[80%]">
          frontend
        </h1>
        <h1 className="pl-12 berlin-sans uppercase font-bold md:text-[60px] text-[36px] leading-[80%]">
          developer
        </h1>
      </div>
      <div className="max-w-[352px] h-fit grid gap-8">
        <p className="geist text-[14px] font-normal leading-tight text-white">
          Hi, I’m Chibuikem Igboanugo, a passionate frontend developer with over
          five years of experience in creating dynamic and user-friendly web
          applications. I specialize in HTML, CSS, and JavaScript, and I love
          turning complex problems into simple, beautiful solutions. When I’m
          not coding, you can find me exploring the latest web technologies or
          contributing to open-source projects.
        </p>
        <div className="flex gap-4 size-fit">
          <a href="http://">
            <div className="flex size-fit items-center gap-2">
              <p className="geist text-[16px] font-normal leading-tight text-gray-400">Github</p>
              <img src="/arrow-up-right.svg" alt="" className="size-[18px]"/>
            </div>
          </a>
          <a href="http://">
            <div className="flex size-fit items-center gap-2">
              <p className="geist text-[16px] font-normal leading-tight text-gray-400">Linkedin</p>
              <img src="/arrow-up-right.svg" alt="" className="size-[18px]"/>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
