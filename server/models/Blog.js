import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String, // Author name like "ASMI"
}, { timestamps: true });

export default mongoose.model('Blog', blogSchema);
