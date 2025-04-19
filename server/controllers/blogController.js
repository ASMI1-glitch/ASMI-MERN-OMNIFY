import Blog from '../models/Blog.js';

// GET all blogs with pagination
export const getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 5;
    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments();
    const blogs = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      blogs,
      totalPages: Math.ceil(totalBlogs / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blogs' });
  }
};

// GET blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch blog' });
  }
};

// POST create a blog (no auth)
export const createBlog = async (req, res) => {
  try {
    const { title, content, author } = req.body;

    if (!title || !content || !author) {
      return res.status(400).json({ message: 'Title, content and author are required' });
    }

    const blog = await Blog.create({ title, content, author });
    res.status(201).json(blog);
  } catch (err) {
    console.error('Error creating blog:', err.message);
    res.status(400).json({ message: 'Invalid blog data' });
  }
};

// PUT update a blog (no auth, but should be restricted on frontend)
export const updateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = await Blog.findById(req.params.id);

    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    blog.title = title || blog.title;
    blog.content = content || blog.content;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ message: 'Update failed' });
  }
};

// DELETE a blog (no auth, but should be restricted on frontend)
export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });

    await blog.deleteOne();
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Delete failed' });
  }
};
