// src/pages/CreateBlog.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  // Optional: Auto-fill author from localStorage if user is logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.name) {
      setAuthor(storedUser.name);
    } else if (storedUser?.email) {
      setAuthor(storedUser.email);
    }
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content, author }),
      });

      if (!res.ok) throw new Error('Failed to create blog');

      const data = await res.json();
      console.log('Blog created:', data);

      navigate('/'); // Redirect to home after successful creation
    } catch (err) {
      console.error(err);
      alert('Error creating blog');
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-pink-600 mb-4">Create New Blog</h1>
      <form onSubmit={handleCreate} className="space-y-4">
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
        <input
          type="text"
          placeholder="Author"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
          value={author}
          onChange={(e) => setAuthor(e.target.value)} // ✅ Make it editable
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
