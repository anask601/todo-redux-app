import React, { useState } from "react";
// import { useHistory } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");

  const [completed, setCompleted] = useState("");

  // const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    const dataFromInputs = { title, completed };
    console.log(dataFromInputs);
    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataFromInputs),
    }).then(() => {
      // history.push("/home");
    });
  };

  return (
    <div className="">
      <form
        className="absolute flex flex-col items-center justify-between w-1/3 p-3 m-auto bg-gray-200 rounded-lg shadow-lg h-50 shadow-slate-400 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4"
        onSubmit={submitHandler}
      >
        <div className="flex justify-between w-full title">
          <label className="w-1/4 text-2xl font-bold ">Title :</label>
          <input
            type="text"
            className="mr-10 text-black w-80 outline-emerald-900"
            placeholder="Enter your title!"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="items-center w-full mt-10 status h-1/2">
          <div className="flex justify-start w-2/3 ">
            <label className="w-5/12 text-2xl font-bold">Status : </label>
            <select
              value={completed}
              className=" outline-black"
              onChange={(event) => setCompleted(event.target.value)}
            >
              <option value={false}>Pending</option>
              <option value={true}>Completed!</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end w-full button">
          <button className="p-2 text-white transition rounded-md bg-slate-800 hover:bg-slate-600 hover:-translate-y-1">
            Add
          </button>
        </div>
      </form>

      {/* <div className="check">
        <p>{title}</p>
        <p>{completed}</p>
      </div> */}
    </div>
  );
};

export default Form;
