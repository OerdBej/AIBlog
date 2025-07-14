import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="logo for the project"
        className="w-6 h-6 sm:w-24 sm:h-24 cursor-pointer"
      />
      <button
        onClick={() => navigate("/admin")}
        className="flex items-center gap-2 rounded-full text-sm bg-[#4A90E2] text-white px-10 py-2.5 cursor-pointer"
      >
        Login
        <img src={assets.arrow} alt="the logo" className="w-2 h-1.5" />
      </button>
    </div>
  );
};

export default Navbar;
