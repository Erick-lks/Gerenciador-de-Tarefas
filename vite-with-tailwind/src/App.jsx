import "./App.css";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTaskes] = useState([
    {
      id: 1,
      title: " Study English ",
      description:
        " Study english because will be a great Developer  Full Stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: " Learn React ",
      description: " Learn React to build modern web applications",
      isCompleted: false,
    },

  
  ]);

  return (
    <div className="w-screen h-screen bg-slate-400 flex justify-center p-6 ">
      <div className="w-[500px] ">
        <h1 className="text-3xl text-slate-50 font-bold text-center">
          Gerenciador de Tarefas!
        </h1>
        <Tasks tasks={tasks} />
        <AddTask />
      </div>
    </div>
  );
}

export default App;
