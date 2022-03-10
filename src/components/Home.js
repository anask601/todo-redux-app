import React, { useState } from "react";
import { useEffect } from "react";
import TaskList from "./Tasklist";

const Home = () => {
  const [data, setData] = useState(null);
  let names;
  const url = "http://localhost:8000/todos";
  useEffect(() => {
    async function fetching() {
      try {
        const fetchedData = await fetch(url);
        names = await fetchedData.json();
        setData(names);
      } catch {
        console.log("Data Doesn't Found!");
      }
    }
    fetching();
  }, [url]);

  return (
    <div className="grid grid-col-3">
      {data && <TaskList tasks={data}></TaskList>}
    </div>
  );
};

export default Home;
