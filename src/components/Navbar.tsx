import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-green-500 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to="/" className="text-white hover:text-green-100 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/counter" className="text-white hover:text-green-100 transition duration-300">
            Counter
          </Link>
        </li>
        <li>
          <Link to="/todos" className="text-white hover:text-green-100 transition duration-300">
            Todos
          </Link>
        </li>
        <li>
          <Link to="/categories" className="text-white hover:text-green-100 transition duration-300">
            Categories
          </Link>
        </li>
        <li>
          <Link to="/products" className="text-white hover:text-green-100 transition duration-300">
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
