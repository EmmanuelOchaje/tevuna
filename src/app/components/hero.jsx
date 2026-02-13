"use client";
import React from "react";
import Button from "../ui/button";
import TButton from "../ui/t-button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="#"
      className="py-20 md:py-28 lg:py-32 px-6 md:px-16 lg:px-24 xl:px-50"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="bg-linear-to-r font-cabin from-[#00baba] via-white to-[#00baba] bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl leading-tight">
          We Explore Beautiful Experience
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-white font-cabin text-4xl md:text-5xl lg:text-6xl leading-tight">
          Explore our portfolio
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <p className="text-base md:text-lg text-left font-sans max-w-2xl text-[#afb8f8] leading-8 my-5">
          Discover our collection of perfectly crafted custom software solutions
          built to solve a problem or meet a customer's exact need. Every
          project represents a fully satisfied and happy customer, and you can
          be the next.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        className="flex flex-wrap gap-4 mt-6"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button>Get in Touch</Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <TButton>View Projects</TButton>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
