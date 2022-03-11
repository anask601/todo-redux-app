import { createSlice } from "@reduxjs/toolkit";

export const fetchTodoData = () => {
  return async () => {
    const fetchData = async () => {
      const response = await fetch(
        "https://todo-app-36d38-default-rtdb.firebaseio.com/todo.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();

      return data;
    };
  };
};

const initialState = {
  items: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newItem = action.payload;
      state.items.push({
        id: newItem.id,
        title: newItem.title,
      });
    },
    removeTodo(state, action) {
      return state.items.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
