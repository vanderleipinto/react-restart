"use client";

import { PersonState } from "@/types/PersonState";
import { useState } from "react";



export default function Page() {

  const [fullName, setFullName] = useState<PersonState>({name: 'Vanderlei', lastName: 'Pinto'})  
  
  const handleLimparSomenteNome = () => {
    setFullName({...fullName, name: ''})
  }

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center">
      <input type="text"
      placeholder="Nome"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3 "
      value={fullName.name}
      onChange={e => setFullName({...fullName, name: e.target.value})}
      
      />
      <input type="text"
      placeholder="Sobrenome"
      className="border border-black p-3 text-2xl text-black rounded-md mb-3 "
      value={fullName.lastName}
      onChange={e => setFullName({...fullName, lastName: e.target.value})}
      />

      <p>Meu nome completo é:</p>
      <p>{fullName.name} {fullName.lastName}</p>
      <button className="bg-orange-700 text-white border border-white" onClick={handleLimparSomenteNome} >Limpar somente nome</button>
    </div>
  );
}
