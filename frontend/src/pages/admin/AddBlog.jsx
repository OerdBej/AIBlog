import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  const generateContent = async () => {};

  return (
    <form
      onSubmit={submitHandler}
      className='flex justify-center items-start min-h-screen overflow-auto
                 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-700 p-4'
    >
      <div className='bg-white w-full max-w-7xl p-8 md:p-12 rounded-xl shadow-lg space-y-6'>
        {/* Upload Thumbnail */}
        <div>
          <label className='block font-medium mb-2'>Upload Thumbnail</label>
          <label
            htmlFor='image'
            className='inline-block border border-dashed border-gray-300 rounded-lg p-2 cursor-pointer hover:border-primary transition'
          >
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt='thumbnail preview'
              className='w-40 h-28 object-cover rounded-md mx-auto'
            />
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type='file'
              id='image'
              required
              hidden
            />
          </label>
        </div>

        {/* Title */}
        <div>
          <label className='block font-medium mb-2'>Blog Title</label>
          <input
            type='text'
            placeholder='Type your blog title...'
            required
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        {/* Subtitle */}
        <div>
          <label className='block font-medium mb-2'>Subtitle</label>
          <input
            type='text'
            placeholder='Type your subtitle...'
            required
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
            onChange={(e) => setSubtitle(e.target.value)}
            value={subtitle}
          />
        </div>

        {/* Blog Description */}
        <div>
          <label className='block font-medium mb-2'>Blog Description</label>
          <div className='relative border border-gray-300 rounded-lg overflow-hidden'>
            <div ref={editorRef} className='min-h-[200px]'></div>
            <button
              className='absolute bottom-2 right-2 text-xs bg-black/70 text-white px-4 py-1.5 rounded hover:bg-black transition'
              type='button'
              onClick={generateContent}
            >
              AI Blog
            </button>
          </div>
        </div>

        {/* Blog Category */}
        <div>
          <label className='block font-medium mb-2'>Blog Category</label>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className='w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
          >
            <option value='' disabled>
              Select Category
            </option>
            {blogCategories.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* Publish Now */}
        <div className='flex items-center gap-3'>
          <input
            type='checkbox'
            checked={isPublished}
            className='w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer'
            onChange={(e) => setIsPublished(e.target.checked)}
          />
          <label className='cursor-pointer'>Publish Now</label>
        </div>

        {/* Submit */}
        <div className='pt-4'>
          <button
            type='submit'
            className='w-full sm:w-44 h-11 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition'
          >
            Add Blog
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;
