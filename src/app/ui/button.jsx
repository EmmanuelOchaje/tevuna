import React from "react";

const Button = ({ children }) => {
  return (
    <button className="bg-[#00baba] hover:opacity-75 font-sans transition-all ease-linear .5s w-fit hidden md:block px-6 py-3 rounded-lg cursor-pointer font-medium text-md">
      {children}
    </button>
  );
};

export default Button;
