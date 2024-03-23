import { Rate } from '@/components/Rate';
import { peopleList } from '@/data/peopleList'

function Page(){ 
  
  return(
    <div className='w-screen h-screen flex flex-col justify-center items-center text-white
    bg-gradient-to-r from-gray-900 to-gray-800'>
      <div className='text-9xl'>
        <Rate rate={6}/> 
      </div>      
    </div>
  )
}
export default Page;