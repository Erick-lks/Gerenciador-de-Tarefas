import { useState } from "react";
import Input from "./Inputs";

export default function AddTask({ clickAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-pink-100 p-6 rounded-md  m-1 shadow space-y-5 flex flex-col">
      <Input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Digite o título da Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        name="addTask"
        id="addTask"
        placeholder="Digite a descrição da Tarefa "
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-orange-400 text-white px-4 py-3 rounded-md"
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
