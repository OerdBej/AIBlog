import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subTitle: { type: String },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    isPublished: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', blogSchema);

export default Comment;
