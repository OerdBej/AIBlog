import express from 'express';
import {
  addBlog,
  addComment,
  deleteBlogById,
  getAllBlogs,
  getBlogById,
  getBlogComments,
  togglePublish,
} from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// Middleware to handle single-page file uploads from the frontend, parse the file, assign it a proper name, and attach it to req.file. -> also auth middleware
blogRouter.post('/add', upload.single('image'), auth, addBlog);
blogRouter.get('/all', getAllBlogs);
blogRouter.get('/:blogId', getBlogById);
// only admins can do it => so we protect it with AUTH
blogRouter.post('/delete', auth, deleteBlogById);
blogRouter.post('/toggle-publish', auth, togglePublish);

// comments
blogRouter.post('/add-comment', addComment);
blogRouter.post('/comments', getBlogComments);

export default blogRouter;
