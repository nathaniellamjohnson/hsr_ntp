import React, { useEffect } from "react";
import "./Main.css"

import Time from "./components/Time"
import RotatingImage from "./components/RotatingImage";
import { TodoList } from "./components/TodoList";
import NewTaskForm from "./components/NewTaskForm";

const Main = () => {
  return (
    <div className="flex flex-row items-center h-screen bg-stone-800 ">
      <div className="text-white ml-[5%] space-y-4">
        <h1 className="font-sans text-8xl" >What to do, what to do?</h1>
        <Time />
        <NewTaskForm />
        <TodoList />
      </div>
      <div className="ml-auto mr-[5%]">
        <RotatingImage />
      </div>
    </div>
  );
};

export default Main;
