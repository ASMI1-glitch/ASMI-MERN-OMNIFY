// src/pages/EditBlog.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch blog details on mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!res.ok) throw new Error('Failed to fetch blog');
        const data = await res.json();
        setTitle(data.title);
        setContent(data.content);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Error fetching blog');
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/api/blogs/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error('Failed to update blog');
      navigate(`/blog/${id}`);
    } catch (err) {
      console.error(err);
      alert('Error updating blog');
    }
  };

  if (loading) return <div className="text-center mt-10">Loading blog...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Edit Blog</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Content"
          className="w-full p-3 border rounded-lg h-40 focus:ring-2 focus:ring-pink-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
