import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Simulated login
    localStorage.setItem('token', 'demo-token');
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-pink-100 to-purple-200">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-pink-500 mb-6">Login to Asmi Blog</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">Login</button>
      </form>
    </div>
  );
};

export default Login;
