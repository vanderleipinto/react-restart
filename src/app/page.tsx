"use client";

import { useState } from "react";

export default function Page() {

  const [nameInput, setNameInput] = useState('')

  
  const handleBtnClick = () => {
     alert(nameInput)
  }

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center">
      <input type="text" 
      className="border text-black p-3 rounded text-xl" 
      placeholder="Digite Seu nome"
      value={nameInput}
      onChange={e => setNameInput(e.target.value)}
      />
      <button onClick={handleBtnClick}>Mostrar valor do campo</button>
      <p>Seu nome é {nameInput}</p>
    </div>    
  );
}
