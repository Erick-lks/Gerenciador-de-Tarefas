import "./App.css";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    //Receiver the tasks from local storage
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    //change Javascript object to Json string
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //Need update the Task
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      //without update
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleleTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);
    setTasks(newTasks);
  }

  function clickAddTask(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space -y-5 ">
        <h1 className="text-3xl text-slate-100 m-4 font-bold text-center">
          Gerenciador de Tarefas!
        </h1>

        <AddTask clickAddTask={clickAddTask} />

        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleleTaskClick={onDeleleTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
