import { StudentTable } from '@/components/StudentTable';
import { studentsList } from '@/data/students'

function Page(){ 
  
  return(
    <div className='container mx-auto'>
      <h1 className='text-5xl mb-5'>Lista de estudantes</h1>
      <StudentTable students={studentsList}/>
    </div>
  )
}
export default Page;