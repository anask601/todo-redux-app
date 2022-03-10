import React, { useState } from "react";

const TaskList = (props) => {
  // const obj = useParams();
  // console.log(obj);
  const [updatedTasks, setUpdatedTasks] = useState(props.tasks);

  const deleteHandler = async (id) => {
    await fetch("http://localhost:8000/todos/" + id, {
      method: "DELETE",
    });

    const res = await fetch("http://localhost:8000/todos/");

    const data = await res.json();

    setUpdatedTasks(data);
  };

  console.log(props.tasks);

  return (
    <>
      {updatedTasks?.map((task) => (
        <div className="w-1/3 bg-pink-700">
          <h2 className="text-white bg-black">{task.title}</h2>
          <span className="m-4 text-white">
            {task.completed === "true" ? "completed" : "Incompleted"}
          </span>
          <button
            onClick={() => deleteHandler(task.id)}
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
