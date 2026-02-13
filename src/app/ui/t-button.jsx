import React from "react";

const TButton = ({ children }) => {
  return (
    <button className="bg-transparent font-sans border-[#afb8f8] border hover:opacity-75 transition-all ease-linear .5s w-fit hidden md:block px-6 py-3 rounded-lg cursor-pointer font-medium text-md">
      {children}
    </button>
  );
};

export default TButton;
