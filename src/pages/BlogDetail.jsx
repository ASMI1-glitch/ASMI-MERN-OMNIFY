import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const currentUser = JSON.parse(localStorage.getItem('user')) || {};

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch blog');
        }
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading blog...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
  if (!blog) return null;

  const { title, content, author } = blog;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-pink-600 mb-4">{title}</h1>
      <p className="text-gray-700 mb-6 whitespace-pre-line">{content}</p>
      <p className="text-sm text-gray-400 mb-6">Author: {author}</p>

      {currentUser.name === author && (
        <button
          onClick={handleEdit}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Edit Blog
        </button>
      )}
    </div>
  );
};

export default BlogDetail;
