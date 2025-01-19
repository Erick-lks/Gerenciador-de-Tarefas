import { BookCheck, Trash } from "lucide-react";
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
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow-sm">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-white p-3 text-left rounded-md w-full ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetails(task)}
            className="bg-slate-400 text-white  rounded-md "
          >
            <BookCheck />
          </button>
          <button
            onClick={() => props.onDeleleTaskClick(task.id)}
            className="bg-slate-400 text-white  rounded-md "
          >
            <Trash />
          </button>
        </li>
      ))}
    </ul>
  );
}
