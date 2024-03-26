"use client";

import { CustomButtom } from "@/components/CustomButtom";
import { FormEvent } from "react";

export default function Page() {

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Previne o comportamento padrão do form (que é fazer um get para enviar o formulário)
    alert("opa, mandando");
  };

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center">
      
      <h1 className="text-5xl mb-3 bg-blue-300">Form de login</h1>
      <form onSubmit={handleFormSubmit}>
        <input className="p-3 m-3 text-black" type="text" name="" id="" />
        <input type="submit" value="enviar" />
      </form>
      <form onSubmit={(e)  => {e.preventDefault}}>
      </form>
    </div>

    
  );
}
