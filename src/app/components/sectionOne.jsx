"use client";
import React, { useState } from "react";
import Button from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import grocery from "../images/grocery.jpg";
import school from "../images/school.jpg";
import chart from "../images/chart.jpg";
import techie from "../images/techie.jpg";
import chevronLeft from "../images/chevron-left.png";
import chevronRight from "../images/chevron-right.png";

const arr = [
  {
    header: "All Fresh Foods",
    text: "A curated selection of farm-fresh produce and premium foods, carefully sourced to bring wholesome goodness to your table.",
    image: grocery,
  },
  {
    header: "Tevuna Academy",
    text: "Quality education and innovative learning experiences designed to inspire growth, build character, and unlock lifelong success.",
    image: school,
  },
  {
    header: "Analytics Platform",
    text: "An insight-driven platform delivering deep business intelligence through smart data visualization and predictive analytics.",
    image: chart,
  },
  {
    header: "Smart CRM Solution",
    text: "A powerful CRM built to strengthen customer relationships through intelligent insights and seamless business automation.",
    image: techie,
  },
];

const SectionOne = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % arr.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + arr.length) % arr.length);

  return (
    <motion.div
      id="portfolio"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex justify-center py-12 md:py-20 flex-col px-4 md:px-6"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-sans tracking-wider font-medium mx-auto px-6 py-3 rounded-lg bg-[#1b2156] text-sm md:text-base"
      >
        Live Projects
      </motion.button>

      {/* Slider */}
      <div className="relative w-full max-w-4xl mx-auto mt-6 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {arr.map((item, index) => (
            <div key={index} className="min-w-full px-2 md:px-8 lg:px-16">
              {/* Text content */}
              <div className="text-center mb-4 md:mb-6 px-8 md:px-16">
                <h2 className="text-4xl bg-linear-to-r from-[#00baba] via-white to-[#00baba] bg-clip-text text-transparent md:text-5xl lg:text-6xl font-medium font-cabin my-3 md:my-5">
                  {item.header}
                </h2>
                <p className="text-xs text-balance md:text-lg font-sans text-[#afb8f8] max-w-full mx-auto leading-relaxed">
                  {item.text}
                </p>
              </div>

              {/* Image */}
              <div className="relative w-fit mx-auto rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-[#00baba]/50 rounded-xl flex justify-center items-center transition-opacity duration-500 ease-in-out z-10 opacity-0 group-hover:opacity-100">
                  <Button>View Website</Button>
                </div>
                <Image
                  src={item.image}
                  alt={item.header}
                  className="rounded-xl w-full h-48 sm:h-64 md:h-80 lg:h-96 transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 top-3/5 -translate-y-1/2 bg-black/20 hover:bg-[#00baba]/20 rounded-full border border-white/20 p-2 md:p-3 hover:shadow-xl transition-all duration-300 z-20"
        >
          <Image
            src={chevronLeft}
            className="w-4 h-4 md:w-5 md:h-5"
            alt="prev"
          />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 top-3/5 -translate-y-1/2 bg-black/20 hover:bg-[#00baba]/20 rounded-full border border-white/20 p-2 md:p-3 hover:shadow-xl transition-all duration-300 z-20"
        >
          <Image
            src={chevronRight}
            className="w-4 h-4 md:w-5 md:h-5"
            alt="next"
          />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4 md:mt-6">
          {arr.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#00baba] w-6 md:w-8"
                  : "bg-gray-400 w-2 md:w-3 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionOne;
