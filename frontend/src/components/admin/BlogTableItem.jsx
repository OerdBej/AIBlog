import React from "react";

const BlogTableItem = ({ blog, fetchBlog, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  return (
    <tr className='border-y border-gray-300'>
      <th className='px-2 py-4'>{index}</th>

      <td className='px-2 py-4 max-sm:hidden'>{BlogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      <td className='px-2 py-4 flex text-xs gap-3'>
        <button>{blog.isPublished ? "Unpublish" : "Publish"}</button>
      </td>
    </tr>
  );
};

export default BlogTableItem;
