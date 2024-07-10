import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppRootState, AppDispatch } from '../redux/store';
import { increment, decrement, incrementByAmount } from '../redux/counter/counterSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: AppRootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const [incrementAmount, setIncrementAmount] = useState<number>(0);

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4">
      <h2 className="text-2xl font-bold mb-4">Counter</h2>
      <div className="flex items-center justify-center mb-4">
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          -
        </button>
        <span className="text-2xl mx-4">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-center">
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
          className="shadow appearance-none border rounded w-20 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
        />
        <button
          onClick={() => dispatch(incrementByAmount(incrementAmount))}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
