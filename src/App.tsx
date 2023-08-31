import './App.css';

import { TaksList } from './components/TaksList';

import { AddTask } from './components/AddTask';
import { TodoProvider } from './contexts/useTodo';

export default function App() {
  return (
    <>
      <h1>TODO - do Gabriel</h1>
      <TodoProvider>
        <AddTask />
        <TaksList />
      </TodoProvider>
    </>
  );
}
