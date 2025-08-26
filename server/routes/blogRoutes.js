import express from 'express';
import { addBlog } from '../controllers/blogController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const blogRouter = express.Router();

// Middleware to handle single-page file uploads from the frontend, parse the file, assign it a proper name, and attach it to req.file. -> also auth middleware

blogRouter.post('/add', upload.single('image'), auth, addBlog);

export default blogRouter;
