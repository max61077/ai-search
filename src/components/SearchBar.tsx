import { IPerson } from '@/models/interface/person.interface'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'

interface IProps {
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setPersonDetail: Dispatch<SetStateAction<IPerson | null>>
}

const SearchBar: React.FC<IProps> = ({ setIsLoading, setPersonDetail }) => {

    const [name, setName] = useState<string>('John')

    const getAge = useCallback(async () => {
        try {
            const response = await fetch(`https://api.agify.io/?name=${name}`);

            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }, [name])

    const getGender = useCallback(async () => {
        try {
            const response = await fetch(`https://api.genderize.io/?name=${name}`);

            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }, [name])

    const getCountry = useCallback(async () => {
        try {
            const response = await fetch(`https://api.nationalize.io/?name=${name}`);

            return await response.json();
        } catch (error) {
            console.log(error)
        }
    }, [name])

    const getSearchSuggestions = useCallback(async () => {
        try {
            setIsLoading(true)
            const response = await Promise.all([getAge(), getGender(), getCountry()])

            setPersonDetail({
                age: response[0].age,
                gender: response[1].gender,
                country: response[2].country[0].country_id || 'N/A'
            })

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }, [name])

    useEffect(() => {
        /**
         * Debouncing   
         * make an api call after every key press
         * but if the difference between two api calls is less than 300ms
         * decline the api call
         */
        const timer = setTimeout(() => {
            if (name.length > 0) getSearchSuggestions()
            else {
                setPersonDetail({
                    age: 0,
                    gender: '',
                    country: ''
                })
            }
        }, 300);

        return () => {
            clearTimeout(timer)
        }

    }, [name])

    return (
        <div className='border-solid border-2 border-gray-600 p-5 w-[50%] rounded-md' >
            <input autoFocus onChange={e => setName(e.target.value)} className='outline-none w-[100%]' type='text' placeholder='Enter Name' />
        </div>
    )
}

export default SearchBar