import React from "react";
import { assets } from "../assets/assets";

const HeaderSection = () => {
  return (
    <main className=" mx-8 sm:mx-16 relative">
      {/* AI features part */}
      <div className="text-center mt-20 mb-8 ">
        <div className="border border-primary/40 bg-primary/10 rounded-full text-sm text-primary inline-flex items-center gap-4 px-6 py-2 mb-4  ">
          <p>Generate your reviews using AI features</p>
          <img src={assets.star_icon} className="w-2.5" alt="icon" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Welcome to <br />
          <span className="text-[#C03A2B]"> Book Club</span>
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          Our book club blog is a cozy spot for book lovers to connect, chat
          about their favorite reads, and get lost in lively, fun discussions
          about stories that spark joy and inspiration. make it shorter
        </p>

        <form className="border flex justify-between max-w-lg max-sm:scale-75 mx-auto border-gray-300 bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="search for books"
            required
            className="w-full pl-4 outline-none"
          />
          <button
            type="submit"
            className="bg-[#c03a2be5] text-white px-8 py-2 m-1.5 rounded-3xl hover:scale-105 transition-all cursor-pointer "
          >
            Search
          </button>
        </form>
      </div>
      {/* Gradient of the page */}
      <img
        src={assets.gradientBackground}
        className="absolute -top-75 -z-1"
        alt="this is a gradient for the page in form of image"
      />
    </main>
  );
};

export default HeaderSection;
