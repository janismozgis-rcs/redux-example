import { createStore } from 'redux'

const defaultValue = {
    value: 0,
}

function counterReducer(state = defaultValue, action) {
  switch (action.type) {
    case 'increment':
      return { value: state.value }
    case 'decrement':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const store = createStore(counterReducer);

export default store;