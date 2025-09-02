import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    // this comes from Multer middleware
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: 'Missing fields' });
    }

    //  Multer middleware: after buffer upload to ImageKit
    const fileBuffer = fs.readFileSync(imageFile.path);

    // uploading and optimizing
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: '/blogs',
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: 'auto' },
        { format: 'webp' },
        { width: '1280' },
      ],
    });

    // image url
    const image = optimizedImageUrl;

    // create that Blog from the model
    await Blog.create({
      title,
      subTitle,
      description,
      category,
      image,
      isPublished,
    });
    res.json({ success: true, message: 'Blog added successfully' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// to get all the blogs list - when its published return all
export const getAllBlogs = async (req, res) => {
  try {
    //its its true will return and store
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//getBlogId
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.json({ success: true, message: 'Blog not found ' });
    }
    res.json({ success: true, blog });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//delete blog
export const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    await Blog.findOneAndDelete(id);
    res.json({ success: true, message: 'Blog Deleted' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// toggle published from true / false
export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({ success: true, message: 'Blog status updated' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// comment Schema to db with false by default, approved for publish
export const addComment = async (req, res) => {
  try {
    await Comment.create({ blog, name, content });
    const { blog, name, content } = req.body;
    res.json({ success: true, message: 'A comment added for review' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// comment data for individual blogs with sorting
export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({
      blog: blogId,
      isApproved: true,
    }).sort({ createdAt: -1 });
    res.json({ success: true, comments });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
