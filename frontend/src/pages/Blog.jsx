import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data } from "../assets/assets";
import Moment from "moment";
import Navbar from "../components/Navbar";

const Blog = () => {
  const { id } = useParams();

  //get all blog data
  const [data, setData] = useState(null);

  const fetchBlogData = async () => {
    // if data is = to params clicked
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  //component loaded get data
  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div className="relative">
      <img
        src={assets.gradientBackground}
        alt="gradient background"
        className="absolute -top-50 -z-1"
      />
      <Navbar />
      {/* first section */}
      <div>
        <p>Published on {Moment(data.createdAt).format("MMM Do YYYY")}</p>
        <h1>{data.title}</h1>
        <h2>{data.subTitle}</h2>
        <p>ob</p>
      </div>

      {/* image */}
      <div></div>

      <h3>This is data</h3>
    </div>
  ) : (
    // ⭕️ later for the state Loading
    <h3>Loading</h3>
  );
};

export default Blog;
