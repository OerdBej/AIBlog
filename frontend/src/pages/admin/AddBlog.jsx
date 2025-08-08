import React, { useState } from "react";
import { assets } from "../../assets/assets";

const AddBlog = () => {
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  };

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
        </label>
        <input
          // selecting the first image from input field
          onChange={(e) => setImage(e.target.files[0])}
          type='file'
          id='image'
          required
          hidden
          className='mt-2 h-16 rounded cursor-pointer'
        />
      </div>
    </form>
  );
};

export default AddBlog;
