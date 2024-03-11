import SearchBar from '@/components/SearchBar'
import { useState } from 'react'
import { IPerson } from '@/models/interface/person.interface';
import ShimmerUI from '@/components/shared/ShimmerUI';
import PersonDetail from '@/components/PersonDetail';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [personDetail, setPersonDetail] = useState<IPerson | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='font-bold mb-8 text-xl '>Get AI Generated Person Details using their names!!!.</h1>

      <SearchBar setIsLoading={setIsLoading} setPersonDetail={setPersonDetail} />

      {
        isLoading
          ?
          <ShimmerUI />
          :
          <PersonDetail personDetail={personDetail} />
      }
    </main>
  )
}
