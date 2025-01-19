import { useState } from "react";

export default function AddTask({ clickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-slate-200 p-6 rounded-md  m-3 shadow space-y-4 flex flex-col">
      <input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Digite o título da Tarefa"
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Digite a descrição da Tarefa "
        className="border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-slate-600 text-white px-4 py-2 rounded-md"
        onClick={() => {
          //Ckeck if the fields are empty
          if (title.trim() === "" || description.trim() === "") {
            alert("Por favor, preencha todos os campos");
            return;
          }
          clickAddTask(title, description);
          setTitle("");
          setDescription("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}
