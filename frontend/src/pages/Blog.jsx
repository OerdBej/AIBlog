import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Moment from "moment";
import Navbar from "../components/Navbar";

const Blog = () => {
  const { id } = useParams();

  //get all blog data
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchBlogData = async () => {
    // if data is = to params clicked
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  // assets
  const fetchComments = async () => {
    setComments(comments_data);
  };

  //component loaded get data
  useEffect(() => {
    fetchBlogData();
    fetchComments();
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
      <div className="text-center mt-20 text-gray-600">
        <p className="text-primary py-4 font-medium">
          {/* 🔴 moment npm package */}
          Published on {Moment(data.createdAt).format("MMM Do YYYY")}
        </p>
        <h1 className="text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-900">
          {data.title}
        </h1>
        <h2 className="my-5 max-w-lg mx-auto">{data.subTitle}</h2>
        <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm  border-primary/35 bg-purple-700/5 font-medium text-primary">
          ob
        </p>
      </div>

      {/* image */}
      <div className="border-4 border-indigo-500/100 max-w-5xl md:mx-auto mx-5 my-10 mt-6">
        <img src={data.image} alt="thumbnail images" />
        {/* description of the blob text */}
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className="rich-text max-w-3xl mx-auto"
        ></div>
        {/* comments section */}
        <div className="mt-14 mb-10 max-w-3xl mx-auto">
          {/* total number of commemts when page loads */}
          <p>Comments ( {comments.length})</p>
        </div>
      </div>

      <h3>This is data</h3>
    </div>
  ) : (
    // ⭕️ later for the state Loading
    <h3>Loading</h3>
  );
};

export default Blog;
