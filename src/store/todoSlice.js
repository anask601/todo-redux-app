import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo(state, action) {
      const newItem = action.payload;
      const existingTodo = state.todos.find(
        (todo) => todo.title === newItem.title
      );
      if (!existingTodo) {
        state.todos.push(newItem);
      }
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    replaceTodos(state, action) {
      state.todos = action.payload.todos;
    },
  },
});

export const { addTodo, removeTodo, replaceTodos } = todoSlice.actions;
export default todoSlice;
