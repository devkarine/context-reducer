import { createContext, useContext, useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';
import { Todo } from '../types/Todo';
import { ReducerActions } from '../reducers/ReducerActions';

const TodoContext = createContext<null | {
  tasks: Todo[];
  dispatch: React.Dispatch<ReducerActions>;
}>(null);

const initialTODOs: Todo[] = [
  { id: 0, text: 'Fazer café', done: true },
  { id: 1, text: 'Estudar React', done: false },
  { id: 2, text: 'Fazer Aula de Context', done: false },
  { id: 3, text: 'dormir', done: false }
];

export const TodoProvider = ({ children }: React.PropsWithChildren) => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTODOs);

  return (
    <TodoContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const ctx = useContext(TodoContext);

  if (!ctx) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return ctx;
};
