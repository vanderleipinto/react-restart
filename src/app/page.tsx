import { peopleList } from '@/data/peopleList'

function Page(){
  

  return(
    <div>
      <h1>Olá mundo</h1>
      {peopleList.length > 0 && 
        <ul>
          {peopleList.map(person => 
              <li key={person.id}> {person.name} - {person.profession}</li>
            )}
        </ul>
      }
    </div> 
  )
}

export default Page;  