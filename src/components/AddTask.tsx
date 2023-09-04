import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { addTodo } from '../reducers/todoSlice';

export const AddTask = () => {
  const [text, setText] = useState('');

  const dispatchRedux = useAppDispatch();

  const onAdd = (text: string) => {
    dispatchRedux(addTodo({ text }));
  };

  return (
    <>
      <input
        placeholder="Add Task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAdd(text);
          setText('');
        }}
      >
        Add
      </button>
    </>
  );
};
