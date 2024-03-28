"use client";

import { useState } from "react";

export default function Page() {

  const [count, setCount] = useState(0);  
  const [show, setShow] = useState(false)

  
  const handeClickButton = () => {
     setShow(!show)
  }

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handeClickButton} className="bg-blue-500">{show ? 'Ocultar' : 'Mostrar'}Área secreta</button>
      {show &&
      <div className="w p-3 bg-blue-300 rounded-md mt-3">Área secreta</div>
      }
    </div>    
  );
}
