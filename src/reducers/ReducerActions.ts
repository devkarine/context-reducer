import { Todo } from '../types/Todo';

export type ReducerActions = {
  type: 'changed';
  task: Todo;
} |
{
  type: 'add';
  text: string;
} |
{
  type: 'delete';
  id: number;
};
