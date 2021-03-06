import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const toggleCounterHandler = () => {};

  const incrementHandler = () =>{
    dispatch ({ type: 'increment' });
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 })
  }

  const decrementHandler = () => {
    dispatch ({ type: 'decrement' });
  }
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ increaseHandler }>Increase by 10</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
