"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";
import logo from "../images/tevuna-logo-4.png";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Footer = () => {
  const links = {
    Company: ["About", "Projects", "Services", "Blog"],
    Contact: ["tenuva@gmail.com", "123456789", "London, UK"],
  };

  return (
    <footer className="bg-[#17223e] font-sans px-6 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 col-span-1 sm:col-span-2 lg:col-span-2"
          >
            <Image src={logo} className="w-fit h-16" alt="Tenuva Logo" />
            <p className="text-[#afb8f8] max-w-xs text-sm leading-relaxed">
              Curious minds, creative builders, and problem solvers building
              technology that works for people.
            </p>
            {/* Socials */}
            <div className="flex gap-3 mt-2">
              {[instagram, facebook, twitter].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href="#"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 hover:border-[#00baba]/40 transition-colors duration-300"
                  >
                    <Image
                      src={item}
                      alt=""
                      className="w-5 h-5"
                      width={20}
                      height={20}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(links).map(([heading, items]) => (
            <motion.div key={heading} variants={fadeUp}>
              <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6">
                {heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="text-[#afb8f8] text-sm hover:text-[#00baba] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[#afb8f8] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Tenuva. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
