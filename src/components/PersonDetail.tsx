import { IPerson } from '@/models/interface/person.interface'
import React from 'react'
import CountryJson from '@/utils/country.json'

const PersonDetail: React.FC<{ personDetail: IPerson | null }> = ({ personDetail }) => {

    const countryJson: any = CountryJson

    return (
        <div className='w-[50%] my-20'>
            <div className='w-[100%] p-5 rounded-md border-indigo-300 border-solid border-2 my-2'>
                <p>Gender {personDetail?.gender ? <strong>{personDetail.gender}</strong> : <strong>N/A</strong>}</p>
            </div>
            <div className='w-[100%] p-5 rounded-md border-indigo-300 border-solid border-2 my-2'>
                <p>Age {personDetail?.age ? <strong>{personDetail.age}</strong> : <strong>N/A</strong>}</p>
            </div>
            <div className='w-[100%] p-5 rounded-md border-indigo-300 border-solid border-2 my-2'>
                <p>Country {personDetail?.country ? <strong>{countryJson[personDetail.country]}</strong> : <strong>N/A</strong>}</p>
            </div>
        </div>
    )
}

export default PersonDetail