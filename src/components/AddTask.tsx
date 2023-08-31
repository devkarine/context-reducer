import { useState } from 'react';
import { useTodo } from '../contexts/useTodo';

export const AddTask = () => {
  const { dispatch } = useTodo();

  const [text, setText] = useState('');

  const onAdd = (text: string) => {
    dispatch({
      type: 'add',
      text
    });
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
