import { useEffect } from 'react';
import { useTodo } from '../contexts/useTodo';
import { Task } from './Task';

export const TaksList = () => {
  const { tasks } = useTodo();

  useEffect(() => {
    console.log({ tasks });
  }, [tasks]);

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
