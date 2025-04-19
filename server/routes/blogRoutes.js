// routes/blogRoutes.js
import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);

// Require login to create, update, or delete
router.post('/',  createBlog);
router.put('/:id',  updateBlog);
router.delete('/:id',  deleteBlog);

export default router;
