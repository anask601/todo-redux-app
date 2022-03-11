import React from "react";

const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-between w-screen h-20 shadow-md shadow-emerald-900 bg-sky-500">
        <div className="ml-5 heading">
          <h1 className="text-4xl font-bold h">My Todo's</h1>
        </div>
        <div className="flex w-2/12 buttons justify-evenly"></div>
      </header>
    </div>
  );
};

export default Header;
