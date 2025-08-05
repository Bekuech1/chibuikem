import React, { useRef, useState, useCallback, RefObject } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

// === Interface for card props ===
interface CardProps {
  containerRef: RefObject<HTMLDivElement | null>;
  src: string;
  top: string;
  left?: string;
  right?: string;
  className?: string;
  alt?: string;
}

// === Custom hook for managing z-index on drag ===
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

// === Main About section ===
const About: React.FC = () => {
  return (
    <section
      className="relative flex flex-col lg:min-h-[1100px] sm:min-h-[900px] min-h-[800px] w-full justify-center items-center overflow-hidden text-center"
      id="about"
    >
      <h2 className="berlin-sans relative md:text-[36px] text-[24px] font-normal text-white leading-[100%] uppercase w-full">
        Beyond the screen
      </h2>
      <p className="geist relative md:text-[16px] text-[14px] font-normal text-white leading-[130%] max-w-xl mt-4 -z-10 px-8">
        I&apos;m more than just a developer — I&apos;m a creator shaped by rhythm,
        movement, and emotion. When I&apos;m not immersed in lines of code, you&apos;ll
        find me on the basketball court where precision, pace, and flow drive
        every move. That same instinct for motion translates into the animations
        and interactions I build on the web. I&apos;m a lover of art — drawn to
        color, form, and visual storytelling. It fuels my eye for design,
        helping me craft interfaces that don&apos;t just function, but feel right.
        And music? It&apos;s my constant. Whether it&apos;s soul, hip-hop, or ambient
        beats, music helps me find the rhythm in my workflow and the harmony in
        my designs. All these pieces come together in how I build. I don&apos;t just
        develop websites, I create digital spaces that feel alive,
        thoughtful and real.
      </p>
      <Cards />
    </section>
  );
};

// === Cards container ===
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
        right="3%"
        className="lg:w-[279px] lg:h-[368px] sm:w-[209px] sm:h-[288px] size-[174px]"
      />
      <Card
        containerRef={containerRef}
        src="/beko3.jpg"
        alt="Third draggable card"
        top="63%"
        right="3%"
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

// === Single card component ===
const Card: React.FC<CardProps> = ({
  containerRef,
  src,
  top,
  left,
  right,
  className,
  alt = "Draggable card",
}) => {
  const { zIndex, bringToFront } = useZIndexManager();

  return (
    <motion.img
      onMouseDown={bringToFront}
      style={{
        top,
        ...(left ? { left } : {}),
        ...(right ? { right } : {}),
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
    />
  );
};

export default About;
