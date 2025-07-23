import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      {/* colums */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-600">
        {/* logo */}
        <div>
          <img
            src={assets.logo}
            alt="the logo text for the project"
            className="w-13.5"
          />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            obcaecati temporibus, quibusdam maiores dignissimos recusandae
          </p>
        </div>
        <div></div>
      </div>
      <p className="py-4 text-center text-sm md:text-base text-gray-600">
        Open Source MIT 2025
      </p>
    </div>
  );
};

export default Footer;
