import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets";
import Quill from "quill";

const AddBlog = () => {
  // reference variable for Quill documentation

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

  // quill
  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  const generateContent = async () => {};
  return (
    <form
      onSubmit={submitHandler}
      className='flex bg-blue-50/50 text-gray-600 h-full overflow-scroll'
    >
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:sm-10 shadow rounded'>
        <p>Upload thumbnail</p>
        <label htmlFor='image'>
          <img
            // 💡 image state is OK display it & or display thumbnail
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt=''
          />
          <input
            // selecting the first image from input field
            onChange={(e) => setImage(e.target.files[0])}
            type='file'
            id='image'
            required
            hidden
            className='mt-2 h-16 rounded cursor-pointer'
          />
        </label>
        {/* text */}
        <p className='mt-4'>Blog title</p>
        <input
          type='text'
          placeholder='type your text here'
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <p className='mt-4'>Subtitle </p>
        <input
          type='text'
          placeholder='type your text here'
          required
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded'
          onChange={(e) => setSubtitle(e.target.value)}
          value={subtitle}
        />
        <p className='mt-4'>Blog Description</p>

        <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative'>
          {/* to enter the text rich text format */}
          <div ref={editorRef}></div>
          <button
            className='absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer'
            type='button'
            onClick={generateContent}
          >
            AI Blog
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddBlog;
