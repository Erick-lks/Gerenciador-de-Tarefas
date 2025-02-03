import { ChevronLeftCircleIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../Components/Title";

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
    <div className="w-screen h-screen bg-orange-400  flex justify-center p-6 ">
      <div className="w-[500px] space -y-5 ">
        <div className="flex justify-center relative mb-5">
          <button
            onClick={onBackClick}
            className="absolute left-6 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftCircleIcon />
          </button>
          <Title>Details the Task</Title>
        </div>
        <div className="bg-pink-200 p-4 rounded-md shadow">
          <h2 className="text-xl font-bold text-black"> {title}</h2>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}
