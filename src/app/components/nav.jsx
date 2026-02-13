"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../images/tevuna-logo-4.png";
import menu from "../images/menu-white.png";
import Link from "next/link";
import collapse from "../images/right-arrow-white.png";
import Button from "../ui/button";

const links = [
  { label: "home", href: "#" },
  { label: "about", href: "#about" },
  { label: "services", href: "#services" },
  { label: "portfolio", href: "#portfolio" },
  { label: "contact us", href: "#contact" },
];

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex font-sans items-center justify-between md:px-25 px-5 pt-5">
      <Image src={logo} className="w-30 h-14" alt="Tevuna logo" />
      <div className="md:flex gap-10 hidden capitalize text-md">
        {links.map((item, index) => (
          <Link href={item.href} key={index} className="cursor-pointer">
            {item.label}
          </Link>
        ))}
      </div>
      <Button>Get In Touch</Button>
      <Image
        src={menu}
        className="md:hidden w-6 h-6 cursor-pointer"
        alt="hamburger"
        onClick={() => {
          document.body.style.overflow = "hidden";
          setIsOpen(true);
        }}
      />
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => {
            document.body.style.overflow = "visible";
            setIsOpen(false);
          }}
        />
      )}
      <div
        className={`fixed h-screen w-2/3 z-20 bg-[#17223e] inset-y-0 right-0 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="my-10 flex justify-end pr-10">
          <Image
            src={collapse}
            className="w-8 h-8 cursor-pointer"
            alt="close"
            onClick={() => {
              document.body.style.overflow = "visible";
              setIsOpen(false);
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-center py-15 gap-10 capitalize text-md">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-center cursor-pointer"
              onClick={() => {
                document.body.style.overflow = "unset";
                setIsOpen(false);
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
