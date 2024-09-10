// store.js
import { createStore } from 'redux';

// Step 3: Reducer (A pure function to handle state changes)
const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Create Redux store
const store = createStore(counterReducer);

export default store;
