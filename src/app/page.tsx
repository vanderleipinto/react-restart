"use client";

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";



export default function Page() {

  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    {label: 'Homework', checked: false },
    {label: 'Dinner', checked: true }
  ]);

  const handleAddItem = () => {
    if (itemInput.trim() === '') return;    
    {
    setList([...list, {label:itemInput, checked:false}])
    }
    setItemInput('');
  }

  const handleDeleteItem = (index:number) => {
    setList(
      list.filter((item, key) => key !== index) // os itens cujo key(index) == index vão ser filtrados e não retornarão.
    )
  }

  const toggleItem = (index: number) => {
    
    let cloneList = [...list];
    cloneList[index].checked = !cloneList[index].checked;
    setList(cloneList)
    
  }

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-700">

        <input 
          type="text" 
          placeholder="O que deseja fazer?"
          className="flex-1 border border-black p-3 text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => (setItemInput(e.target.value))}
          />

          <button onClick={ handleAddItem }>Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
          {list.map((item, index) => (
            <li key={index}>
              <input type="checkbox" onClick={() => toggleItem(index)} checked={item.checked} className="w-6 h-6 mr-3"/>  
              {item.label} 
              <button onClick={() => handleDeleteItem(index) } className="bg-orange-400 text-white hover:bg-orange-700">Delete</button>
            </li>
          ))}
      </ul>

      
    </div>
  );
}
