import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  function onBackClick() {
    navigate(-1);
    //or onClick={() => navigate(-1)} in button onClick
    //this is same thing!
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6 ">
      <div className="w-[500px] space -y-5 ">
        <div className="flex justify-center relative mb-5">
          <button
            onClick={onBackClick}
            className="absolute left-6 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftCircleIcon />
          </button>
          <h1 className="text-3xl text-slate-100 m-4 font-bold text-center">
            Details the Task
          </h1>
        </div>
        <div className="bg-slate-300 p-4 rounded-md shadow">
          <h2 className="text-xl font-bold text-slate-600"> {title}</h2>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
