import { Card } from "@/components/Card";
import { Circle } from "@/components/Circle";
import { Geo, } from "@/components/Geo";
import { Person } from "@/components/Person";


function Page(){
  return(
    <div>
      <h1>Olá mundo</h1>
      
      <Card>
      <>
          <h1 className="text-3xl font-bold italic"> Tudo que vier aqui será children lá no componente.</h1>
          <p className="text-right text-sm"> "Author descohecido"</p>
          <p> Essa children por estar envolvida em blanckets (fragment) será considerada um jsx, o que exige um type 
            (children: ReactNode;)
            diferente lá no componente. </p>
            <Circle/>
      </>
      </Card>
    </div>
  )
}

export default Page; 