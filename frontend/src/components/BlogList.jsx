import { useState } from "react";
import { blog_data, blogCategories } from "../assets/assets";
import { motion } from "motion/react";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [menu, setMenu] = useState("All");
  return (
    <div>
      {/* categories of tabs */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              className={`cursor-pointer text-gray-600 ${
                menu === item && "text-white px-4 pt-0.5"
              }`}
              onClick={() => setMenu(item)}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-1 bg-[#C03A2B] rounded-full"
                ></motion.div>
              )}
            </button>
          </div>
        ))}
      </div>
      {/* items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40">
        {blog_data
          .filter((blog) => (menu === "All" ? true : blog.category === menu))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  );
};

export default BlogList;
