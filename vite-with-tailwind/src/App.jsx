import "./App.css";
import Tasks from "./Components/Tasks";
import AddTask from "./Components/AddTask";
import { useState, useEffect } from "react";

import Title from "./Components/Title";
//V4 to generate the id
import { v4 } from "uuid";

function App() {
  //STATE for bring value the tasks if closed the aplicattion
  const [tasks, setTasks] = useState(
    //Receiver the tasks from local storage
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    //change Javascript object to Json string
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  /*

  //UseEffect to call the API
     useEffect(() => {
      async function fetchData() {
        try {
          // call API
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos?_limit=8",
            {
              method: "GET",
            }
          );
          const data = await response.json();
          // Update data receiver from API
          setTasks(data);
        } catch (error) {
          console.error("Erro ao buscar os dados:", error);
        }
      }

    // Chama a função
    fetchData();
  }, []);
*/
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
    <div className="w-screen h-screen bg-orange-200 flex justify-center p-8 ">
      <div className="w-[500px] space -y-5 ">
        <Title>Gerenciador de Tarefas</Title>

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
