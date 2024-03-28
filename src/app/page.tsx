"use client";

import { CustomButtom } from "@/components/CustomButtom";
import { useState } from "react";

export default function Page() {

  const [count, setCount] = useState(0);  
  
  const handeClickButton = () => {
    setCount(count +1);
  }

  return (
    <div className="w-screen h-screen  bg-slate-700 flex flex-col justify-center items-center">
      <p>{count}</p>
      <button onClick={handeClickButton} className="bg-blue-500">+1</button>
    </div>    
  );
}
