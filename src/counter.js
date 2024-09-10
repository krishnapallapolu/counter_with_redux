// Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'; // Import actions

const Counter = () => {
  // Use useSelector to access the Redux store state
  const count = useSelector((state) => state.count);

  // Use useDispatch to dispatch actions
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button className='bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => dispatch(increment())}>Increment</button>
      <button className='bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2' onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
