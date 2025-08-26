import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';

export const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.json({ success: false, message: 'Missing fields' });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

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

    const image = optimizedImageUrl;
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

// to get all the blogs list

export const getAllBlogs = async (req, res) => {
  try {
    //its its true will return and store
    const blogs = await Blog.find({ isPublished: true });
    res.json({ success: true, message: 'Blog added successfully' });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//getBlogId
export const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.parse;
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
