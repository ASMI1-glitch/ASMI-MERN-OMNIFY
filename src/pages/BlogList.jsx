// src/pages/BlogList.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs?page=${page}`);
        const data = await res.json();
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Failed to delete blog');
      setBlogs((prev) => prev.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error(err);
      alert('Error deleting blog');
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading blogs...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">All Blogs</h1>
      {blogs.map((blog) => (
        <div key={blog._id} className="mb-6 p-4 border rounded-lg shadow">
          <Link to={`/blog/${blog._id}`}>
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">{blog.title}</h2>
          </Link>
          <p className="text-sm text-gray-500 mb-2">By {blog.author}</p>
          <p className="text-gray-700 mb-2 truncate">{blog.content}</p>

          {currentUser.name === blog.author && (
            <div className="flex gap-2 mt-2">
              <button
                onClick={() => handleEdit(blog._id)}
                className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(blog._id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Pagination */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-600">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogList;
