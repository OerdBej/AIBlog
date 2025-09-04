import jwt from 'jsonwebtoken';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import { Component } from 'react';

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

export const getDashboard = async (req, res) => {
  try {
    //find recent blog
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    //get total number of blogs
    const blogs = await Blog.countDocuments();
    const comments = await Component.countDocuments();
    const drafts = await Blog.countDocuments({ isPublished: false });
    const dashboardData = {
      blogs,
      comments,
      drafts,
      recentBlogs,
    };
    res.json({ success: true, dashboardData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//admin delete comment by ID
export const deleteCommentsById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndDelete(id);
    res.json({ success: true, message: 'Comment deleted' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// approve the commit by ID
export const approveCommentById = async (req, res) => {
  try {
    const { id } = req.body;
    await Comment.findByIdAndUpdate(id, { isApproved: true });
    res.json({ success: true, message: 'Comment approved' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
