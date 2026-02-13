"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import quoteLeft from "../images/quote-left.png";
import quoteRight from "../images/quote-right.png";
import webDevelopment from "../images/web-development.jpg";
import mobileDevelopment from "../images/mobile-development.jpg";
import techSolutions from "../images/tech-solutions.jpg";
import uiux from "../images/uiux.jpg";
import digitalStrategy from "../images/digital-strategy.jpg";
import branding from "../images/branding.jpg";

const works = [
  { title: "Web Development", image: webDevelopment },
  { title: "Mobile Apps", image: mobileDevelopment },
  { title: "Branding", image: branding },
  { title: "Digital Strategy", image: digitalStrategy },
  { title: "UIUX", image: uiux },
  { title: "Tech Solutions", image: techSolutions },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: 60, transition: { duration: 0.4, ease: "easeIn" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const SectionTwo = () => {
  const [hovered, setHovered] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // once: false — animates every time it enters/leaves view
  const sectionInView = useInView(sectionRef, {
    once: false,
    margin: "-100px",
  });
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <div
      id="sectionTwo"
      ref={sectionRef}
      className="flex flex-col min-h-screen pt-20 font-cabin items-center"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        variants={fadeUp}
        initial="hidden"
        animate={headerInView ? "show" : "exit"}
        className="flex flex-col items-center gap-4"
      >
        <button className="mx-auto px-6 tracking-widest py-3 rounded-lg bg-[#1b2156]">
          Our Services
        </button>

        <h2 className="text-2xl md:text-4xl my-4 gap-3 italic flex text-[#afb8f8]">
          <span>
            <Image src={quoteLeft} className="w-3 md:w-8 h-3 md:h-8" alt="" />
          </span>
          Your Vision, Our Blueprint
          <span>
            <Image src={quoteRight} className="w-3 md:w-8 h-3 md:h-8" alt="" />
          </span>
        </h2>

        <h2 className="text-sm md:text-lg opacity-75 font-sans font-light tracking-[.1rem] text-[#afb8f8]">
          Where collaboration meets strategic precision.
        </h2>
      </motion.div>

      {/* Grid */}
      <motion.div
        ref={gridRef}
        variants={stagger}
        initial="hidden"
        animate={gridInView ? "show" : "exit"}
        className="my-10 grid font-sans grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6"
      >
        {works.map((work, index) => (
          <motion.div
            key={index}
            variants={cardVariant}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-xl overflow-hidden cursor-pointer group h-80"
          >
            <Image
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#00baba]/50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <h3 className="text-white text-2xl tracking-wider font-bold">
                {work.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionTwo;
