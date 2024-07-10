import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootState, AppDispatch } from '../redux/store';
import { addTodo, toggleTodo, removeTodo } from '../redux/todo/todoSlice';

const TodoList: React.FC = () => {
  const todos = useSelector((state: AppRootState) => state.todo.todos);
  const dispatch = useDispatch<AppDispatch>();
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      dispatch(addTodo(newTodo.trim()));
      setNewTodo('');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <form onSubmit={handleAddTodo} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 w-full"
        >
          Add Todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between bg-gray-100 p-2 mb-2 rounded">
            <span
              className={`flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
