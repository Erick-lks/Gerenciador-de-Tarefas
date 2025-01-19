import { ListCheck, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetails(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-8 bg-pink-100 rounded-md shadow-sm">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-orange-400 text-white p-3 text-left rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetails(task)}
            className="bg-green-500 text-white  rounded-md p-3"
          >
            <ListCheck />
          </button>
          <button
            onClick={() => props.onDeleleTaskClick(task.id)}
            className="bg-red-800 text-white  rounded-md p-3"
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}
