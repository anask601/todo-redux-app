import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 shadow-md shadow-emerald-900 bg-sky-500">
        <div className="ml-5 heading">
          <h1 className="text-4xl font-bold h">My Todo's</h1>
        </div>
        <div className="flex w-2/12 buttons justify-evenly">
          <div className="p-3 text-white transition rounded-md shadow-md bg-stone-800 hover:-translate-y-1 hover:bg-stone-600 shadow-slate-600">
            Add New Task
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
