import { useEffect } from 'react';
import { Task } from './Task';
import { useAppSelector } from '../hooks';

export const TaksList = () => {
  const tasksRedux = useAppSelector(state => state.todo);

  useEffect(() => {
    console.log({ tasksRedux });
  }, [tasksRedux]);

  return (
    <ul>
      {tasksRedux.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
