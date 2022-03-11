import { replaceTodos } from "./todoSlice";

export const fetchTodoData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://todo-app-36d38-default-rtdb.firebaseio.com/todo.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data!");
      }

      const data = await response.json();
      console.log(data);
      return data;
    };

    try {
      const todoData = await fetchData();
      console.log(todoData);
      dispatch(
        replaceTodos({
          todos: todoData.todos || [],
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const sendTodoData = (todo) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://todo-app-36d38-default-rtdb.firebaseio.com/todo.json",
        {
          method: "PUT",
          body: JSON.stringify({
            todos: todo.todos,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending todo data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error.message);
    }
  };
};
