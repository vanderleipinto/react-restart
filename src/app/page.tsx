import { peopleList } from '@/data/peopleList'

function Page(){
  
  const chemists = peopleList.filter( person => person.profession === 'chemist');
  return(
    <div>
      <h1>Olá mundo</h1>
      {chemists.length > 0 && 
        <>
          <h3>Lista de quimicos</h3>
            <ul>
              {chemists.map(person => 
                  <li key={person.id}> {person.name} - {person.profession}</li>
                )}
            </ul>
          </>
      }
    </div> 
  )
}

export default Page;  