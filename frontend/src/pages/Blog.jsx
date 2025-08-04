import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, blog_data, comments_data } from "../assets/assets";
import Moment from "moment";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loading from "../components/Loading";

const Blog = () => {
  const { id } = useParams();

  //get all blog data
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  // form state data
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const fetchBlogData = async () => {
    // if data is = to params clicked
    const data = blog_data.find((item) => item._id === id);
    setData(data);
  };

  // assets
  const fetchComments = async () => {
    setComments(comments_data);
  };

  //add comment function
  const addComment = async (e) => {
    e.preventDefault();
  };

  //component loaded get data
  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div className='relative'>
      <img
        src={assets.gradientBackground}
        alt='gradient background'
        className='absolute -top-50 -z-1'
      />
      <Navbar />
      {/* first section */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          {/* 🔴 moment npm package */}
          Published on {Moment(data.createdAt).format("MMM Do YYYY")}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-900'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-lg mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm  border-primary/35 bg-purple-700/5 font-medium text-primary'>
          ob
        </p>
      </div>

      {/* image */}
      <div className=' max-w-5xl md:mx-auto mx-5 my-10 mt-6'>
        <img src={data.image} alt='thumbnail images' />
        {/* description of the blob text */}
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          className='rich-text max-w-3xl mx-auto'
        ></div>
        {/* comments section */}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          {/* total number of commemts when page loads */}
          <p className='font-semibold mb-5'>Comments ( {comments.length})</p>
          {/* comments for the display */}
          <div className='flex flex-col gap-4'>
            {comments.map((item, index) => (
              <div
                key={index}
                className='relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-500'
              >
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt='just icon' className='w-6' />
                  <p className='font-medium'> {item.name}</p>
                </div>
                <p className='text-sm max-2-md ml-8'>{item.content}</p>
                <div className='absolute right-2 bottom-0.8 flex items-center gap-2 text-xs'>
                  {Moment(item.createdAt).fromNow()}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* form box*/}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>add comment</p>
          <form
            className='flex flex-col items-start gap-4 max-w-lg'
            onSubmit={addComment}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type='text'
              placeholder='user name'
              required
              className='w-full p-2 border border-gray-300 rounded outline-none'
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder='comment here'
              className='w-full p-2 border border-gray-300 rounded outline-none h-48'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-primary text-white rounded p-2 px-8 hower:scale-102 transition-all cursor-pointer'
            >
              submit
            </button>
          </form>
        </div>
        {/* social media icons */}
        <div className='my-24 max-2-3xl mx-auto'>
          <p className='font-semibold my-4'>
            share this article on social media
          </p>
          {/* icons */}
          <div className='flex'>
            <img src={assets.facebook_icon} alt='facebook icons' width={50} />
            <img src={assets.twitter_icon} alt='twitter icons' width={50} />
            <img src={assets.googleplus_icon} alt='google icons' width={50} />
          </div>
        </div>
        {/* footer */}
      </div>
      <Footer />

      <h3>This is data</h3>
    </div>
  ) : (
    // ⭕️ later for the state Loading
    <Loading />
  );
};

export default Blog;
