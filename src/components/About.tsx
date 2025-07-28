import React, { useRef, useState, useCallback, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CardProps {
  containerRef: RefObject<HTMLDivElement | null>;
  src: string;
  top: string;
  left: string;
  className?: string;
  alt?: string;
}

// Custom hook for z-index management
const useZIndexManager = () => {
  const [zIndex, setZIndex] = useState(0);
  
  const bringToFront = useCallback(() => {
    const els = document.querySelectorAll(".drag-elements");
    let maxZIndex = -Infinity;
    
    els.forEach((el) => {
      const z = parseInt(
        window.getComputedStyle(el).getPropertyValue("z-index")
      );
      if (!isNaN(z) && z > maxZIndex) {
        maxZIndex = z;
      }
    });
    
    setZIndex(maxZIndex + 1);
  }, []);
  
  return { zIndex, bringToFront };
};

const About: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:min-h-[1100px] sm:min-h-[900px] min-h-[800px] w-full justify-center items-center overflow-hidden text-center">
      <h2 className="berlin-sans relative md:text-[36px] text-[24px] font-normal text-white leading-[100%] uppercase w-full">
        Beyond the screen
      </h2>
      <p className="geist relative md:text-[16px] text-[12px] font-normal text-white leading-[120%] max-w-xl mt-4 -z-10 px-8">
        Lies a world of endless possibilities, where imagination meets reality.
        It&apos;s a realm filled with vibrant colors, captivating stories, and
        experiences waiting to unfold. Dive in and explore the adventures that
        await! Each corner reveals new wonders, from enchanted forests to
        bustling cities. Meet characters that inspire and challenge you, each
        with their own tales to tell. Feel the thrill of discovery as you
        navigate through uncharted territories. With every click, a new chapter
        begins, inviting you to shape your own destiny.
      </p>
      <Cards />
    </section>
  );
};

const Cards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="absolute inset-0 z-10" ref={containerRef}>
      <Card
        containerRef={containerRef}
        src="/beko1.jpg"
        alt="First draggable card"
        top="2%"
        left="3%"
        className="lg:w-[277px] lg:h-[376px] sm:w-[227px] sm:h-[260px] w-[149px] h-[197px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko2.jpg"
        alt="Second draggable card"
        top="2%"
        left="71%"
        className="lg:w-[279px] lg:h-[368px] sm:w-[209px] sm:h-[288px] size-[174px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko3.jpg"
        alt="Third draggable card"
        top="63%"
        left="71%"
        className="lg:w-[293px] lg:h-[386px] sm:w-[203px] sm:h-[266px] w-[184px] h-[219px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko4.jpg"
        alt="Fourth draggable card"
        top="65%"
        left="3%"
        className="lg:w-[338px] lg:h-[328px] sm:w-[258px] sm:h-[238px] w-[145px] h-[159px]"
      />
    </div>
  );
};

const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  top,
  left,
  className,
  alt = "Draggable card",
}) => {
  const { zIndex, bringToFront } = useZIndexManager();

  return (
    <motion.img
      onMouseDown={bringToFront}
      style={{
        top,
        left,
        zIndex,
      }}
      className={twMerge(
        "drag-elements absolute object-cover rounded-xl cursor-grab active:cursor-grabbing select-none",
        className
      )}
      src={src}
      alt={alt}
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileTap={{ scale: 1.02 }}
      whileHover={{ scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      // Uncomment below and remove dragElastic to remove movement after release
      // dragMomentum={false}
    />
  );
};

export default About;