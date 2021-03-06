import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeTodo } from "../store/todoSlice";

const TaskList = (props) => {
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      {todos.map((task) => (
        <div className="w-1/3 bg-pink-700">
          <h2 className="text-white bg-black">
            {task.title}
            <button
              onClick={() => deleteHandler(task.id)}
              className="p-2 left-1 bg-cyan-500"
            >
              Delete!
            </button>
          </h2>
        </div>
      ))}
    </>
  );
};

export default TaskList;
