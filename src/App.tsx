import './App.css';

import { TaksList } from './components/TaksList';

import { AddTask } from './components/AddTask';
import { TodoProvider } from './contexts/useTodo';
import { useAppDispatch, useAppSelector } from './hooks';
import { decrement, increment } from './reducers/counterSlice';


export default function App() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>TODO - do Gabriel</h1>
      <br />
      Counter - {count}
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <br />
      <TodoProvider>
        <AddTask />
        <TaksList />
      </TodoProvider>
    </>
  );
}
