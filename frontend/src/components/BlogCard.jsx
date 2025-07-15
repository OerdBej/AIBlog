import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, descrption, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/blog/${_id}")}>
      <img src={image} className="" />
      <span className="">{category}</span>
      <div>
        <h5>{title}</h5>
        <p>{descrption.slice(0, 90)}</p>
        <h3>blah</h3>
      </div>
    </div>
  );
};

export default BlogCard;
