import React from 'react'

const ShimmerUI = () => {
    return (

        <div className='w-[50%] my-20'>
            <div className='animate-pulse rounded-md border border-indigo-300 p-5 my-2'>
                <div className='h-2 bg-indigo-100 rounded w-3/4 mb-2'></div>
                <div className='h-2 bg-indigo-100 rounded w-1/2'></div>
            </div>
            
            <div className='animate-pulse rounded-md border border-indigo-300 p-5 my-2'>
                <div className='h-2 bg-indigo-100 rounded w-3/4 mb-2'></div>
                <div className='h-2 bg-indigo-100 rounded w-1/2'></div>
            </div>

            <div className='animate-pulse rounded-md border border-indigo-300 p-5 my-2'>
                <div className='h-2 bg-indigo-100 rounded w-3/4 mb-2'></div>
                <div className='h-2 bg-indigo-100 rounded w-1/2'></div>
            </div>
        </div>
    )
}

export default ShimmerUI