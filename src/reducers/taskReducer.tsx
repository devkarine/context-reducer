import { Todo } from '../types/Todo';
import { ReducerActions } from './ReducerActions';

export const taskReducer = (tasks: Todo[], action: ReducerActions) => {
  switch (action.type) {
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'add': {
      return [
        ...tasks,
        {
          id: tasks.length,
          text: action.text,
          done: false
        }
      ];
    }
    case 'delete': {
      return tasks.filter(t => t.id !== action.id);
    }
  }
};
