import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">Asmi Blog</Link>
      <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/create" className="text-blue-500">Create Blog</Link>
            <button onClick={handleLogout} className="text-red-500">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-blue-500">Login</Link>
            <Link to="/signup" className="text-blue-500">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
