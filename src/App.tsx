import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import store  from './redux/store'; 
import Home from './components/Home';
import Categories from './components/Categories';
import Product from './components/ProductsPage';
import Counter from './components/CounterPage';
import TodoList from './components/TodoPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-md">
            <ul className="flex p-4 justify-center">
              <li className="mx-2"><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
              <li className="mx-2"><Link to="/categories" className="text-blue-500 hover:text-blue-700">Categories</Link></li>
              <li className="mx-2"><Link to="/products" className="text-blue-500 hover:text-blue-700">Products</Link></li>
              <li className="mx-2"><Link to="/counter" className="text-blue-500 hover:text-blue-700">Counter</Link></li>
              <li className="mx-2"><Link to="/todo" className="text-blue-500 hover:text-blue-700">Todo List</Link></li>
            </ul>
          </nav>

          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/products" element={<Product />} />
              <Route path="/counter" element={<Counter />} />
              <Route path="/todo" element={<TodoList />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;