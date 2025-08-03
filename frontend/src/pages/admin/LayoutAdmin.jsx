import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LayoutAdmin = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex items-center justify-between py-2 h-[70x] px-4 sm:px-12 border-b border-gray-200">
        <img
          src={assets.logo}
          alt="the logo"
          className="w-30 sm:w-19 cursor-pointer "
          onClick={() => navigate("/")}
        />
        <button
          onClick={logout}
          className="text-sm px-8 py-2 bg-primary text-white rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default LayoutAdmin;
