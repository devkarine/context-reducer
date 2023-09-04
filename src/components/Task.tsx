import { useState } from 'react';
import { Todo } from '../types/Todo';
import { useAppDispatch } from '../hooks';
import { changeTodo, deleteTodo } from '../reducers/todoSlice';

export const Task = ({ task }: { task: Todo }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [text, setText] = useState(task.text);

  const dispatchRedux = useAppDispatch();

  const onSave = () => {
    dispatchRedux(
      changeTodo({
        ...task,
        text
      })
    );
  };

  const onDelete = (id: number) => {
    dispatchRedux(deleteTodo({ id: id }));
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatchRedux(
            changeTodo({
              ...task,
              done: e.target.checked
            })
          );
        }}
      />
      {isEditing ? (
        <>
          <input value={text} onChange={e => setText(e.target.value)} />
          <button
            onClick={() => {
              setIsEditing(false);
              onSave();
            }}
          >
            Save
          </button>
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
