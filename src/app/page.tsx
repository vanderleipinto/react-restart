import { Geo, } from "@/components/Geo";
import { Person } from "@/components/Person";


function Page(){
  return(
    <div>
      <h1>Olá mundo</h1>
      <Geo/>
      <Person 
        name="Elon Musk Props"
        avatar= 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg'
        roles= {['Ceo da Tesla', 'Ceo da Spacex']}
      />
    </div>
  )
}

export default Page;