"use client";
import React, { useState, useEffect, useRef } from "react";
import StatCard from "./statCard";
import { useInView, motion } from "framer-motion";

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "+", label: "Team Members" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const About = () => {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative text-[#afb8f8] font-sans pt-20 pb-10 px-6 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00baba]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#1b2156]/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-0.5 bg-[#00baba]" />
          <span className="text-[#00baba] text-sm uppercase tracking-[0.3em] font-medium">
            Who We Are
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - slides from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
          >
            <h2 className="text-5xl font-bold text-white leading-tight mb-8">
              We Are{" "}
              <span className="bg-linear-to-r from-[#00baba] via-white to-[#00baba] bg-clip-text text-transparent">
                Tenuva
              </span>
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              A team of curious minds, creative builders, and problem solvers
              who love what technology can do for businesses. From building
              sleek websites and powerful mobile apps to crafting memorable
              brands and smart marketing campaigns, we offer everything you need
              to thrive in the digital world.
            </p>
            <p className="text-base leading-relaxed mb-10">
              Our approach is simple: understand your goals, bring our best
              ideas to the table, and build something you're proud of.
            </p>
          </motion.div>

          {/* Right - slides from right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-6"
          >
            {/* Stats staggered */}
            <motion.div
              ref={statsRef}
              variants={stagger}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={fadeUp}>
                  <StatCard
                    stat={stat}
                    index={index}
                    isVisible={isVisible}
                    hoveredStat={hoveredStat}
                    setHoveredStat={setHoveredStat}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Quote card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              transition={{ delay: 0.4 }}
              className="relative p-8 rounded-2xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#00baba]/10 blur-2xl pointer-events-none" />
              <p className="text-lg font-medium mb-2">
                "Build something you're proud of."
              </p>
              <p className="text-gray-500 text-sm">
                That's not just our promise — it's how we work every single day.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00baba]/20 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-[#00baba]" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tenuva Team</p>
                  <p className="text-gray-600 text-xs">
                    Tech Solutions Company
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
