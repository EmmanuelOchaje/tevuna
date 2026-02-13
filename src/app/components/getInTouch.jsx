"use client";
import React, { useState } from "react";
import phone from "../images/phone.png";
import location from "../images/location.png";
import email from "../images/email.png";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const info = [
    { text: "Tevuna@gmail.com", src: email, value: "Email" },
    { text: "123456789", src: phone, value: "Phone" },
    { text: "UK, London", src: location, value: "Location" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative font-sans text-[#afb8f8] bg-white py-20 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#00baba]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-[#1b2156]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, margin: "-80px" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-8 h-0.5 bg-[#00baba]" />
          <span className="text-[#00baba] text-sm uppercase tracking-[0.3em] font-medium">
            Contact Us
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - slides from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
          >
            <h2 className="text-5xl font-bold text-[#080c14] leading-tight mb-4">
              Let's Build{" "}
              <span className="bg-linear-to-r from-[#00baba] via-[#1b2156] to-[#00baba] bg-clip-text text-transparent">
                Something Great
              </span>
            </h2>
            <p className="text-md leading-relaxed mb-5">
              Have a project in mind or just want to say hello? We'd love to
              hear from you. Drop us a message and we'll get back to you as soon
              as possible.
            </p>

            {/* Contact details staggered */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-80px" }}
              className="flex flex-col gap-6"
            >
              {info.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-center gap-4"
                >
                  <Image
                    className="w-8 h-8 flex items-center justify-center"
                    alt=""
                    src={item.src}
                  />
                  <div>
                    <p className="text-gray-500 text-sm uppercase tracking-wider mb-0.5">
                      {item.text}
                    </p>
                    <p className="text-xs font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - slides from right */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            className="relative p-8 rounded-2xl border border-gray-100 bg-gray-50 shadow-sm"
          >
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#00baba]/5 blur-2xl pointer-events-none" />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center justify-center h-full py-16 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
                  className="w-16 h-16 rounded-full bg-[#00baba]/20 flex items-center justify-center mb-6"
                >
                  <svg
                    className="w-8 h-8 text-[#00baba]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-[#080c14] text-2xl font-bold mb-3">
                  Message Sent!
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  Thanks for reaching out. We'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      service: "",
                      message: "",
                    });
                  }}
                  className="px-6 py-3 rounded-xl border border-[#00baba]/30 text-[#00baba] text-sm hover:bg-[#00baba]/10 transition-colors duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <motion.div
                  variants={fadeUp}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase tracking-wider">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#080c14] text-sm placeholder-gray-300 focus:outline-none focus:border-[#00baba] transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-gray-500 text-xs uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#080c14] text-sm placeholder-gray-300 focus:outline-none focus:border-[#00baba] transition-all duration-300"
                    />
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="bg-white border border-gray-200 rounded-xl px-4 py-3 text-[#080c14] text-sm placeholder-gray-300 focus:outline-none focus:border-[#00baba] transition-all duration-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  variants={fadeUp}
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-4 rounded-xl bg-[#00baba] hover:bg-[#009999] text-white font-semibold text-sm tracking-wide transition-colors duration-300 hover:shadow-lg hover:shadow-[#00baba]/20"
                >
                  Send Message
                </motion.button>
              </motion.form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
