import React from "react";
import { assets } from "../assets/assets";

const HeaderSection = () => {
  return (
    <main className="border-1 border-red-600 mx-8 sm:mx-16 relative">
      {/* AI features part */}
      <div className="text-center mt-20 mb-8 border-1 border-green-500">
        <div className="border border-primary/40 bg-primary/10 rounded-full text-sm text-primary inline-flex items-center gap-4 px-6 py-2 mb-4  ">
          <p>Generate your reviews using AI features</p>
          <img src={assets.star_icon} className="w-2.5" alt="icon" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          Welcome to <br />
          <span className="text-primary"> Book Club</span>
        </h1>
        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs">
          Our book club blog is a cozy spot for book lovers to connect, chat
          about their favorite reads, and get lost in lively, fun discussions
          about stories that spark joy and inspiration. make it shorter
        </p>

        <form>
          <input type="text" name="search for books" required />
          <button type="submit">Search</button>
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
