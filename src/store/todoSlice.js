import { createSlice } from "@reduxjs/toolkit";

//
// const dummyArray = [
//   { id: "m1", title: "first task" },
//   { id: "m2", title: "second task" },
// ];

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
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice;
