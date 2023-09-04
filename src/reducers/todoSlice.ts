import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Todo } from '../types/Todo';

const initialState: Todo[] = [
  { id: 0, text: 'Dar aula de Redux', done: true },
  { id: 1, text: 'Tirar duvidas', done: false },
  { id: 2, text: 'Passar vergonha', done: false },
  { id: 3, text: 'dormir', done: false }
];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<{ text: string }>) => {
      return [
        ...state,
        {
          id: state.length,
          text: action.payload.text,
          done: false
        }
      ];
    },
    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      return state.filter(t => t.id !== action.payload.id);
    },
    changeTodo: (state, action: PayloadAction<Todo>) => {
      return state.map(t => {
        if (t.id === action.payload.id) {
          return action.payload;
        } else {
          return t;
        }
      });
    }
  }
});

export const { addTodo, deleteTodo, changeTodo } = todoSlice.actions;

export default todoSlice.reducer;
