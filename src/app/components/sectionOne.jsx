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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % arr.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + arr.length) % arr.length);
  };

  return (
    <motion.div
      id="sectionOne"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="flex justify-center py-20 flex-col"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="font-sans tracking-wider font-medium mx-auto px-6 py-3 rounded-lg bg-[#1b2156]"
      >
        Live Projects
      </motion.button>

      {/* Slider*/}
      <div className="relative max-w-6xl mx-auto w-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {arr.map((item, index) => (
            <div key={index} className="max-w-full px-4">
              <h2 className="md:text-6xl text-3xl font-medium font-cabin my-5 text-center">
                {item.header}
              </h2>
              <p className="text-center text-md md:text-lg w-full font-sans text-[#afb8f8] mx-auto">
                {item.text}
              </p>
              <div className="my-6 relative w-full mx-auto rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute h-full inset-0 bg-[#00baba]/50 rounded-xl flex justify-center items-center transition-opacity duration-500 ease-in-out z-10 opacity-0 group-hover:opacity-100">
                  <Button>View Website</Button>
                </div>
                <Image
                  src={item.image}
                  className="rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-110"
                  alt={item.header}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-1 md:left-50 cursor-pointer top-3/5 -translate-y-1/2 hover:bg-[#00baba]/10 rounded-full border p-3 hover:shadow-xl transition-all duration-300 z-20"
        >
          <Image src={chevronLeft} className="w-5 h-5" alt="prev" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-1 md:right-50 cursor-pointer top-3/5 -translate-y-1/2 hover:bg-[#00baba]/10 rounded-full border p-3 transition-all duration-300 z-20"
        >
          <Image src={chevronRight} className="w-5 h-5" alt="next" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 md:mt-6">
          {arr.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#00baba] w-8"
                  : "bg-gray-400 w-3 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionOne;
