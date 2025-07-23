import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";

const Blog = () => {
  const { id } = useParams();

  //get all blog data
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    // if data is = to params
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  //component loaded get data
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div>
      <h3>This is data</h3>
    </div>
  ) : (
    <h3>Loading</h3>
  );
};

export default Blog;
