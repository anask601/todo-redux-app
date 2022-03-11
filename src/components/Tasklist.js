import React from "react";
import { useSelector } from "react-redux";

const TaskList = (props) => {
  const todo = useSelector((state) => state.data);
  console.log(todo);
  return (
    <>
      {todo?.map((task) => (
        <div className="w-1/3 bg-pink-700">
          <h2 className="text-white bg-black">{task.title}</h2>
          <button
            // onClick={() => deleteHandler(task.id)}
            className="p-2 m-4 bg-cyan-500"
          >
            Delete!
          </button>
        </div>
      ))}
    </>
  );
};

export default TaskList;
