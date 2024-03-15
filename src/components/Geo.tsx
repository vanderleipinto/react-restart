import { Circle } from "./Circle"
import { Square } from "./Square"

export const Geo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Aqui temos vários componentes importados de outros. </h1>
      
      <div className="flex gap-2 bord2 p-3">
        <Square/>
        <Circle/>
       </div>
    </div>
  )
}