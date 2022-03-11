import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTodoData, todoActions } from "../store/todoSlice";

const Form = () => {
  const [title, setTitle] = useState("");

  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    dispatch(todoActions.addTodo(title));
  };
  useEffect(() => {
    dispatch(fetchTodoData());
  }, [dispatch]);

  return (
    <div>
      <form
        className="absolute flex flex-col items-center justify-between w-1/3 p-3 m-auto bg-gray-200 rounded-lg shadow-lg h-50 shadow-slate-400 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        onSubmit={addTodoHandler}
      >
        <div className="flex justify-between w-full">
          <label className="relative w-1/4 p-3 text-2xl font-bold left-3">
            Title:
          </label>
          <input
            type="text"
            className="w-full p-2 mr-10 text-black outline-emerald-700"
            placeholder="Enter your task!"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button className="p-2 text-white transition rounded-md bg-slate-800 hover:bg-slate-600 hover:-translate-y-1">
            ➕
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
