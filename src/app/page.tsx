'use client'

import { CustomButtom } from "@/components/CustomButtom";

function Page(){ 

  const handleButton1 = (msg:string) => alert(msg); //recebendo parâmetro
  const handleButton2 = () => alert('Clicou no botão 2');
  const handleButton3 = () => alert('Clicou no botão 3');
 
  return(
    <div className='w-screen h-screen flex justify-center items-center'>
        <CustomButtom label = 'Clique aqui 1' onClick = {() => handleButton1('Clicou no botão 1')}/ > //enviando parâmetro
        <CustomButtom label = 'Clique aqui 2' onClick = {handleButton2}/ >
        <CustomButtom label = 'Clique aqui 3' onClick = {handleButton3}/ >
    </div>
  )
}
export default Page;