import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          to="/categories"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
        >
          Browse Categories
        </Link>
        <Link
          to="/products"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
        >
          View Products
        </Link>
        <Link
          to="/counter"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
        >
          Try Counter
        </Link>
        <Link
          to="/todo"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-6 rounded-lg text-center transition duration-300"
        >
          Manage Todo List
        </Link>
      </div>
    </div>
  );
};

export default Home;
