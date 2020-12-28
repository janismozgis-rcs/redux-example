import Counter from '../Store/Counter';

function Input() {
  const increment = () => Counter.dispatch({ type: 'increment' });
  const decrement = () => Counter.dispatch({ type: 'decrement' });

    return (
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
  
  export default Input;