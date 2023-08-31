import { useState } from 'react';
import { Todo } from '../types/Todo';
import { useTodo } from '../contexts/useTodo';


export const Task = ({
  task,
}: {
  task: Todo
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const { dispatch } = useTodo();
  
  const onChange = (task: Todo) => {
    dispatch({
      type: 'changed',
      task
    });
  };

  const onDelete = (id: number) => {
    dispatch({
      type: 'delete',
      id
    });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }} />
      {isEditing ? (
        <>
          <input
            value={task.text}
            onChange={e => {
              onChange({
                ...task,
                text: e.target.value
              });
            }} />
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
       <button onClick={() => onDelete(task.id)}>Delete</button>
    </label>
  );
};
