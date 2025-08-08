import React from "react";
import { assets } from "../../assets/assets";

const AddBlog = () => {
  return (
    <form className='flex bg-blue-50/50 text-gray-600 h-full overflow-scroll'>
      <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:sm-10 shadow rounded'>
        <p>Upload thumbnail</p>
        <label htmlFor='image'>
          <img src={assets.upload_area} alt='' />
        </label>
        <input
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
