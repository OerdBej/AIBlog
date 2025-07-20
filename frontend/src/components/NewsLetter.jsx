import React from "react";

const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 my-32">
      <h1 className="md:text-4xl text-2xl font-semibold">
        Don't miss our blog
      </h1>
      <p className="md:text-lg text-gray-600 pb-8">
        Subscribe to get the latest book blog. A community driven of bookworm
        readers
      </p>
      <form>
        <input type="text" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsLetter;
