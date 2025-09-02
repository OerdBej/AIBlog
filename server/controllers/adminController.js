import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

// get the data AND verify email/pass so we can get auth token
export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.json({ success: false, message: 'invalid credentials' });
    }
    //send the token to response
    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// admin can get blog list  = find all the blog post wether isPublish is true or false
export const getAllBlogsAdmin = async (req, res) => {
  try {
    // get all the blogs and sort them
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//admin can see all comments if they are approved. find and populate with our data
export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({})
      .populate('blog')
      .sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
